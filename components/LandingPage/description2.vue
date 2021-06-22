<template>
  <div>
    <div v-if="!$vuetify.breakpoint.mobile" id="description2">
      <div class="px-10 pb-0">
        <v-row class="">
          <v-col class="pt-0 pb-10 px-6">
            <h3 class="text-left primary--text">
              About Dashboard
            </h3>

            <p style="font-size: 14px; line-height: 25px " class="text-justify grey--text mt-3">
              Lorem Ipsum is simply dummy text of
              the
              printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>
            <p style="font-size: 14px; line-height: 25px " class="text-justify grey--text mt-6">
              Lorem Ipsum is simply dummy text of
              the
              printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>
            <p style="font-size: 14px; line-height: 25px " class="text-justify grey--text mt-6">
              Lorem Ipsum is simply dummy text of
              the
              printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged
              <nuxt-link to="/featuresDetails" class="primary--text">
                more details.
              </nuxt-link>
            </p>
          </v-col>
          <v-col class="py-10 px-10">
            <v-img
              style="border-radius: 30px"
              src="https://image.freepik.com/free-vector/dashboard-user-panel_23-2148363275.jpg"
              class="mx-auto"
            />
            <div class="text-center mt-8">
              <v-btn
                class="primary white--text text-center"
              >
                Demo
              </v-btn>
              <v-btn class="text-center ml-2" color="primary" to="/featuresDetails" outlined>
                <v-icon>mdi-play</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-row class="pt-8">
        <v-col />
        <v-col cols="8" class="px-16">
          <h4 class="text-center display-1 primary--text">
            Have a look on video
          </h4>
          <p class="mt-3 mb-6 text-center grey--text" style="font-size: 18px">
            Lorem Ipsum is simply dummy text of the
            printing and typesetting industry
          </p>
          <div class="mt-5">
            <video width="100%" height="auto" style="border-radius: 30px" controls>
              <source
                data-v-57a7457e=""
                src="http://nettuts.s3.amazonaws.com/763_sammyJSIntro/trailer_test.mp4"
                type="video/mp4"
              >
            </video>
          </div>
        </v-col>
        <v-col />
        <!--      <v-flex xs2 md2 sm12 class="d-flex justify-center align-center">
                <v-row class="mx-auto">
                  <v-col cols="6" class="text-center align-center justify-center " v-for="(use,index) in uses" :key="index">
                    <div>
                      <v-card
                          class="pa-4 primary lighten-2 text-center rounded-circle d-inline-flex align-center justify-center"
                          style="border-radius: 50%"
                      >
                        <v-responsive
                            :class="use.bg"
                            class="text-center rounded-circle d-inline-flex align-center justify-center"
                            height="100"
                            width="100"
                        >
                          <v-img class="mx-auto" height="50" width="50"
                                 :src="use.src">
                          </v-img>
                        </v-responsive>
                      </v-card>
                      <p class="font-weight-bold pt-5">
                        {{ use.subtitle }}
                      </p>
                    </div>
                  </v-col>
                </v-row>
              </v-flex>-->
      </v-row>
    </div>
    <div v-else>
      <div class="px-6 pb-0">
        <v-row class="">
          <v-col class="">
            <h3 class="text-left primary--text">
              About Dashboard
            </h3>
            <v-img
              style="border-radius: 30px"
              src="https://image.freepik.com/free-vector/dashboard-user-panel_23-2148363275.jpg"
              class="mx-auto mt-4"
            />
            <div class="text-center mt-8">
              <v-btn
                class="primary white--text text-center"
                small
              >
                Demo
              </v-btn>
              <v-btn class="text-center ml-2" color="primary" to="/featuresDetails" small outlined>
                <v-icon>mdi-play</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col class="pt-5 pb-10 px-6">
            <p style="font-size: 14px; line-height: 25px " class="text-justify grey--text mt-3">
              Lorem Ipsum is simply dummy text of
              the
              printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>
            <p style="font-size: 14px; line-height: 25px " class="text-justify grey--text mt-6">
              Lorem Ipsum is simply dummy text of
              the
              printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>
            <p style="font-size: 14px; line-height: 25px " class="text-justify grey--text mt-6">
              Lorem Ipsum is simply dummy text of
              the
              printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged
              <nuxt-link to="/featuresDetails" class="primary--text">
                more details.
              </nuxt-link>
            </p>
          </v-col>
        </v-row>
      </div>

      <v-row>
        <v-col cols="12" class="px-6">
          <h4 class="text-center display-1 primary--text">
            Have a look on video
          </h4>
          <p class="mt-3 mb-6 text-center grey--text" style="font-size: 16px">
            Lorem Ipsum is simply dummy text of the
            printing and typesetting industry
          </p>
          <div class="mt-5">
            <video width="100%" height="auto" style="border-radius: 30px" controls>
              <source
                data-v-57a7457e=""
                src="http://nettuts.s3.amazonaws.com/763_sammyJSIntro/trailer_test.mp4"
                type="video/mp4"
              >
            </video>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Description2'
}
</script>

<style scoped>

</style>
