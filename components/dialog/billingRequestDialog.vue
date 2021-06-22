<template>
  <div>
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      persistent
      max-width="500"
    >
      <v-card :loading="isLoading">
        <v-card-title class="primary white--text">
          Get Subscription
          <v-spacer />
          <v-btn icon large text class="black--text" @click="dialog = !dialog">
            <v-icon class="white--text">
              mdi-close
            </v-icon>
          </v-btn>
        </v-card-title>
        <v-layout class="pa-8">
          <v-flex xs12 md12 sm12>
            <v-form ref="form" v-model="valid" class=" pb-0">
              <label class="grey--text">Transaction Amount: </label>
              <v-text-field
                v-model="payload.billingAmount"
                class="mt-2"
                type="text"
                color="primary"
                disabled
                prepend-inner-icon="mdi-cash"
                placeholder="Transaction Amount"
                dense
                flat
                filled
                rounded
              />
              <label class="grey--text">Transaction Number:</label>
              <v-text-field
                v-model="payload.billingNumber"
                type="text"
                prepend-inner-icon="mdi-phone"
                class="pt-2"
                color="primary"
                :rules="transactionIDRules"
                placeholder="Transaction Number"
                flat
                filled
                dense
                rounded
              />
              <div class="text-center">
                <v-btn
                  :loading="isLoading"
                  rounded
                  class="  mb-2 primary white--text"
                  :disabled="!valid || isLoading"
                  @click="requestBillingRequestNetworkCall()"
                >
                  Send
                </v-btn>
              </div>
            </v-form>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { BILLING_REQUEST } from '../../graphql/mutations'
import { getMutationDataWithCustomHeader } from '../../util/apolloApiUtil'
import { API } from '../../util/statusCode'

export default {
  name: 'BillingRequestDialog',
  data () {
    return {
      show: false,
      dialog: false,
      isLoading: false,
      valid: false,
      payload: {
        packageId: '',
        billingSystem: '',
        billingNumber: '',
        billingAddress: '',
        billingAmount: '',
        ownedPackageID: ''
      },
      transactionIDRules: [
        v => !!v || 'Transaction ID is required',
        v => /(?=.*[a-zA-Z\-0-9])/.test(v) || 'Transaction ID must contain number and alphabet (A to Z & a to z) only',
        v => v.length === 10 || 'The Transaction ID must be 10 digit long.'
      ]
    }
  },
  computed: {
    ...mapGetters('auth', ['jwt'])
  },
  created () {
    this.$nuxt.$on('toggleBillingRequestDialog', (subscriptionData) => {
      console.log('toggleBillingRequestDialog--->', subscriptionData)

      this.payload.packageId = subscriptionData.cart.id
      this.payload.ownedPackageID = subscriptionData.ownedPackageID
      this.payload.billingSystem = subscriptionData.paymentMethod
      this.payload.billingAmount = (((subscriptionData.cart.packagePrice * subscriptionData.duration.month) + subscriptionData.vatAmount) - subscriptionData.discountAmount).toString()
      // this.payload.billingAddress = ""
      this.dialog = !this.dialog
    })
  },
  methods: {
    async requestBillingRequestNetworkCall () {
      this.payload.billingAmount = parseFloat(this.payload.billingAmount)
      const {
        data,
        errors
      } = await getMutationDataWithCustomHeader(this.$apollo, BILLING_REQUEST, { payload: this.payload }, { jwt: this.jwt })
      if (data.BillingRequest !== null) {
        if (data.BillingRequest.code === API.SUCCESS) {
          this.$notifier.showMessage({
            content: '  Please wait for verify your payment.',
            color: 'success'
          })

          await this.$router.push('/my-purchase')
        } else {
          this.$notifier.showMessage({
            content: data.BillingRequest.msg,
            color: 'error'
          })
        }
      } else {
        this.$notifier.showMessage({
          content: errors[0] !== null ? errors[0].message : 'Something went wrong, please try again later.',
          color: 'error'
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
