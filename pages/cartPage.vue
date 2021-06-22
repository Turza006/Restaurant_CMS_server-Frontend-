<template>
  <div>
    <div v-if="!$vuetify.breakpoint.mobile" class="my-16">
      <h3 class="display-3 text-center pt-10 primary--text">
        Cart
      </h3>
      <p class="text-center grey--text text--darken-2 pt-2" style="font-size: 18px">
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry
      </p>
      <div class="px-16">
        <v-layout v-if="cart !== null" class=" mt-10">
          <v-flex xs8 md8 sm12>
            <v-card flat outlined class="mt-5 pt-6" style="border-radius: 30px">
              <v-card-title>
                <span class="pl-10 pr-2 font-weight-bold primary--text">Package Name: </span>
                <span>{{ cart.packageName }}</span>
              </v-card-title>
              <v-simple-table class="mt-3 mb-0">
                <template #default>
                  <tbody>
                  <tr class="grey lighten-4 font-weight-bold">
                    <td class="">
                      <p class="mb-0" style="font-size: 18px">
                        Service Name
                      </p>
                    </td>
                    <td class=" text-center">
                      <p class="mb-0" style="font-size: 18px">
                        Duration
                      </p>
                    </td>
                    <td class=" text-center">
                      <p class="mb-0" style="font-size: 18px">
                        Service Price
                      </p>
                    </td>
                  </tr>
                  <tr v-for="(services,index) in cart.serviceCovered" :key="index">
                    <td>{{ services.serviceName }}</td>
                    <td class="text-center">
                      {{ selectedDuration.time }}
                    </td>
                    <td class="text-center">
                      {{ services.servicePrice * selectedDuration.month }}
                    </td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <div v-if="cart !== null">
                <v-layout>
                  <v-flex xs8 md8 sm12>
                    <p class="pt-5 pl-13 pb-8 font-weight-bold" style="font-size: 18px">
                      To purchase the package you may proceed to checkout:
                    </p>
                  </v-flex>
                </v-layout>
              </div>
            </v-card>
          </v-flex>

          <v-flex xs4 md4 sm12 class="pl-3">
            <v-card class="pb-10 ma-5" style="border-radius: 30px" flat outlined>
              <v-card-title class="pa-10 pb-0">
                Order Summary
              </v-card-title>
              <v-simple-table class="pa-10 pb-2">
                <template #default>
                  <tbody>
                  <tr>
                    <td class="font-weight-bold">
                      Subtotal
                    </td>
                    <td class="font-weight-bold text-right">
                      {{ subtotal }} BDT
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">
                      Discount ({{ discount }} %)
                    </td>
                    <td class="font-weight-bold text-right">
                      {{ discountAmount }} BDT
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">
                      Vat ({{ vat }} %)
                    </td>
                    <td class="font-weight-bold text-right">
                      {{ vatAmount }} BDT
                    </td>
                  </tr>
                  <tr class="primary--text">
                    <td class="font-weight-bold">
                      Grand Total
                    </td>
                    <td class="font-weight-bold text-right">
                      {{ total }} BDT
                    </td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <v-form class="px-10">
                <label class="font-weight-bold">Payment:</label>
                <v-radio-group v-model="paymentMethod">
                  <div class="d-flex">
                    <v-radio class="mt-1" color="primary" value="BKASH" label="bkash" />
                    <v-radio class="pl-5" color="primary lighten-2" value="CARD" label="card" @click="showComingSoonMsg()" />
                  </div>
                </v-radio-group>
              </v-form>
              <div class="text-center mx-10">
                <v-btn
                    :disabled="paymentMethod === '' || paymentMethod === 'CARD'"
                    :loading="loading"
                    block
                    class="primary white--text"
                    @click="getSubscription(subscriptionData)"
                >
                  Proceed to Checkout
                </v-btn>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
        <p v-if="cart === null" class="font-weight-bold text-center pt-5" style="font-size: 20px">
          There is no data in cart
          <v-btn text to="/#packages" class="px-0 primary--text text-decoration-underline">
            Go to
            Package
          </v-btn>
          to add package to cart
        </p>
        <billing-request-dialog />
      </div>
    </div>
    <div v-else class="my-12">
      <h3 class="display-3 text-center pt-10 primary--text">
        Cart
      </h3>
      <p class="text-center grey--text text--darken-2 pt-2" style="font-size: 18px">
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry
      </p>
      <div class="px-3">
        <div v-if="cart !== null" class=" mt-10">
            <v-card flat outlined class="mt-3 pt-4" style="border-radius: 30px">
              <v-card-title>
                <span class="pl-10 pr-2 font-weight-bold primary--text">Package Name: </span>
                <span>{{ cart.packageName }}</span>
              </v-card-title>
              <v-simple-table class="mt-3 mb-0">
                <template #default>
                  <tbody>
                  <tr class="grey lighten-4 font-weight-bold">
                    <td class="">
                      <p class="mb-0" style="font-size: 18px">
                        Service Name
                      </p>
                    </td>
                    <td class=" text-center">
                      <p class="mb-0" style="font-size: 18px">
                        Duration
                      </p>
                    </td>
                    <td class=" text-center">
                      <p class="mb-0" style="font-size: 18px">
                        Service Price
                      </p>
                    </td>
                  </tr>
                  <tr v-for="(services,index) in cart.serviceCovered" :key="index">
                    <td>{{ services.serviceName }}</td>
                    <td class="text-center">
                      {{ selectedDuration.time }}
                    </td>
                    <td class="text-center">
                      {{ services.servicePrice * selectedDuration.month }}
                    </td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <div v-if="cart !== null">
                <v-layout>
                  <v-flex xs8 md8 sm12>
                    <p class="pt-5 pl-4 pb-4 font-weight-bold" style="font-size: 16px">
                      To purchase the package you may proceed to checkout:
                    </p>
                  </v-flex>
                </v-layout>
              </div>
            </v-card>

            <v-card class="pb-10 mt-7" style="border-radius: 30px" flat outlined>
              <v-card-title class="pa-10 pb-0">
                Order Summary
              </v-card-title>
              <v-simple-table class="pa-6 pb-2">
                <template #default>
                  <tbody>
                  <tr>
                    <td class="font-weight-bold">
                      Subtotal
                    </td>
                    <td class="font-weight-bold text-right">
                      {{ subtotal }} BDT
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">
                      Discount ({{ discount }} %)
                    </td>
                    <td class="font-weight-bold text-right">
                      {{ discountAmount }} BDT
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">
                      Vat ({{ vat }} %)
                    </td>
                    <td class="font-weight-bold text-right">
                      {{ vatAmount }} BDT
                    </td>
                  </tr>
                  <tr class="primary--text">
                    <td class="font-weight-bold">
                      Grand Total
                    </td>
                    <td class="font-weight-bold text-right">
                      {{ total }} BDT
                    </td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <v-form class="px-10">
                <label class="font-weight-bold">Payment:</label>
                <v-radio-group v-model="paymentMethod">
                  <div class="d-flex">
                    <v-radio class="mt-1" color="primary" value="BKASH" label="bkash" />
                    <v-radio class="pl-5" color="primary lighten-2" value="CARD" label="card" @click="showComingSoonMsg()" />
                  </div>
                </v-radio-group>
              </v-form>
              <div class="text-center mx-10">
                <v-btn
                    :disabled="paymentMethod === '' || paymentMethod === 'CARD'"
                    :loading="loading"
                    block
                    class="primary white--text"
                    @click="getSubscription(subscriptionData)"
                >
                  Proceed to Checkout
                </v-btn>
              </div>
            </v-card>
        </div>
        <p v-if="cart === null" class="font-weight-bold text-center pt-5" style="font-size: 20px">
          There is no data in cart
          <v-btn text to="/#packages" class="px-0 primary--text text-decoration-underline">
            Go to
            Package
          </v-btn>
          to add package to cart
        </p>
        <billing-request-dialog />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import billingRequestDialog from '@/components/dialog/billingRequestDialog'
import { VAT } from '../util/defaultValues'
import { getMutationDataWithCustomHeader } from '../util/apolloApiUtil'
import { BUY_PACKAGE } from '../graphql/mutations'
import { API } from '../util/statusCode'

export default {
  name: 'CartPage',
  components: { billingRequestDialog },
  data () {
    return {
      loading: false,
      vat: VAT,
      selectService: [],
      service: [],
      paymentMethod: ''
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated', 'jwt']),
    ...mapGetters('cart', ['cart', 'selectedDuration', 'selectedDuration']),
    subtotal () {
      return this.cart.packagePrice * this.selectedDuration.month
    },
    discount () {
      return this.selectedDuration.saving
    },
    discountAmount () {
      return this.subtotal * (this.selectedDuration.saving / 100.0)
    },
    vatAmount () {
      return this.subtotal * (this.vat / 100.0)
    },
    total () {
      return (this.subtotal + this.vatAmount) - this.discountAmount
    },
    subscriptionData () {
      return {
        cart: this.cart,
        paymentMethod: this.paymentMethod,
        subtotal: this.subtotal,
        discountAmount: this.discountAmount,
        vatAmount: this.vatAmount,
        total: this.total
      }
    }
  },
  methods: {
    async getSubscription (item) {
      item.duration = this.selectedDuration
      item.vatAmount = this.vatAmount
      item.discountAmount = this.discountAmount
      if (this.isAuthenticated) {
        this.loading = true
        const ownedPackageID = await this.requestBuyPackageNetworkCall()
        this.loading = false
        if (ownedPackageID !== '') {
          await this.$store.commit('cart/RESET_CART')
          await this.$store.commit('cart/RESET_SELECTED_DURATION')
          item.ownedPackageID = ownedPackageID
          this.$nuxt.$emit('toggleBillingRequestDialog', item)
        }
      } else {
        this.$nuxt.$emit('toggleLoginDialog', { event: 'toggleBillingRequestDialog', data: item })
        this.$notifier.showMessage({
          content: 'Please sign in first before purchasing the subscription.',
          color: 'info'
        })
      }
    },
    async deleteItem () {
      const confirm = this.$confirm('Do you want to delete this item from cart?')
      if (confirm === true) {
        await this.$store.commit('cart/RESET_CART')
      }
    },
    async requestBuyPackageNetworkCall () {
      const startedFrom = Date.now().toString()
      console.log('startedFrom ====>> ', startedFrom)
      const {
        data,
        errors
      } = await getMutationDataWithCustomHeader(this.$apollo, BUY_PACKAGE, {
        payload: {
          package: this.cart.id,
          startedFrom
        }
      }, { jwt: this.jwt })

      if (data.BuyPackage !== null && data.BuyPackage.code === API.SUCCESS) {
        return data.BuyPackage.ownedPackageID
      } else {
        this.$notifier.showMessage({
          content: data.BuyPackage.msg,
          color: 'error'
        })
        return ''
      }
    },
    showComingSoonMsg () {
      this.$notifier.showMessage({
        content: 'Card payment method will be added soon!',
        color: 'info'
      })
    }
  }
}
</script>
