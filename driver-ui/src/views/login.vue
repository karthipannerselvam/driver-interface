<template>
  <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
          <div>
              <label for="username">Username:</label>
              <input v-model="username" id="username" type="text" required />
          </div>
          <div>
              <label for="password">Password:</label>
              <input v-model="password" id="password" type="password" required />
          </div>
          <button type="submit">Login</button>
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
      return {
          username: '',
          password: '',
          errorMessage: ''
      };
  },
  methods: {
      async handleLogin() {
          try {
              const response = await axios.post('http://localhost:5000/api/login', {
                  username: this.username,
                  password: this.password
              });

              if (response.data.success) {
                  this.$router.push({ name: 'DriverDetail', params: { id: response.data.driverId } });
              }
          } catch (error) {
              if (error.response && error.response.status === 401) {
                  this.errorMessage = 'Invalid username or password';
              } else {
                  this.errorMessage = 'Server error. Please try again later.';
              }
          }
      }
  }
};
</script>

<style>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
