<template>
  <div>
    <div v-if="!$vuetify.breakpoint.mobile" class="pa-16 my-10">
      <h3 class="primary--text">
        Description
      </h3>
      <p class="pt-5 grey--text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <v-layout class="pt-3">
        <v-flex xs6 md6 sm12 class="">
          <div>
            <video style="border-radius: 20px" width="100%" height="auto" controls>
              <source
                data-v-57a7457e=""
                src="http://nettuts.s3.amazonaws.com/763_sammyJSIntro/trailer_test.mp4"
                type="video/mp4"
              >
            </video>
          </div>
        </v-flex>
        <v-flex xs6 md6 sm12 class="pl-16">
          <p class="grey--text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s.
          </p>
          <p class="pt-3 grey--text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p class="pt-3 grey--text">
            but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s.
          </p>
        </v-flex>
      </v-layout>
      <h3 class="pt-10 pb-2 primary--text">
        Screen Shots
      </h3>
      <p class="pb-5 grey--text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <v-row>
        <v-col v-for="(n,index) in 6" :key="index" cols="4">
          <v-card outlined>
            <v-card-title class="primary white--text">
              Screenshots {{ index + 1 }}
            </v-card-title>
            <v-divider />
            <div class="pa-5 cardSS">
              <v-img
                src="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
              />
            </div>
            <v-divider />
            <div class="pa-5">
              Image {{ index+1 }}
            </div>
          </v-card>
        </v-col>
      </v-row>
      <div>
        <h3 class="mt-10 primary--text">
          Screen Shot 1
        </h3>
        <p class="pt-5 grey--text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <v-layout class="">
          <v-flex xs6 md6 sm12 class="">
            <div class="pa-10 pt-0">
              <v-img
                src="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
              />
            </div>
          </v-flex>
          <v-flex xs6 md6 sm12 class="pl-16">
            <p class="grey--text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's
              standard dummy text ever since the 1500s.
            </p>
            <p class="pt-2 grey--text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <p class="pt-2 grey--text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </v-flex>
        </v-layout>
        <p class="grey--text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p>
      </div>
      <div>
        <h3 class="mt-10 mb-5 primary--text">
          Key Features
        </h3>
        <p class="grey--text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p>
        <ul class="grey--text">
          <li>Lorem Ipsum is simply dummy</li>
          <li>Lorem Ipsum is simply dummy text of the printing</li>
          <li>Lorem Ipsum is simply dummy</li>
        </ul>
      </div>
      <screenshot-dialog />
    </div>
    <div v-else class="pa-6 my-12">
      <h3 class="primary--text">
        Description
      </h3>
      <p class="pt-2 mb-0 grey--text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div class="py-5">
        <video style="border-radius: 20px" width="100%" height="auto" controls>
          <source
            data-v-57a7457e=""
            src="http://nettuts.s3.amazonaws.com/763_sammyJSIntro/trailer_test.mp4"
            type="video/mp4"
          >
        </video>
      </div>
      <p class="grey--text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s.
      </p>
      <p class="grey--text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <p class="grey--text">
        but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <h3 class="pt-4 pb-2 primary--text">
        Screen Shots
      </h3>
      <p class="pb-5 grey--text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <v-row>
        <v-col v-for="(n,index) in 6" :key="index" cols="12">
          <v-card outlined>
            <v-divider />
            <div class="pa-5">
              <v-img
                src="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
              />
            </div>
            <v-divider />
            <div class="pa-5">
              Image {{ index+1 }}
            </div>
          </v-card>
        </v-col>
      </v-row>
      <div>
        <h3 class="mt-10 primary--text">
          Screen Shot 1
        </h3>
        <p class="pt-2 grey--text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
            <v-card class="pa-5 my-5" outlined>
              <v-img
                src="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
              />
            </v-card>
            <p class="grey--text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's
              standard dummy text ever since the 1500s.
            </p>
            <p class="pt-2 grey--text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <p class="pt-2 grey--text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          <p class="grey--text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p>
      </div>
      <div>
        <h3 class="mt-10 mb-5 primary--text">
          Key Features
        </h3>
        <p class="grey--text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p>
        <ul class="grey--text">
          <li>Lorem Ipsum is simply dummy</li>
          <li>Lorem Ipsum is simply dummy text of the printing</li>
          <li>Lorem Ipsum is simply dummy</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FeaturesDetails',
  data () {
    return {
      dialog: false
    }
  },
  methods: {
  }
}
</script>

<style scoped>
p {
  font-size: 16px;
}
</style>
