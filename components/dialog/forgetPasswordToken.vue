<template>
  <div>
    <v-dialog v-model="dialog" max-width="400">
      <v-card flat>
        <v-card-title class="primary white--text">
          Verify Forget Password Token
        </v-card-title>
        <ApolloMutation
          :mutation="require('@/graphql/mutations/forgetPasswordTokenVerify.graphql')"
          :variables="{ token }"
          @done="verifyForgetPasswordToken"
        >
          <template #default="{ mutate }">
            <v-form ref="form" class="pa-8">
              <label>Verify token: </label>
              <v-text-field
                v-model="token"
                class="mt-2"
                color="primary"
                placeholder="Send your token"
                prepend-inner-icon="mdi-shield-key"
                filled
                dense
                rounded
              />
              <div class="text-center">
                <v-btn class="primary white--text" small rounded @click="TokenSendRequest()">
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
  name: 'ForgetPasswordToken',
  data () {
    return {
      dialog: false,
      token: '',
      isLoading: false
    }
  },
  created () {
    this.$nuxt.$on('toggleForgetPasswordToken', () => {
      this.dialog = !this.dialog
    })
  },
  methods: {
    createNewPasswordDialog () {
      this.$nuxt.$emit('toggleCreatePassword')
    },
    verifyForgetPasswordToken (val) {
      if (this.token !== '') {
        const { data } = val
        console.log(data)
      } else {
        alert('Request Fail')
      }
    },
    TokenSendRequest () {
      if (this.$refs.form.validate()) {
        this.isLoading = true
        this.$refs.networkCall.click()
        this.isLoading = false
        this.dialog = false
        this.createNewPasswordDialog()
      } else {
        console.log('Not valid')
      }
    }
  }
}
</script>

<style scoped>

</style>
