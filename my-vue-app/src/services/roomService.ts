import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001'; // Update with your backend URL if deployed

export const createRoom = async (): Promise<string> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/rooms`);
        return response.data.room.roomId;
    } catch (error) {
        console.error('Error creating room:', error);
        throw new Error('Failed to create a room');
    }
};

export const getRooms = async (): Promise<any[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/rooms`);
        return response.data.rooms;
    } catch (error) {
        console.error('Error fetching rooms:', error);
        throw new Error('Failed to fetch rooms');
    }
};

export const deleteRoom = async (roomId: string): Promise<void> => {
    try {
        await axios.delete(`${API_BASE_URL}/rooms/${roomId}`);
    } catch (error) {
        console.error('Error deleting room:', error);
        throw new Error('Failed to delete room');
    }
};
