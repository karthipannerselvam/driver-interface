<template>
    <div class="driver-detail">
        <h1>Driver Details</h1>
        <p v-if="driver">Welcome, Driver {{ id }}. Your assigned details are:</p>
        <ul v-if="driver">
            <li><strong>ID:</strong> {{ driver.id }}</li>
            <li><strong>Name:</strong> {{ driver.name }}</li>
            <li><strong>Vehicle:</strong> {{ driver.vehicle }}</li>
        </ul>
        <p v-else>Driver not found.</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
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
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>
