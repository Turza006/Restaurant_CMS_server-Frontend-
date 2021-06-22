<template>
  <div>
    <div v-if="!$vuetify.breakpoint.mobile" class="pt-8 px-10" id="packages">
      <div class="text-center">
        <h3 class="display-3 primary--text">Packages</h3>
        <p class="grey--text pt-2 pb-6" style="font-size: 20px">
          Platform-specific applications, are known for being
          incredibly rich and reliable. They're
          ever-present</p>
      </div>
      <h2>Inprogress</h2>
      <v-row class="px-8 pt-6">
        <v-col class="pa-3" v-for="(item, index) in allPackageByCategory" :key="index">
          <v-card class="py-8 px-4" style="border-radius: 30px" outlined>
            <div class="primary--text text-center">
              <h2 class="text-center">{{ item.packageName }}</h2>
              <p class="mt-5">Platform-specific applications, are known for being incredibly rich and reliable. They're
                ever-present,
                on home screens, docks, and taskbars. </p>
              <span class="font-weight-bold" style="font-size: 30px">{{ item.packagePrice }}<span
                  style="padding-left: 1px">$</span></span><span style="font-size: 12px"> per month</span>
            </div>

            <div class="my-5 text-center">
              <v-btn class="primary white--text" @click.stop="cartItem(item)" rounded outlined>
                Add to Cart
              </v-btn>
            </div>

            <div>
              <v-simple-table style="border: 1px solid #eee; border-radius: 15px"
                              class="mt-10 primary--text">
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th class="text-left primary--text">
                      Features Name
                    </th>
                    <th class="text-center primary--text">

                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr
                      v-for="(service, i) in item.serviceCovered" :key="i"
                  >
                    <td>{{ service.serviceName }}</td>
                    <td class="text-center">
                      {{ service.servicePrice }}
                      <!--                    <v-icon color="primary lighten-2">mdi-check</v-icon>-->
                    </td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </div>
          </v-card>
        </v-col>

        <v-col class="pa-3">
          <v-card class="py-8 px-4" style="border-radius: 30px" outlined>
            <div class="primary--text text-center">
              <h2 class="text-center">Custom</h2>
              <p class="mt-5">
                <span class="primary--text text-center">You must be choose at least 3 services for custom package.</span>
              </p>
              <span class="font-weight-bold" style="font-size: 30px; border-radius: 15px">
              {{ customPackageData.packagePrice }}
              <span
                  style="padding-left: 1px">$</span></span><span
                style="font-size: 12px"> per month</span>
            </div>
            <div class="my-5 text-center">

              <v-btn class="primary white--text" :disabled="customPackageData.serviceCovered.length < 3"
                     rounded @click.stop="customCartItem()">Add to cart
              </v-btn>
            </div>
            <div>
              <v-simple-table style="border: 1px solid #eee; border-radius: 15px"
                              class="mt-10 primary--text">
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th class="text-left primary--text">
                      Features Name
                    </th>
                    <th class="text-center primary--text">
                      Features Price
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr
                      v-for="(service, index) in allService.Services" :key="index">
                    <td>{{ service.serviceName }}</td>
                    <td>

                      <div class="d-flex justify-center align-center">
                        <span class="pr-3">{{ service.servicePrice }}</span>
                        <v-checkbox
                            color="primary lighten-2"
                            class="d-flex justify-center align-center ma-0 pt-2 mt-2"
                            dense
                            v-model="selectedService"
                            :value="service"
                        ></v-checkbox>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </div>
          </v-card>
        </v-col>

      </v-row>
    </div>

    <div v-else class="pt-16 px-5">
      <div class="text-center">
        <h3 class="display-1 primary--text">Packages</h3>
        <p class="grey--text pt-2" style="font-size: 16px">
          Platform-specific applications, are known for being
          incredibly rich and reliable. They're
          ever-present</p>
      </div>
      <v-row class="pt-3">
        <v-col class="pa-3" v-for="(item, index) in allPackageByCategory" :key="index">
          <v-card class="py-8 px-4" style="border-radius: 30px" outlined>
            <div class="primary--text text-center">
              <h2 class="text-center">{{ item.packageName }}</h2>
              <p class="mt-5">Platform-specific applications, are known for being incredibly rich and reliable. They're
                ever-present,
                on home screens, docks, and taskbars. </p>
              <span class="font-weight-bold" style="font-size: 30px">{{ item.packagePrice }}<span
                  style="padding-left: 1px">$</span></span><span style="font-size: 12px"> per month</span>
            </div>

            <div class="my-5 text-center">
              <v-btn class="primary white--text" @click.stop="cartItem(item)" rounded outlined>
                Add to Cart
              </v-btn>
            </div>

            <div>
              <v-simple-table style="border: 1px solid #eee; border-radius: 15px"
                              class="mt-10 primary--text">
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th class="text-left primary--text">
                      Features Name
                    </th>
                    <th class="text-center primary--text">

                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr
                      v-for="(service, i) in item.serviceCovered" :key="i"
                  >
                    <td>{{ service.serviceName }}</td>
                    <td class="text-center">
                      {{ service.servicePrice }}
                      <!--                    <v-icon color="primary lighten-2">mdi-check</v-icon>-->
                    </td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </div>
          </v-card>
        </v-col>

        <v-col class="pa-3">
          <v-card class="py-8 px-4" style="border-radius: 30px" outlined>
            <div class="primary--text text-center">
              <h2 class="text-center">Custom</h2>
              <p class="mt-5">
                <span class="primary--text text-center">You must be choose at least 3 services for custom package.</span>
              </p>
              <span class="font-weight-bold" style="font-size: 30px; border-radius: 15px">
              {{ customPackageData.packagePrice }}
              <span
                  style="padding-left: 1px">$</span></span><span
                style="font-size: 12px"> per month</span>
            </div>
            <div class="my-5 text-center">

              <v-btn class="primary white--text" :disabled="customPackageData.serviceCovered.length < 3"
                     rounded @click.stop="customCartItem()">Add to cart
              </v-btn>
            </div>
            <div>
              <v-simple-table style="border: 1px solid #eee; border-radius: 15px"
                              class="mt-10 primary--text">
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th class="text-left primary--text">
                      Features Name
                    </th>
                    <th class="text-center primary--text">
                      Features Price
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr
                      v-for="(service, index) in allService.Services" :key="index">
                    <td>{{ service.serviceName }}</td>
                    <td>

                      <div class="d-flex justify-center align-center">
                        <span class="pr-3">{{ service.servicePrice }}</span>
                        <v-checkbox
                            color="primary lighten-2"
                            class="d-flex justify-center align-center ma-0 pt-2 mt-2"
                            dense
                            v-model="selectedService"
                            :value="service"
                        ></v-checkbox>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </div>
          </v-card>
        </v-col>

      </v-row>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "packageItems",
  data() {
    return {
      categoryId: process.env.SERVICE_CATEGORY_ID,
      allCoveredServices: [],
      loading: false,
      icon: '',
      customPackage: [],
      customTotal: 0,
      checked: false,
      selectedService: [],
      selectedItems: [],
      customPackageData: {
        packageName: 'Custom',
        packagePrice: 0,
        serviceCovered: []
      },
      customPackagePrice: 0
    }
  },
  watch: {
    selectedService: {
      deep: true,
      handler(selectedService) {
        this.customPackageData.serviceCovered = selectedService

        if (selectedService.length === 0) {
          this.customPackageData.packagePrice = 0
        } else {
          let price = 0;
          selectedService.forEach(service => {
            price += service.servicePrice
          })
          this.customPackageData.packagePrice = price
        }
      }
    }
  },
  async created() {
    this.loading = true
    await this.requestGetAllPackageByCategoryId({
      $apollo: this.$apollo, CategoryId: this.categoryId, jwt: this.jwt
    })
    await this.requestGetAllServiceByCategoryId({
      $apollo: this.$apollo, CategoryId: this.categoryId, jwt: this.jwt
    })
    this.loading = false
  },
  computed: {
    ...mapGetters('auth', ['jwt']),
    ...mapGetters('package', ['allPackageByCategory']),
    ...mapGetters('cart', ['cart']),
    ...mapGetters('service', ['allService'])
  },
  methods: {
    ...mapActions('package', ['requestGetAllPackageByCategoryId']),
    ...mapActions('service', ['requestGetAllServiceByCategoryId']),
    async cartItem(item) {
      if (this.cart === null) {
        await this.$store.commit('cart/SET_CART_ITEM', item)
        this.$nuxt.$emit('toggleCart')
      } else {
        const confirm = await this.$confirm('If you want to delete the added cart press yes else if press no')
        if (confirm === true) {
          await this.$store.commit('cart/SET_CART_ITEM', item)
          this.$nuxt.$emit('resetDefaultDuration')
          this.$nuxt.$emit('toggleCart')
        }
      }
    },
    async customCartItem() {
      console.log('selected services', this.customPackageData)
      if (this.cart === null) {
        await this.$store.commit('cart/SET_CART_ITEM', this.customPackageData)
        this.$nuxt.$emit('toggleCart')
      } else {
        const confirm = await this.$confirm('If you want to delete the added cart press yes else if press no')
        if (confirm === true) {
          await this.$store.commit('cart/SET_CART_ITEM', this.customPackageData)
          this.$nuxt.$emit('resetDefaultDuration')
          this.$nuxt.$emit('toggleCart')
        }
      }
    }
  }
}

</script>

<style scoped>

</style>
