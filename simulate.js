import axios from 'axios'

// Define the endpoint URL
const endpointUrl = 'http://localhost:3000/bookspace/';

// Function to simulate booking a space
async function bookSpace(spaceId, userId) {
    try {
        // Sending a POST request to book the space
        await axios.post(`${endpointUrl}${spaceId}/${userId}`);
        console.log(`Space ${spaceId} booked by user ${userId}`);
    } catch (error) {
        console.error(`Error booking space ${spaceId} for user ${userId}:`, error.message);
    }
}

//returns error on purpose
async function bookSpaceInvalid(spaceId, userId) {
    try {
        // Sending a POST request to book the space
        await axios.post(`${endpointUrl}${spaceId}/${userId}`);
        console.log(`Space ${spaceId} booked by user ${userId}`);
    } catch (error) {
        console.error(`Error booking space ${spaceId} for user ${userId}:`, error.message);
    }
}

// Simulate two users booking the same space concurrently
async function simulateConcurrentBookings(spaceId, spaceIdInvalid, userId1, userId2, userId3, userId4, userId5, userId6) {
    try {
        // Simulate concurrent bookings using Promise.all()
        await Promise.all([
            bookSpace(spaceId, userId1),
            bookSpace(spaceId, userId2),
            bookSpaceInvalid(spaceIdInvalid, userId3),
            bookSpace(spaceId, userId4),
            bookSpace(spaceId, userId5),
            bookSpace(spaceId, userId6)
        ]);
    } catch (error) {
        console.error('Error during concurrent bookings:', error);
    }
}

// Space ID and user IDs for simulation
const spaceId = 1; 
const spaceIdInvalid = '6h'
const user1Id = 3;
const user2Id = 2; 
const user3Id = 4;
const user4Id = 1;
const user5Id = 5;
const user6Id = 6;

// Simulate concurrent bookings
simulateConcurrentBookings(spaceId, spaceIdInvalid, user1Id, user2Id, user3Id, user4Id, user5Id, user6Id);
