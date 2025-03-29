const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse query parameters
app.use(express.json());

// Function to validate input
const validateNumbers = (num1, num2) => {
    if (num1 === undefined || num2 === undefined) {
        return 'Missing required parameters. Please provide both num1 and num2.';
    } else if (isNaN(num1) || isNaN(num2)) {
        return 'Invalid input. Both num1 and num2 must be valid numbers.';
    } else {
        return null; 
    }
};

const validateSingleParam = (num) => {
    if (num === undefined) {
      return 'Missing required parameter. Please provide num1.';
    } else if (isNaN(num)) {
      return 'Invalid input. num1 must be a valid number.';
    } else {
        return null;
    }
  };



// Addition (num1 + num2)
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json({ error });
    res.json({ result: num1 + num2 });
});

// Subtraction (num1 - num2)
app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json({ error });
    res.json({ result: num1 - num2 });
});

// Multiplication (num1 * num2)
app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json({ error });
    res.json({ result: num1 * num2 });
});

// Division (num1 / num2)
app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json({ error });
    if (num2 === 0) return res.status(400).json({ error: 'Division by zero is not allowed.' });
    res.json({ result: num1 / num2 });
});

// exponentiation（num1 ^ num2）
app.get('/power', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json({ error });
    res.json({ result: Math.pow(num1, num2) });
});

// Square（sqrt(num1)）
app.get('/sqrt', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const error = validateSingleParam(num1);
    if (error) return res.status(400).json({ error });
    if (num1 < 0) {
      return res.status(400).json({ error: 'num1 must be non-negative.' });
    }
    res.json({ result: Math.sqrt(num1) });
  });

// Modulo（num1 % num2）
app.get('/modulo', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json({ error });
    if (num2 === 0) return res.status(400).json({ error: 'Modulo by zero is not allowed.' });
    res.json({ result: num1 % num2 });
});


// Start the server
app.listen(port, () => {
    console.log(`Calculator microservice running at http://localhost:${port}`);
});
