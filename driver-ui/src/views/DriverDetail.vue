<template>
    <div class="driver-detail">
        <h1>Driver Page</h1>
        <p v-if="driver">Hello, {{ driver.name }}! Welcome to your dashboard.</p>
        <p v-else>Hello! It seems we couldn't find your details.</p>
    </div>
</template>

<script>
export default {
    props: ['id'], // User's ID is passed as a prop
    data() {
        return {
            drivers: {
                '1': { id: '1', name: 'John Doe', vehicle: 'Car' },
                '2': { id: '2', name: 'Jane Smith', vehicle: 'Truck' }
            }
        };
    },
    computed: {
        driver() {
            // Fetch the driver details based on the provided ID
            return this.drivers[this.id];
        }
    }
};
</script>

<style>
.driver-detail {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    text-align: center;
    font-family: Arial, sans-serif;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    color: black;
}
</style>
