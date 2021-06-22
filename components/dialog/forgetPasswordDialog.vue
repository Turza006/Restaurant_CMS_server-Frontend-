<template>
  <div>
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="primary white--text">
          Forget Password
        </v-card-title>
        <ApolloMutation
          :mutation="require('@/graphql/mutations/forgetPassword.gql')"
          :variables="{ email }"
          @done="onDone"
        >
          <template #default="{ mutate }">
            <v-form ref="form" class="pa-8" @submit.prevent="mutate()">
              <v-text-field
                v-model="email"
                type="email"
                :rules="emailRules"
                color="primary"
                placeholder="Enter your email"
                prepend-inner-icon="mdi-gmail"
                solo
                dense
                rounded
              />
              <div class="text-center">
                <v-btn small dense rounded class="primary white--text" @click="forgetPassword()">
                  submit
                </v-btn>
              </div>
              <button ref="networkCall" :disabled="isLoading" @click.prevent="mutate()" />
            </v-form>
          </template>
        </ApolloMutation>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'ForgetPasswordDialog',
  data () {
    return {
      dialog: false,
      isLoading: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  created () {
    this.$nuxt.$on('toggleForgetPasswordDialog', () => {
      this.dialog = !this.dialog
    })
  },
  methods: {
    forgetPasswordToken () {
      this.$nuxt.$emit('toggleForgetPasswordToken')
    },
    onDone (val) {
      if (this.email !== '') {
        const { data } = val
        console.log(data)
      } else {
        alert('Request Fail')
      }
    },
    forgetPassword () {
      if (this.$refs.form.validate()) {
        this.isLoading = true
        this.$refs.networkCall.click()
        this.isLoading = false
        this.dialog = false
        this.forgetPasswordToken()
      } else {
        console.log('Not valid')
      }
    }
  }
}
</script>

<style scoped>

</style>
