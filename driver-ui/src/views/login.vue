<template>
  <div class="login-container">
    <h2>Login</h2>

    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Enter your username"
          required
        />
      </div>

      <div>
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <div>
        <button type="submit">Login</button>
      </div>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    handleLogin() {
      // Simple validation (for demonstration purposes)
      if (this.username === "user" && this.password === "password123") {
        // Successful login (you could redirect to a different page here)
        this.$router.push("/dashboard"); // Example of redirection after login
      } else {
        this.errorMessage = "Invalid username or password.";
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
}

form div {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  text-align: center;
  font-size: 14px;
}
</style>
