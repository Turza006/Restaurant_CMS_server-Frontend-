<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card>
        <v-card-title class="primary white--text">
          Email Verification
        </v-card-title>
        <ApolloMutation
          :mutation="require('@/graphql/mutations/verification.gql')"
          :variables="{ token }"
          @done="onDone"
        >
          <template #default="{ mutate }">
            <v-form ref="form" class="pa-8">
              <v-text-field
                v-model="token"
                color="primary"
                placeholder="Give the token"
                prepend-inner-icon="mdi-key"
                solo
                dense
                rounded
              />
              <div class="text-center">
                <v-btn
                  :disabled="token.length !== 6"
                  :loading="isLoading"
                  small
                  rounded
                  class="primary white--text"
                  @click="sendToken()"
                >
                  submit
                </v-btn>
                <button ref="networkCall" :disabled="isLoading" @click.prevent="mutate()" />
              </div>
            </v-form>
          </template>
        </ApolloMutation>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'EmailVerificationDialog',
  data () {
    return {
      dialog: false,
      isLoading: false,
      nextAction: null,
      token: '',
      tokenRules: [
        v => !!v || 'Token is required',
        v => /(?=.*\d)/.test(v) || 'Token must contain number only',
        v => v.length === 11 || 'The Token must be 6 digit long.'
      ]
    }
  },
  created () {
    this.$nuxt.$on('toggleEmailVerificationDialog', (nextAction) => {
      if (nextAction !== null) {
        this.nextAction = nextAction
      }
      this.dialog = !this.dialog
    })
  },
  methods: {
    onDone (val) {
      this.isLoading = false
      const { data } = val
      console.log(data)
      if (data.OwnerEmailVerification !== null) {
        this.$store.commit('auth/SET_USER_DATA', val.data.OwnerEmailVerification)
        this.dialog = false
        this.$notifier.showMessage({
          content: 'Email verification successful',
          color: 'success'
        })
        if (this.nextAction) {
          this.$nuxt.$emit(this.nextAction.event, this.nextAction.data)
        }
      } else {
        this.$notifier.showMessage({
          content: 'Email verification failed!',
          color: 'error'
        })
      }
    },
    sendToken () {
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
