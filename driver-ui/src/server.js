import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(
    'mongodb+srv://karthics22:rjrbT1Ez34SJvl22@dtc.lewp2.mongodb.net/?retryWrites=true&w=majority&appName=DTC',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Define a User schema and model
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    driverId: String,
});

const User = mongoose.model('User', UserSchema);

// Authentication endpoint
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username, password });
        if (user) {
            res.json({ success: true, driverId: user.driverId });
        } else {
            res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Start the server
const PORT = 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
