import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import cors from "cors";
import RoutesSetup from "./lib/RoutesSetup.js";
import MongooseSetup from "./lib/MongooseSetup.js";
import PassportSetup from "./lib/PassportSetup.js";

// Load environment variables from .env file
dotenv.config();

// Create Express application
const app = express();

// CORS setup
const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    credentials: true // allows cookies to be sent alongside requests from frontend
};
app.use(cors(corsOptions));

// Session configuration
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // secure cookies in production
        sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax" // CSRF protection
    }
}));

// Clear temporary session values middleware
app.use((req, res, next) => {
    res.locals.notifications = req.session?.notifications;
    delete req.session.notifications;
    next();
});

// MongoDB setup
MongooseSetup();

// Passport.js setup
PassportSetup(app);

// EJS as view engine
app.set("view engine", "ejs");

// Static files configuration
app.use(express.static("public"));
app.use(express.static("avatars"));

// Body parsers for JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Method override middleware for forms that send DELETE/PUT
app.use((req, res, next) => {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
        req.method = req.body._method;
        delete req.body._method;
    }
    next();
});

// Application routes
RoutesSetup(app);

// Error handling middleware
app.use((error, req, res, next) => {
    if (typeof error === "string") {
        error = new Error(error);
    }
    error.status = error.status || 404;
    console.error(error);
    res.format({
        "text/html": () => {
            if (req.session) {
                req.session.notifications = [{
                    alertType: "alert-danger",
                    message: error.message
                }];
            }
            res.status(error.status).redirect("/");
        },
        "application/json": () => {
            res.status(error.status).json({ status: error.status, message: error.message });
        },
        default: () => {
            res.status(406).send("NOT ACCEPTABLE");
        }
    });
});


// Export the configured application
export default app;
