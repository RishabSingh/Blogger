const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const User = require('./model/User');


const cors = require('cors');


// Use CORS middleware



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
    origin: 'http://127.0.0.1:5502' // Allow requests from this origin (your front-end)
}));

const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/logindb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

// Serve static files
app.use(express.static('public'));

// Registration route
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  
  
  console.log(username);
  try {
    const user = new User({ username, password });

    await user.save();
    res.send("Hello").status(200);

  } catch (error) {
    res.status(400).send('Error during  registration');
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send('User not found');
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).send('Incorrect password');
    }
    // Set a cookie for authentication
    res.cookie('user', user._id);
    res.send('Login successful!');
  } catch (error) {
    res.status(400).send('Error during login');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port= ${port}`);
});
