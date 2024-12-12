<template>
    <div class="bus-journey">
        <h1>Bus Journey Details</h1>

        <div class="journey-info">
            <div class="info-item">
                <label><strong>Current Timer:</strong></label>
                <span>{{ timer }}</span>
            </div>
            <div class="info-item">
                <label><strong>Next Stop:</strong></label>
                <span>{{ nextStop }}</span>
            </div>
            <div class="info-item">
                <label><strong>ETA:</strong></label>
                <span>{{ eta }}</span>
            </div>
            <div class="info-item">
                <label><strong>Bus Speed:</strong></label>
                <span>{{ speed }} km/h</span>
            </div>
        </div>

        <div class="actions">
            <button @click="startTimer">Start Timer</button>
            <button @click="stopTimer">Stop Timer</button>
            <button @click="updateNextStop">Update Next Stop</button>
            <div class="speed-actions">
                <span v-if="speed < 40" class="slow">Slow down</span>
                <span v-else-if="speed > 70" class="hurry">Hurry up</span>
                <span v-else class="maintain">Maintain speed</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timer: "00:00:00",
            nextStop: "Not set",
            eta: "Not available",
            speed: 0,
            interval: null
        };
    },
    methods: {
        startTimer() {
            if (this.interval) return;

            let seconds = 0;
            this.interval = setInterval(() => {
                seconds++;
                this.timer = new Date(seconds * 1000).toISOString().substr(11, 8);
            }, 1000);
        },
        stopTimer() {
            clearInterval(this.interval);
            this.interval = null;
        },
        updateNextStop() {
            const stops = ["Stop A", "Stop B", "Stop C", "Stop D"];
            this.nextStop = stops[Math.floor(Math.random() * stops.length)];
            this.eta = `${Math.floor(Math.random() * 30) + 10} mins`;
        },
        simulateSpeed() {
            this.speed = Math.floor(Math.random() * 80) + 20;
        }
    },
    mounted() {
        // Simulate speed updates every 5 seconds
        setInterval(this.simulateSpeed, 5000);
    }
};
</script>

<style>
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    height: 100%;
    font-family: "Roboto", Arial, sans-serif;
    background-color: #e9ecef;
    color: #212529;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Main Container */
.bus-journey {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 600px;
    min-height: 90vh;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    transition: all 0.3s ease;
}

/* Header Styling */
h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
    color: #007bff;
    letter-spacing: 1px;
}

/* Journey Information Section */
.journey-info {
    width: 100%;
    margin-bottom: 20px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.info-item {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    margin-bottom: 12px;
    padding: 8px 0;
    border-bottom: 1px solid #dee2e6;
}

.info-item:last-child {
    border-bottom: none;
}

label {
    font-weight: 600;
    color: #495057;
}

span {
    font-weight: 500;
    color: #343a40;
}

/* Actions Section */
.actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 15px;
}

button {
    width: 100%;
    max-width: 300px;
    padding: 12px 18px;
    margin: 8px 0;
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    background-color: #007bff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
}

button:active {
    transform: translateY(0);
}

/* Speed Actions Styling */
.speed-actions {
    margin-top: 20px;
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
}

.slow {
    color: #dc3545;
}

.hurry {
    color: #ffc107;
}

.maintain {
    color: #28a745;
}

/* Responsive Design */
@media (max-width: 768px) {
    .bus-journey {
        padding: 15px;
        max-width: 100%;
        min-height: 100vh;
    }

    .journey-info {
        padding: 15px;
    }

    button {
        font-size: 0.95rem;
        padding: 10px 15px;
    }

    h1 {
        font-size: 1.8rem;
    }
}

</style>
