<template>
  <div class="">
    <h1>This is the register page!</h1>
    <input type="email" name="email" placeholder="example@email.com" v-model="email">
    <input type="password" name="password" v-model="password">
    <button @click="register">Register</button>
  </div>
</template>

<script>
// @ is an alias to /src
import AuthenticationService from "@/services/AuthenticationService"

export default {
  name: 'register',
  data() {
      return {
          email: '',
          password: ''
      }
  },
  methods: {
      async register() {
          const response = await AuthenticationService.register({
              email: this.email,
              password: this.password
          })
          console.log(response.data);
      }
  }
}
</script>