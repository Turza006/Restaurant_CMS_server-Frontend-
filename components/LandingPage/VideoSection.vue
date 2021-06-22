<template>
  <div>
    <div class="hidden-sm-and-down py-16">
      <h1 class="display-3 text-center mt-10 primary--text">How to get service?</h1>
      <p class="grey--text pa-3 px-5" style="font-size: 18px" align="center">It is so simple. You can get your service with in two
        to five minutes. Just
        follow the three
        steps.</p>
      <v-row class="pt-4">
        <v-col class="px-8">
          <div class=" pl-10">
            <video width="100%" height="auto" style="border-radius: 30px;" controls>
              <source data-v-57a7457e="" style="border: none"
                      src="http://nettuts.s3.amazonaws.com/763_sammyJSIntro/trailer_test.mp4"
                      type="video/mp4">
            </video>
          </div>
        </v-col>
        <v-col class="d-flex justify-center align-center">
          <div class="text-center align-center justify-center " v-for="(use,index) in uses" :key="index">
            <div>
              <v-row>
                <v-col class="">
                  <v-card
                      class="pa-4 primary text-center rounded-circle d-inline-flex align-center justify-center"
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
                  <p class="font-weight-bold grey--text pt-5">
                    {{ use.subtitle }}
                  </p>
                </v-col>
              </v-row>

            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="hidden-md-and-up py-8">
      <h1 class="display-1 text-center mt-10 primary--text">How to get service?</h1>
      <p class="grey--text pa-3 px-5" style="font-size: 18px" align="center">It is so simple. You can get your service with in two
        to five minutes. Just
        follow the three
        steps.</p>
      <div>
        <div  >
          <div class="px-3">
            <video width="100%" height="auto" style="border-radius: 30px;" controls>
              <source data-v-57a7457e="" style="border: none"
                      src="http://nettuts.s3.amazonaws.com/763_sammyJSIntro/trailer_test.mp4"
                      type="video/mp4">
            </video>
          </div>
        </div>
        <div class="d-flex justify-center align-center px-5 mt-8">
          <div class="text-center" v-for="(use,index) in uses" :key="index">
            <div>
              <v-row>
                <v-col class="pa-3">
                  <v-card
                      class="pa-2 ma-2 primary text-center rounded-circle d-inline-flex align-center justify-center"
                      style="border-radius: 50%"
                  >
                    <v-responsive
                        :class="use.bg"
                        class="text-center rounded-circle d-inline-flex align-center justify-center"
                        height="70"
                        width="70"
                    >
                      <v-img class="mx-auto" height="40" width="40"
                             :src="use.src">
                      </v-img>
                    </v-responsive>
                  </v-card>
                  <p style="font-size: 14px" class="font-weight-bold grey--text pt-2">
                    {{ use.subtitle }}
                  </p>
                </v-col>
              </v-row>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoSection",
  data() {
    return {
      uses: [
        {src: "https://image.flaticon.com/icons/png/512/160/160114.png", subtitle: "Choose Your Plan", bg: "white"},
        {
          src: "data:image/png;base64,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",
          subtitle: "Pay Money for Your Service",
          bg: "white"
        },
        {
          src: "data:image/png;base64,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",
          subtitle: "Enjoy Your Service",
          bg: "white"
        }]
    }
  }
}
</script>

<style scoped>

</style>