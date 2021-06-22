<template>
  <div>
    <div v-if="!$vuetify.breakpoint.mobile" id="description1" class="pa-16 pt-0">
      <h3 class="display-3 text-center mt-5 primary--text">
        What We Offer?
      </h3>
      <p style="font-size: 18px" class="text-center mt-3 grey--text">
        Lorem Ipsum is simply dummy text of the printing
        and typesetting
        industry.
      </p>
      <v-row class="py-16 pt-8">
        <v-col class="mr-6">
          <v-img
            style="border-radius: 30px"
            src="https://image.freepik.com/free-vector/effective-advertising-technology-landing-page_52683-23469.jpg"
            class="mx-auto"
          />
          <div class="text-center mt-8">
            <v-btn class="text-center primary white--text">
              Demo
            </v-btn>
            <v-btn class="text-center ml-2" color="primary" outlined @click="openVideo()">
              <v-icon>mdi-play</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col class="mt-5 ml-6">
          <h3 class="text-left primary--text">
            About Website
          </h3>
          <p style="font-size: 14px; line-height: 25px " class="text-justify grey--text mt-3">
            Lorem Ipsum is simply
            dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged.
          </p>
          <p style="font-size: 14px; line-height: 25px " class="text-justify grey--text mt-6">
            Lorem Ipsum is simply
            dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged.
          </p>
          <p style="font-size: 14px; line-height: 25px " class="text-justify grey--text mt-6">
            Lorem Ipsum is simply
            dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
            unchangeds
            <nuxt-link class="primary--text" to="/featuresDetails">
              more details.
            </nuxt-link>
          </p>
        </v-col>
        <video-dialog />
      </v-row>
    </div>
    <div v-else class="pa-6 pt-0">
      <h3 class="display-1 text-center primary--text">
        What We Offer?
      </h3>
      <p style="font-size: 18px" class="text-center mt-3 grey--text">
        Lorem Ipsum is simply dummy text of the printing
        and typesetting
        industry.
      </p>
      <v-row class="py-16 pb-0 pt-8">
        <v-col class="mr-6">
          <h3 class="text-left primary--text">
            About Website
          </h3>
          <v-img
            style="border-radius: 30px"
            src="https://image.freepik.com/free-vector/effective-advertising-technology-landing-page_52683-23469.jpg"
            class="mx-auto mt-4"
          />
          <div class="text-center mt-8">
            <v-btn class="text-center primary white--text" small>
              Demo
            </v-btn>
            <v-btn class="text-center ml-2" color="primary" small outlined @click="openVideo()">
              <v-icon>mdi-play</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col class="mt-5">
          <p style="font-size: 14px; line-height: 25px " class="text-justify grey--text mt-3">
            Lorem Ipsum is simply
            dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged.
          </p>
          <p style="font-size: 14px; line-height: 25px " class="text-justify grey--text mt-6">
            Lorem Ipsum is simply
            dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged.
          </p>
          <p style="font-size: 14px; line-height: 25px " class="text-justify grey--text mt-6">
            Lorem Ipsum is simply
            dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
            unchangeds
            <nuxt-link class="primary--text" to="/featuresDetails">
              more details.
            </nuxt-link>
          </p>
        </v-col>
        <video-dialog />
      </v-row>
    </div>
  </div>
</template>

<script>
import VideoDialog from '~/components/dialog/videoDialog'

export default {
  name: 'Description1',
  components: { VideoDialog },
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    openVideo () {
      this.$router.push('/featuresDetails')
    }
  }
}
</script>

<style scoped>

</style>
