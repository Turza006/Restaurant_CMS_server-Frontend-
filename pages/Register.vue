<template>
  <div  class="black">
    <v-row>
      <v-col></v-col>
      <v-col class="pa-10">
        <v-card class="pa-10 rounded-lg blue" elevation="20">
          <h2 class="white--text">Register</h2>
          <v-text-field class="white--text" color="white" label="First Name" type="text" v-model="firstName"></v-text-field>
          <v-text-field class="white--text" color="white" label="Last Name" type="text" v-model="lastName"></v-text-field>
          <v-text-field class="white--text" color="white" label="email" type="email" v-model="email"></v-text-field>
          <v-text-field class="white--text" color="white" label="phone number" type="" v-model="phoneNumber"></v-text-field>
          <v-text-field color="white--text" label="password" type="password" v-model="password"></v-text-field>
          <v-row >
            <v-col></v-col>
            <v-col>
              <v-btn color="pink" class="white--text" v-on:click="">Register</v-btn>
            </v-col>
            <v-col></v-col>
          </v-row>
          <p class="mb-0 white--text text-center" style="font-size: 14px"> Have an account? Sign in</p>
        </v-card>

      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
name: "Register",
  layout:"AuthLayout",
  data(){
    return{
      firstName:'',
      lastName:'',
      email:'',
      phoneNumber:'',
      password:''
    }
  }
}
</script>

<style scoped>

</style>
