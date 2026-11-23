
const express = require("express");

const app = express();

const PORT = 3000;

// Homepage
app.get("/", (req, res) => {
    res.send(`
        <h1>Welcome to Cloud Health Monitor!</h1>
        <p>My first Dockerized AWS project.</p>
        <p>Application is running successfully.</p>
    `);
});

// Health Check API
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        application: "Cloud Health Monitor",
        message: "Application is running successfully"
    });
});

// Application Info
app.get("/info", (req, res) => {
    res.json({
        application: "Cloud Health Monitor",
        technology: "Node.js",
        containerization: "Docker",
        cloud: "AWS EC2"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
