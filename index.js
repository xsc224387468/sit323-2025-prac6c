const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse query parameters
app.use(express.json());

// Function to validate input
const validateNumbers = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
        return 'Both parameters must be valid numbers.';
    }
    return null;
};

// Addition 
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json({ error });
    res.json({ result: num1 + num2 });
});

// Subtraction 
app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json({ error });
    res.json({ result: num1 - num2 });
});

// Multiplication 
app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json({ error });
    res.json({ result: num1 * num2 });
});

// Division
app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json({ error });
    if (num2 === 0) return res.status(400).json({ error: 'Division by zero is not allowed.' });
    res.json({ result: num1 / num2 });
});

// Start the server
app.listen(port, () => {
    console.log(`Calculator microservice running at http://localhost:${port}`);
});
