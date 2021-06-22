<template>
  <div>
    <div v-if="!$vuetify.breakpoint.mobile"  >
      <h1 id="pricing" class="text-center display-3 primary--text">Pricing</h1>
      <p style="font-size: 18px" class="text-center grey--text mt-3">Lorem Ipsum is simply dummy text of the printing and
        typesetting
        industry.</p>

      <div class="mt-10 mb-16 mx-16">
        <v-card style="border-bottom-left-radius: 30px; border-bottom-right-radius: 30px" outlined>
          <v-card-title class="primary white--text">
            Features
          </v-card-title>
          <v-divider/>
          <v-simple-table class="pa-6">
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-left primary--text">
                  <h3>Features Name</h3>
                </th>
                <th class="text-center primary--text">
                  <h3>Features Price</h3>
                </th>
              </tr>
              </thead>
              <tbody class="grey--text">
              <tr
                  v-for="(service, index) in allService.Services" :key="index"
              >
                <td>{{ service.serviceName }}</td>
                <td class="text-center">{{ service.servicePrice }}</td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>

      </div>
      <package-items/>
    </div>
    <div v-else>
      <h1 class="text-center display-1 primary--text">Pricing</h1>
      <p style="font-size: 16px" class="text-center grey--text px-4 mt-3">Lorem Ipsum is simply dummy text of the printing and
        typesetting
        industry.</p>

      <div class="mt-5 px-3">
        <v-card style="border-bottom-left-radius: 30px; border-bottom-right-radius: 30px" outlined>
          <v-card-title class="primary white--text">
            Features
          </v-card-title>
          <v-divider/>
          <v-simple-table class="pa-6">
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-left primary--text">
                  <h3>Features Name</h3>
                </th>
                <th class="text-center primary--text">
                  <h3>Features Price</h3>
                </th>
              </tr>
              </thead>
              <tbody class="grey--text">
              <tr
                  v-for="(service, index) in allService.Services" :key="index"
              >
                <td>{{ service.serviceName }}</td>
                <td class="text-center">{{ service.servicePrice }}</td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>

      </div>
      <package-items/>
    </div>
  </div>
</template>

<script>
import BillingRequestDialog from "@/components/dialog/billingRequestDialog";
import PackageItems from "@/components/packageItems";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "pricing",
  components: {PackageItems, BillingRequestDialog},
  data() {
    return {
      items: [],
      ex8: 'primary lighten-3',
    }
  },
  computed: {
    ...mapGetters('service', ['allService'])
  },
  created() {
    this.requestGetAllServiceByCategoryId({$apollo: this.$apollo, CategoryId: process.env.SERVICE_CATEGORY_ID, jwt: ''})
  },
  methods: {
    ...mapActions('service', ['requestGetAllServiceByCategoryId'])
  }
}
</script>

<style scoped>
</style>
