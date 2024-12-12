<template>
    <div class="driver-detail">
      <!-- Icon to show driver details -->
      <div class="header">
        <button @click="toggleDriverDetails">👤</button>
        <div v-if="showDriverDetails">
          <p><strong>Username:</strong> {{ driver.username }}</p>
          <p><strong>Driver ID:</strong> {{ driver.driverId }}</p>
        </div>
      </div>
  
      <!-- Driver Details -->
      <h3 v-if="driver">Welcome, Driver {{ driver.username }}. Your assigned details are:</h3>
      <ul v-if="driver">
        <P><strong>ID:</strong> {{ driver.driverId }}</P>
        <p><strong>Name:</strong> {{ driver.username }}</p>
      </ul>
  
      <!-- Additional Info -->
      <div class="additional-info">
        <h2>Journey Information:</h2>
        <p><strong>Starting Time:</strong> {{ startingTime }}</p>
        <p><strong>Origin:</strong> {{ origin }}</p>
        <p><strong>Destination:</strong> {{ destination }}</p>
      </div>
  
      <!-- Map Section -->
      <div class="map-container">
        <h3>Map</h3>
        <!-- Map Display -->
        <div id="map" style="height: 300px; background-color: #e0e0e0;"></div>
      </div>
  
      <!-- Start Button -->
      <div class="start-button">
        <button @click="startJourney">Start Journey</button>
      </div>
  
      <!-- Error Message -->
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: ['id'],
    data() {
      return {
        driver: null,
        errorMessage: '',
        showDriverDetails: false,
        startingTime: '10:00 AM', // Example static value, replace with dynamic value
        origin: 'New Delhi', // Example origin, replace with dynamic value
        destination: 'Agra', // Example destination, replace with dynamic value
        map: null,
        originLatLng: { lat: 28.6139, lng: 77.2090 }, // Example coordinates for New Delhi
        destinationLatLng: { lat: 27.1767, lng: 78.0081 }, // Example coordinates for Agra
      };
    },
    mounted() {
      console.log("Driver ID:", this.id);
      this.fetchDriverDetails();
      this.initializeMap();
    },
    methods: {
      async fetchDriverDetails() {
        try {
          const response = await axios.get(`http://localhost:5500/users/${this.id}`);
          this.driver = response.data[0]; // Assuming the response data is an array
          console.log(this.driver);
        } catch (error) {
          this.errorMessage = 'Error fetching driver details: ' + error.message;
          console.error('Error fetching driver details:', error);
        }
      },
      toggleDriverDetails() {
        this.showDriverDetails = !this.showDriverDetails;
      },
      startJourney() {
        console.log("Journey Started!");
        // Add the logic to start the journey, e.g., navigate to another page or update status
      },
      initializeMap() {
        // Initialize the map
        this.map = new google.maps.Map(document.getElementById("map"), {
          center: this.originLatLng, // Initial center point (New Delhi)
          zoom: 10,
        });
  
        // Mark the origin and destination on the map
        const originMarker = new google.maps.Marker({
          position: this.originLatLng,
          map: this.map,
          title: "Origin: New Delhi",
        });
  
        const destinationMarker = new google.maps.Marker({
          position: this.destinationLatLng,
          map: this.map,
          title: "Destination: Agra",
        });
  
        // Optionally, add a polyline to connect the origin and destination
        const routePath = new google.maps.Polyline({
          path: [this.originLatLng, this.destinationLatLng],
          geodesic: true,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2,
        });
        routePath.setMap(this.map);
      },
    },
  };
  </script>
  
  <style scoped>
  .driver-detail {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  
  .header button {
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  .additional-info {
    margin-top: 20px;
  }
  
  .map-container {
    margin-top: 20px;
  }
  
  .start-button {
    margin-top: 20px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .error {
    color: red;
    font-size: 1.2rem;
  }
  </style>