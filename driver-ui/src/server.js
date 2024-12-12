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

const JourneySchema = new mongoose.Schema({
    time:String,
    origin:String,
    Destination:String,
})

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

// Get driver details by driverId
app.get('/users/:id', async (req, res) => {
    try {
        const driver = await User.find({ driverId: req.params.id });

        if (!driver) {
            return res.status(404).json({ message: 'Driver not found' });
        }

        return res.json(driver);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
});

// Start the server
const PORT = 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
