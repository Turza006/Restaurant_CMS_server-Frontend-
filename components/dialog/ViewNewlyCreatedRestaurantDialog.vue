<template>
  <div>
    <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        max-width="600"
        persistent
    >

      <v-card :loading="isLoading" height="auto">
        <v-card-title class="success lighten-1 white--text">
          <v-icon class="mr-2 white--text">mdi-information-outline</v-icon>
          Restaurant Created
        </v-card-title>
        <v-card-text class="pa-10">
          <v-text class="body-1 pa-10">
            <v-icon class="pr-2 success--text">mdi-check-circle</v-icon>
            Congratulation your restaurant successfully created!!
          </v-text>
          <div class="text-center mt-5">
            <v-btn small color="success" outlined :href="restaurantAdminLink">
              View Your Restaurant Admin Panel
              <v-icon class="ml-2" small>mdi-arrow-right</v-icon>
            </v-btn>
          </div>
          <p class="text-center my-4">or</p>
          <div class="text-center">
            <v-btn small color="success" outlined to="/">
              <v-icon class="mr-1" small>mdi-home</v-icon>
              Go to Home
            </v-btn>
          </div>

        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {DIALOG_EVENT} from "../../util/events";

export default {
  name: "ViewNewlyCreatedRestaurantDialog",
  data() {
    return {
      show: false,
      dialog: false,
      isLoading: false,
      restaurantAdminLink: process.env.DINING_ADMIN_PANEL_URL
    }
  },
  computed: {
    ...mapGetters('auth', ['jwt']),
  },
  created() {
    this.$nuxt.$on(DIALOG_EVENT.TOGGLE_DIALOG_VIEW_NEWLY_CREATED_RESTAURANT, (restaurantInfo) => {
      console.log(DIALOG_EVENT.TOGGLE_DIALOG_VIEW_NEWLY_CREATED_RESTAURANT, restaurantInfo)
      if (restaurantInfo !== null && restaurantInfo.id !== null) {
        this.restaurantAdminLink = process.env.DINING_ADMIN_PANEL_URL + '?id=' + restaurantInfo.id
      }
      this.dialog = !this.dialog
    })
  }
}
</script>
