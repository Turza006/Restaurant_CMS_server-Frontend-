<template>
  <div>
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="primary white--text">
          Create new password
        </v-card-title>
        <ApolloMutation
          :mutation="require('@/graphql/mutations/createPassword.gql')"
          :variables="{ password }"
          @done="onDone"
        >
          <template #default="{ mutate }">
            <v-form ref="form" class="pa-8">
              <label> New Password: </label>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                :type="showPassword ? 'text' : 'password'"
                color="primary"
                placeholder="Write new password"
                prepend-inner-icon="mdi-key"
                append-icon="mdi-eye"
                :append-icon=" showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                solo
                dense
                rounded
                @click:append="showPassword = !showPassword"
              />
              <div class="text-center">
                <v-btn small rounded dense class="primary white--text" @click="createPassword()">
                  Submit
                </v-btn>
              </div>
              <button ref="networkCall" style="size: 2px" :disabled="isLoading" @click.prevent="mutate()" />
            </v-form>
          </template>
        </ApolloMutation>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'ChangePasswordDialog',
  data () {
    return {
      dialog: false,
      text: '',
      password: '',
      showPassword: false,
      isLoading: false,
      passwordRules: [
        v => !!v || 'Password is required',
        v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Password must contain at least lowercase letter, one number, a special character and one uppercase letter',
        v => v.length >= 8 || 'Password length is too short. Minimum length is 8.'
      ]
    }
  },
  created () {
    this.$nuxt.$on('toggleCreatePassword', () => {
      this.dialog = !this.dialog
    })
  },
  methods: {
    onDone (val) {
      if (this.password !== '') {
        const { data } = val
        console.log(data)
      } else {
        alert('Request Fail')
      }
    },
    createPassword () {
      if (this.$refs.form.validate()) {
        this.isLoading = true
        this.$refs.networkCall.click()
        this.isLoading = false
      } else {
        console.log('Not valid')
      }
    }
  }
}
</script>

<style scoped>

</style>
