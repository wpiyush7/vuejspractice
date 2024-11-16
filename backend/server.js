const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection with retry mechanism
const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    setTimeout(connectToMongo, 5000); // Retry connection after 5 seconds
  }
};

connectToMongo();

// Room Schema and Model
const roomSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Room = mongoose.model('Room', roomSchema);

// Routes

// POST /rooms - Create a new room
app.post('/rooms', async (req, res) => {
    
  try {
    const roomId = `Room-${Math.random().toString(36).substring(2, 8)}`;
    const newRoom = new Room({ roomId });

    // Save the room to MongoDB
    await newRoom.save();
    
    res.status(201).json({
      success: true,
      room: newRoom,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Error creating room',
    });
  }
});

// GET /rooms - Fetch all rooms
app.get('/rooms', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      success: true,
      rooms,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Error fetching rooms',
    });
  }
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
