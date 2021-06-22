<template>
  <div v-if="!$vuetify.breakpoint.mobile" class="mb-10" id="contact">
    <div class="text-center pb-10">
      <h1 class="display-3 pb-3 primary--text">Contact Us</h1>
      <p class="grey--text" style="font-size: 18px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore
        magna aliqua. </p>
    </div>
    <v-row class="px-5 pb-16">
      <v-col></v-col>
      <v-col class="px-6">
        <v-card class="pa-6" outlined>
          <v-form ref="form">
            <v-text-field color="primary" :rules="emailRules" v-model="form.email" label="Email"
                          placeholder="Enter your email" outlined></v-text-field>
            <v-textarea color="primary" :rules="messageRules" v-model="form.message" label="Message"
                        placeholder="Write message..." outlined></v-textarea>
            <div class="text-center">
                <v-btn
                    :href="link"
                    color="primary white--text"
                    block
                    @click="contact()"
                >Submit</v-btn>
            </div>
          </v-form>
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
  <div v-else class="mb-10">
    <div class="text-center pb-6">
      <h1 class="display-2 pb-3 primary--text">Contact Us</h1>
      <p class="grey--text px-5" style="font-size: 16px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore
        magna aliqua. </p>
    </div>
    <v-row class="px-5 pb-16">
      <v-col class="px-6">
        <v-card class="pa-6" outlined>
          <v-form ref="form">
            <v-text-field color="primary" :rules="emailRules" v-model="form.email" label="Email"
                          placeholder="Enter your email" outlined></v-text-field>
            <v-textarea color="primary" :rules="messageRules" v-model="form.message" label="Message"
                        placeholder="Write message..." outlined></v-textarea>
            <div class="text-center">
                <v-btn
                    :href="link"
                    color="primary white--text"
                    block
                    @click="contact()"
                >Submit</v-btn>
            </div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "contactComponents",
  data() {
    return {
      link: '',
      form: {
        email: '',
        message: ''
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid'
      ],
      messageRules: [
          v => !!v || 'Message is required'
      ]
    }
  },
  methods: {
    contact() {
      if(this.$refs.form.validate() && this.form.email === !null && this.form.message === !null){
        this.link = 'mailto:official@consoleit.io'
      }
      else {
         this.$notifier.showMessage({
           content: 'Fill all the field',
           color: 'error'
         })
      }
    }
  }
}
</script>

<style scoped>
</style>