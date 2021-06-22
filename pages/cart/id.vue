<template>
  <div class="my-16">
    <div>{{ checkout }}</div>
    <h3 class="display-3 text-center pt-10 primary--text">Cart</h3>
    <p class="text-center grey--text pt-2" style="font-size: 18px">Lorem Ipsum is simply dummy text of the printing and
      typesetting industry</p>

    <div class="px-16">
      <v-layout class=" mt-10" v-if="cart !== null">
        <v-flex xs8 md8 sm12>
          <v-card class="pt-12" style="border-radius: 30px;" elevation="10">
            <div>
              <span class="pl-10 font-weight-bold primary--text" style="font-size: 18px">Package Name: </span>
              <span v-for="(title,index) in cart" :key="index">{{ title.packageName }}</span>
              <span class="float-right px-10">
                <v-btn text color="red" class="white--text" small @click="deleteItem()">
                  <v-icon class="pr-1">mdi-delete</v-icon>
                  Delete from Cart
                </v-btn>
              </span>
            </div>
            <v-simple-table class="mt-3 ma-10 mb-0" style="border: 1px solid #ddd;">
              <template v-slot:default>
                <tbody v-for="(item,index) in cart" :key="index">
                <tr class="primary lighten-2 white--text font-weight-bold">
                  <td class="py-5"><p style="font-size: 18px">Sl.no</p></td>
                  <td class="py-5"><p style="font-size: 18px">Service Name </p></td>
                  <td class="py-5 text-center"><p style="font-size: 18px">Duration (in month)</p></td>
                  <td class="py-5 text-center"><p style="font-size: 18px"> Service Price</p></td>
                </tr>
                <tr v-for="(services,index) in item.serviceCovered" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ services.serviceName }}</td>
                  <td class="text-center" v-for="(i, index) in checkout" :key="index" v-if="i.defaultSelected">
                    {{ i.defaultSelected }}
                  </td>
                  <td class="text-center">{{ services.servicePrice }}</td>
                </tr>
                <!--                <tr>
                                  <td></td>
                                  <td></td>
                                  <td class="font-weight-bold text-center">Subtotal</td>
                                  <td class="font-weight-bold text-center">{{ item.packagePrice }} BDT</td>
                                </tr>
                                <tr v-for="(i, index) in checkout" :key="index" v-if="i.vat">
                                  <td></td>
                                  <td></td>
                                  <td class="font-weight-bold text-center">Vat ({{ i.vat }} %)</td>
                                  <td class="font-weight-bold text-center">{{ i.vatAmount }} BDT</td>
                                </tr>
                                <tr v-for="(i, index) in checkout" :key="index" v-if="i.discount">
                                  <td></td>
                                  <td></td>
                                  <td class="font-weight-bold text-center">Discount ({{ i.discount }} %)</td>
                                  <td class="font-weight-bold text-center">{{ i.discountAmount }} BDT</td>
                                </tr>
                                <tr class="primary lighten-2 white&#45;&#45;text" v-for="(i, index) in checkout" :key="index" v-if="i.defaultSelected">
                                  <td></td>
                                  <td></td>
                                  <td class="font-weight-bold text-center" style="font-size: 18px">Grand Total</td>
                                  <td class="font-weight-bold text-center" style="font-size: 18px">{{ i.total * i.defaultSelected }} BDT</td>
                                </tr>
                                -->
                </tbody>
              </template>
            </v-simple-table>
            <div v-if="cart !== null">
              <v-layout>
                <v-flex xs8 md8 sm12>
                  <p class="pt-3 pl-10 pb-8 font-weight-bold" style="font-size: 18px">To purchase the package you may
                    proceed to checkout: </p>
                </v-flex>
                <!--                <v-flex xs4 md4 sm12 v-for="(item,index) in cart" :key="index">
                                  <v-btn block class="my-10 py-5 primary lighten-2 white&#45;&#45;text" @click="getSubscription(item)">
                                    Proceed to Checkout
                                  </v-btn>
                                </v-flex>-->
              </v-layout>
            </div>
          </v-card>
        </v-flex>


        <v-flex xs4 md4 sm12 class="pl-10">
          <v-card
              class="primary lighten-2"
              style="height: 150px; border-top-right-radius: 30px; border-top-left-radius: 30px "
              elevation="10"/>
          <v-card class="pb-10 ma-5" style="border-radius: 30px; top: -120px" elevation="10">
            <v-card-title class="pa-10 pb-0">
              Order Summary
            </v-card-title>
            <v-simple-table class="pa-10 pb-2">
              <template v-slot:default>
                <tbody>
                <tr>
                  <td class="font-weight-bold">Subtotal</td>
                  <td v-for="(price,index) in cart" :key="index" class="font-weight-bold text-right">
                    {{ price.packagePrice }} BDT
                  </td>
                </tr>
                <tr v-for="(i, index) in checkout" :key="index" v-if="i.discount">
                  <td class="font-weight-bold">Discount ({{ i.discount }} %)</td>
                  <td class="font-weight-bold text-right">{{ i.discountAmount }} BDT</td>
                </tr>
                <tr v-for="(i, index) in checkout" :key="index" v-if="i.vat">
                  <td class="font-weight-bold">Vat ({{ i.vat }} %)</td>
                  <td class="font-weight-bold text-right">{{ i.vatAmount }} BDT</td>
                </tr>
                <tr class="primary--text" v-for="(i, index) in checkout" :key="index"
                    v-if="i.defaultSelected">
                  <td class="font-weight-bold">Grand Total</td>
                  <td class="font-weight-bold text-right">{{ i.total * i.defaultSelected }} BDT</td>
                </tr>
                </tbody>
              </template>
            </v-simple-table>
            <div class="text-center mx-10" v-for="(item,index) in cart" :key="index">
              <v-btn block class="primary lighten-2 white--text" @click="getSubscription(item)">
                Proceed to Checkout
              </v-btn>
            </div>
          </v-card>
        </v-flex>
      </v-layout>

      <p class="font-weight-bold text-center pt-5" style="font-size: 20px" v-if="cart === null">
        There is no data in cart
        <v-btn text to="/#packages" class="px-0 primary--text text-decoration-underline">Go to
          Package
        </v-btn>
        to add package to cart
      </p>
      <billing-request-dialog/>
    </div>
  </div>
</template>


<script>
import {mapGetters} from "vuex";
import billingRequestDialog from "@/components/dialog/billingRequestDialog";

export default {
  components: {billingRequestDialog},
  data() {
    return {
      selectService: [],
      service: [],
      cartItems: []

    }
  },
  // apollo: {
  //   ShowAllPackage: SHOW_ALL_PACKAGE,
  //   ALlSingleService: All_Single_Service
  // },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapGetters('cart', ['cart']),
    services() {
      Array.from(this.ShowAllPackage).forEach((element) => {
        console.log(element.serviceCovered)
        return this.service = element.serviceCovered
      })
    }
  },
  methods: {
    getSubscription(item) {
      if (this.isAuthenticated) {
        this.$nuxt.$emit('toggleBillingRequestDialog', item)
      } else {
        this.$nuxt.$emit('toggleLoginDialog', {event: 'toggleBillingRequestDialog', data: item})
        this.$notifier.showMessage({
          content: 'Please sign in first before purchasing the subscription.',
          color: 'info'
        })
      }
    },
    async deleteItem() {
      const confirm = this.$confirm('Do you want to delete this item from cart?')
      if (confirm === true) {
        this.cart = []
        this.cartItems = this.cart
        await this.$store.c
