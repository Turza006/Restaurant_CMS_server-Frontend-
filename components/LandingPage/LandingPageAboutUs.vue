<template>
  <div class="my-12">
    <div v-if="!$vuetify.breakpoint.mobile">
      <v-alert v-if="isAuthenticated" class="mt-16" type="info" color="success " tile>
        <span>Thanks, for joining <b>"B2B Service Network"</b> You can purchase now your expected service</span>
        <span class="float-right">
          <v-btn class="success lighten-1 white--text" to="/my-purchase" small outlined>
            <v-icon class="mr-2" small>mdi-eye</v-icon>
            See Your Purchase
          </v-btn>
        </span>
      </v-alert>
      <v-row class="pt-16">
        <v-col class="text-left px-16 d-flex justify-center align-center">
          <div>
            <h1 class="font-weight-bold primary--text">
              Dining - A Complete Management System for
              Restaurant | Restaurant POS System
            </h1>
            <p class="pt-5 grey--text" style="font-size: 18px">
              Dining is the Best Restaurant POS management System For manage your Restaurant
              efficiently and boost Your restaurant business profits. Dining Restaurant Management
              System Offers your guests safer, easier dining experiences with contactless technology.
              We are the only restaurant management software that provides a full Restaurant
              Management System with an Online Restaurant Website for your Restaurant.
            </p>
            <v-btn class="font-weight-bold mt-5 white--text" color="primary" to="" large style="z-index: 1;">
              Live Demo
            </v-btn>
            <v-btn
              class="font-weight-bold mt-5 ml-2"
              outlined
              color="primary"
              large
              style="z-index: 1;"
              @click="$vuetify.goTo('#pricing',option)"
            >
              Pricing
            </v-btn>
          </div>
        </v-col>
        <v-col class="mb-16 d-flex justify-center align-center">
          <v-img
            style=""
            width="auto"
            height="auto"
            src="https://image.freepik.com/free-vector/customer-waitress-coffee-shop-man-making-order-cafe-cartoon-illustration_74855-14335.jpg"
          />
        </v-col>
      </v-row>
    </div>

    <div v-else>
      <v-alert v-if="isAuthenticated" type="info" color="success " tile>
        <span>Thanks, for joining <b>"B2B Service Network"</b> You can purchase now your expected service</span>

        <div class="text-left mt-3">
          <v-btn class="success lighten-1 white--text" to="/my-purchase" small outlined>
            <v-icon class="mr-2" small>
              mdi-eye
            </v-icon>
            See Your Purchase
          </v-btn>
        </div>
      </v-alert>
      <v-row class="px-6 pt-6">
        <v-col class="mb-6 d-flex justify-center align-center">
          <v-img
            style=""
            width="auto"
            height="auto"
            src="https://image.freepik.com/free-vector/customer-waitress-coffee-shop-man-making-order-cafe-cartoon-illustration_74855-14335.jpg"
          />
        </v-col>
        <v-col class="text-left px-6 d-flex justify-center align-center">
          <div>
            <h3 class="font-weight-bold primary--text">
              Dining - A Complete Management System for
              Restaurant | Restaurant POS System
            </h3>
            <p class="pt-5 grey--text" style="font-size: 18px">
              Dining is the Best Restaurant POS management System For manage your Restaurant
              efficiently and boost Your restaurant business profits. Dining Restaurant Management
              System Offers your guests safer, easier dining experiences with contactless technology.
              We are the only restaurant management software that provides a full Restaurant
              Management System with an Online Restaurant Website for your Restaurant.
            </p>
            <v-btn class="font-weight-bold mt-5 white--text" color="primary lighten-2" small style="z-index: 1;">
              Live Demo
            </v-btn>
            <v-btn
              class="font-weight-bold mt-5 ml-2"
              outlined
              color="primary lighten-2"
              small
              style="z-index: 1;"
            >
              Pricing
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
    <!--    </v-img>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LandingPageAboutUsComponent',
  data () {
    return {
      option: {
        duration: 1000,
        offset: 80,
        easing: 'linear'
      }
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  }
}
</script>

<style scoped>
.center {
  padding: 300px 0;
}

.animate__animated.animate__bounce {
  --animate-duration: 2s;
}

</style>
