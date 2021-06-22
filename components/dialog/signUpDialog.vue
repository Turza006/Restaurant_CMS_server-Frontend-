<template>
  <div>
    <v-dialog persistent v-if="!$vuetify.breakpoint.mobile" v-model="dialog" max-width="1000">
      <v-card :loading="isLoading">
        <v-card-title class="primary white--text">
          <h4>Sign Up</h4>
          <v-spacer />
          <v-btn icon large text class="white--text" @click="closeSignUp()">
            <v-icon large>
              mdi-close
            </v-icon>
          </v-btn>
        </v-card-title>
        <ApolloMutation
          :mutation="require('@/graphql/mutations/auth.gql')"
          :variables="{ payload: {firstName, lastName, email, phoneNo, password} }"
          @done="onDone"
        >
          <template #default="{mutate}">
            <v-layout class="pa-5">
              <v-flex xs6 md6 sm12 class="pa-8">
                <v-img
                  width="500"
                  src="https://img.freepik.com/free-vector/registration-online-concept_23-2147987277.jpg?size=338&ext=jpg&ga=GA1.2.1372094696.1610650111"
                />
              </v-flex>
              <v-flex xs6 md6 sm12>
                <v-form ref="form" class="pa-8 px-12">
                  <v-text-field
                    v-model="firstName"
                    class="mt-1"
                    :rules="firstNameRules"
                    placeholder="Enter your first name"
                    prepend-inner-icon="mdi-account"
                    color="primary"
                    solo
                    dense
                    rounded
                  />
                  <v-text-field
                    v-model="lastName"
                    class="mt-1"
                    :rules="lastNameRules"
                    placeholder="Enter your last name"
                    prepend-inner-icon="mdi-account"
                    color="primary"
                    solo
                    dense
                    rounded
                  />
                  <v-text-field
                    v-model="email"
                    class="mt-1"
                    :rules="emailRules"
                    placeholder="Enter your email"
                    prepend-inner-icon="mdi-gmail"
                    color="primary"
                    solo
                    dense
                    rounded
                  />
                  <v-text-field
                    v-model="phoneNo"
                    :rules="phoneNoRules"
                    class="mt-1"
                    placeholder="Enter your phone number"
                    prepend-inner-icon="mdi-phone"
                    color="primary"
                    solo
                    dense
                    rounded
                  />
                  <v-text-field
                    v-model="password"
                    class="mt-1"
                    :rules="passwordRules"
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="Enter your password"
                    prepend-inner-icon="mdi-key"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    color="primary"
                    solo
                    dense
                    rounded
                    @click:append="showPassword = !showPassword"
                  />
                  <v-checkbox
                    class="primary--text  mt-0"
                    checked
                    dense
                    label="I accept the  terms & privacy policy"
                    @click="isTermsAccepted =!isTermsAccepted"
                  />
                  <div class="text-center">
                    <v-btn
                      :disabled="!isTermsAccepted"
                      :loading="isLoading"
                      small
                      class="primary white--text"
                      rounded
                      @click="performSignUp()"
                    >
                      Sign up
                    </v-btn>
                  </div>
                  <div class="text-center mt-5">
                    <span style="font-size: 13px">Already Have an account?</span>
                    <v-btn
                      x-small
                      text
                      class="px-0 primary--text"
                      style="text-decoration: underline"
                      @click="openLogin()"
                    >
                      sign in
                    </v-btn>
                  </div>
                  <button ref="networkCall" :disabled="isLoading" @click.prevent="mutate()" />
                </v-form>
              </v-flex>
            </v-layout>
          </template>
        </ApolloMutation>
      </v-card>
    </v-dialog>
    <v-dialog persistent v-else v-model="dialog" max-width="1000">
      <v-card :loading="isLoading">
        <v-card-title class="primary white--text">
          <h4>Sign Up</h4>
          <v-spacer />
          <v-btn icon large text class="white--text" @click="closeSignUp()">
            <v-icon large>
              mdi-close
            </v-icon>
          </v-btn>
        </v-card-title>
        <ApolloMutation
            :mutation="require('@/graphql/mutations/auth.gql')"
            :variables="{ payload: {firstName, lastName, email, phoneNo, password} }"
            @done="onDone"
        >
          <template #default="{mutate}">
                <v-img
                    class="mx-auto"
                    width="400"
                    height="auto"
                    src="https://img.freepik.com/free-vector/registration-online-concept_23-2147987277.jpg?size=338&ext=jpg&ga=GA1.2.1372094696.1610650111"
                />
                <v-form ref="form" class="pa-8 px-12">
                  <v-text-field
                      v-model="firstName"
                      class="mt-1"
                      :rules="firstNameRules"
                      placeholder="Enter your first name"
                      prepend-inner-icon="mdi-account"
                      color="primary"
                      solo
                      dense
                      rounded
                  />
                  <v-text-field
                      v-model="lastName"
                      class="mt-1"
                      :rules="lastNameRules"
                      placeholder="Enter your last name"
                      prepend-inner-icon="mdi-account"
                      color="primary"
                      solo
                      dense
                      rounded
                  />
                  <v-text-field
                      v-model="email"
                      class="mt-1"
                      :rules="emailRules"
                      placeholder="Enter your email"
                      prepend-inner-icon="mdi-gmail"
                      color="primary"
                      solo
                      dense
                      rounded
                  />
                  <v-text-field
                      v-model="phoneNo"
                      :rules="phoneNoRules"
                      class="mt-1"
                      placeholder="Enter your phone number"
                      prepend-inner-icon="mdi-phone"
                      color="primary"
                      solo
                      dense
                      rounded
                  />
                  <v-text-field
                      v-model="password"
                      class="mt-1"
                      :rules="passwordRules"
                      :type="showPassword ? 'text' : 'password'"
                      placeholder="Enter your password"
                      prepend-inner-icon="mdi-key"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      color="primary"
                      solo
                      dense
                      rounded
                      @click:append="showPassword = !showPassword"
                  />
                  <v-checkbox
                      class="primary--text  mt-0"
                      checked
                      dense
                      label="I accept the  terms & privacy policy"
                      @click="isTermsAccepted =!isTermsAccepted"
                  />
                  <div class="text-center">
                    <v-btn
                        :disabled="!isTermsAccepted"
                        :loading="isLoading"
                        small
                        class="primary white--text"
                        rounded
                        @click="performSignUp()"
                    >
                      Sign up
                    </v-btn>
                  </div>
                  <div class="text-center mt-5">
                    <span style="font-size: 13px">Already Have an account?</span>
                    <v-btn
                        x-small
                        text
                        class="px-0 primary--text"
                        style="text-decoration: underline"
                        @click="openLogin()"
                    >
                      sign in
                    </v-btn>
                  </div>
                  <button ref="networkCall" :disabled="isLoading" @click.prevent="mutate()" />
                </v-form>
          </template>
        </ApolloMutation>
      </v-card>
    </v-dialog>
    <email-verification-dialog />
  </div>
</template>

<script>
import emailVerificationDialog from './emailVerificationDialog'

export default {
  name: 'SignUpDialog',
  components: { emailVerificationDialog },
  data () {
    return {
      dialog: false,
      isLoading: false,
      isTermsAccepted: false,
      showPassword: false,
      nextAction: null,
      text: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNo: '',
      password: '',
      confirmPassword: '',
      firstNameRules: [
        v => !!v || 'First Name is required',
        v => v.length >= 3 || 'First Name must be at least 3 characters or more.'
      ],
      lastNameRules: [
        v => !!v || 'Last name is required',
        v => v.length >= 2 || 'The last name must be at least 2 characters or more.'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid'
      ],
      phoneNoRules: [
        v => !!v || 'Phone number is required',
        v => /(?=.*\d)/.test(v) || 'Phone number must contain number only',
        v => v.length === 11 || 'The phone number must be 11 digit long.'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Password must contain at least lowercase letter, one number, a special character and one uppercase letter',
        v => v.length >= 8 || 'Password length is too short. Minimum length is 8.'
      ]
    }
  },
  computed: {},
  created () {
    this.$nuxt.$on('toggleSignUpDialog', (nextAction) => {
      if (nextAction !== null) {
        this.nextAction = nextAction
      }
      this.dialog = !this.dialog
    })
  },
  methods: {
    onDone (val) {
      const { data } = val
      this.isLoading = false
      console.log('onDone--->>', data)
      if (data.OwnerSignUp !== null) {
        this.$store.commit('auth/SET_VERIFY_TOKEN', val.data.OwnerSignUp.jwt)
        this.dialog = false
        this.showEmailVerification()
      } else {
        alert('failed')
      }
    },
    showEmailVerification () {
      if (this.nextAction) {
        this.$nuxt.$emit('toggleEmailVerificationDialog', { event: this.nextAction.event, data: this.nextAction.data })
      } else {
        this.$nuxt.$emit('toggleEmailVerificationDialog')
      }
    },
    closeSignUp () {
      this.$nuxt.$emit('toggleSignUpDialog')
    },
    openLogin () {
      this.$nuxt.$emit('toggleSignUpDialog')
      this.$nuxt.$emit('toggleLoginDialog')
    },
    performSignUp () {
      if (this.$refs.form.validate()) {
        this.isLoading = true
        this.$refs.networkCall.click()
      } else {
        console.log('Not valid')
      }
    }
  }
}
</script>

<style scoped>

</style>
