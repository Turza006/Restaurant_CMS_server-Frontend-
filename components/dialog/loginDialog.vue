<template>
  <div>
    <v-dialog v-model="dialog" max-width="420">
      <v-card :loading="isLoading">
        <v-card-title class="primary--text">
          <div class="mx-auto">
            <v-icon x-large class="primary--text">
              mdi-key
            </v-icon>
            <h5>Login</h5>
          </div>
        </v-card-title>
        <v-divider class="mx-10" />
        <ApolloMutation
          :mutation="require('@/graphql/mutations/login.gql')"
          :variables="{ email, password, deviceToken }"
          @done="onDone"
        >
          <template #default="{ mutate }">
            <v-form ref="form" class="pa-8 pb-0">
              <v-text-field
                v-model="email"
                type="email"
                :rules="emailRules"
                class="mt-2"
                color="primary"
                prepend-inner-icon="mdi-gmail"
                placeholder="Enter your email"
                solo
                dense
                rounded
              />
              <v-text-field
                v-model="password"
                color="primary"
                :type="showPassword ? 'text' : 'password'"
                :rules="passwordRules"
                prepend-inner-icon="mdi-key"
                append-icon="mdi-eye"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                placeholder="Enter your password"
                solo
                dense
                rounded
                @click:append="showPassword = !showPassword"
                @keypress.enter=""
              />
              <div class="text-right">
                <v-btn x-small text class="primary--text" @click="forgetDialog">
                  Forget Password ?
                </v-btn>
              </div>
              <div class="text-center mt-3">
                <v-btn
                  :disabled="isLoading"
                  :loading="isLoading"
                  small
                  rounded
                  class="primary white--text"
                  @click="performLogin()"
                >
                  sign In
                </v-btn>
              </div>
              <button ref="networkCall" :disabled="isLoading" @click.prevent="mutate()" />
            </v-form>
          </template>
        </ApolloMutation>
        <div class="text-center mt-5 pb-8">
          <span style="font-size: 14px">Want to Create Account ?</span>
          <v-btn x-small text class="px-0 underline primary--text" @click="signUp">
            click here
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import { API } from '../../util/statusCode'

export default {
  name: 'LoginDialog',
  data () {
    return {
      dialog: false,
      isLoading: false,
      showPassword: false,
      nextAction: null,
      text: '',
      email: 'mridul.das.work@gmail.com',
      password: 'Ab123456',
      deviceToken: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Password must contain at least lowercase letter, one number, a special character and one uppercase letter',
        v => v.length >= 8 || 'Password length is too short. Minimum length is 8.'
      ]
    }
  },
  created () {
    this.$nuxt.$on('toggleLoginDialog', (nextAction) => {
      if (nextAction !== null) {
        this.nextAction = nextAction
      }
      this.dialog = !this.dialog
    })
  },
  methods: {
    signUp () {
      this.dialog = false

      if (this.nextAction) {
        this.$nuxt.$emit('toggleSignUpDialog', { event: this.nextAction.event, data: this.nextAction.data })
      } else {
        this.$nuxt.$emit('toggleSignUpDialog')
      }
    },
    forgetDialog () {
      this.$nuxt.$emit('toggleLoginDialog')
      this.$nuxt.$emit('toggleForgetPasswordDialog')
    },
    async onDone (val) {
      this.isLoading = false
      const { data } = val
      console.log('signIn--->>', data)
      if (data.OwnerLogin !== null) {
        if (data.OwnerLogin.code === API.SUCCESS) {
          await this.$store.commit('auth/SET_USER_DATA', val.data.OwnerLogin)

          this.dialog = false

          if (this.nextAction) {
            this.$nuxt.$emit(this.nextAction.event, this.nextAction.data)
          } else {
            this.nextAction = null
          }
        } else {
          this.$notifier.showMessage({
            content: data.OwnerLogin.msg,
            color: 'error'
          })
        }
      } else {
        this.$notifier.showMessage({
          content: 'Something went wrong, please try again.',
          color: 'error'
        })
      }
    },
    performLogin () {
      if (this.$refs.form.validate()) {
        this.isLoading = true
        this.$refs.networkCall.click()
      } else {
        // alert('Not Valid')
        console.log('Not valid')
      }
    }
  }
}
</script>
