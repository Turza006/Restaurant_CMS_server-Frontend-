<template>
  <div>
    <div v-if="!$vuetify.breakpoint.mobile" class="hidden-sm-and-down pa-10 px-16 pb-0" id="aboutUs">
      <h3 class="display-3 text-center  primary--text">About us</h3>
      <p style="font-size: 18px" class="text-center mt-3 grey--text">Lorem Ipsum is simply dummy text of the printing and
        typesetting
        industry.</p>
      <div class="">
        <v-row class="py-10">
          <v-col class="pa-5">

            <h3 class="primary--text mb-5">About Us</h3>
            <p class="text-justify grey--text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's
              standard dummy text ever since the 1500s,
            </p>
            <p class="text-justify grey--text my-10">
              when an unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <p class="text-justify grey--text">
              It was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
              versions
              of Lorem Ipsum.
            </p>
          </v-col>
          <v-col class="col pa-5">
            <v-img style="border-radius: 20px" height="380"
                   src="https://image.freepik.com/free-vector/contact-us-concept-landing-page_52683-18636.jpg"></v-img>
          </v-col>
        </v-row>
      </div>
    </div>
    <div v-else class="pa-10 px-6 pb-0">
      <h2 class="display-1 text-center  primary--text">About us</h2>
      <p style="font-size: 18px" class="text-center mt-3 grey--text">Lorem Ipsum is simply dummy text of the printing and
        typesetting
        industry.</p>
      <div class="">
        <v-row class="">
          <v-col class="col pa-5">
              <v-img  height="40vh"
                   src="https://image.freepik.com/free-vector/contact-us-concept-landing-page_52683-18636.jpg"></v-img>
          </v-col>
          <v-col class="pa-5 pb-0">

            <h3 class="primary--text mb-5">About Us</h3>
            <p class="text-justify grey--text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's
              standard dummy text ever since the 1500s,
            </p>
            <p class="text-justify grey--text my-4">
              when an unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <p class="text-justify grey--text">
              It was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
              versions
              of Lorem Ipsum.
            </p>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUsComponent"
}
</script>

<style scoped>

</style>
