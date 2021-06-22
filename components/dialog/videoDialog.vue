<template>
  <div>
    <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        persistent
        max-width="850px">
      <v-card flat>
        <v-card-title class="primary lighten-2  white--text">
          About Website
          <v-spacer/>
          <v-btn icon class="white--text" @click="dialog = !dialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <div>
          <video id="myVideo" width="100%" height="480" controls>
            <source  data-v-57a7457e="" src="http://nettuts.s3.amazonaws.com/763_sammyJSIntro/trailer_test.mp4" type="video/mp4">
          </video>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'VideoDialog',
  data () {
    return {
      dialog: false,
    }
  },
  created () {
    this.$nuxt.$on('toggleVideoDialog', () => {
      this.dialog = !this.dialog
    })
  },
  methods: {
  }
}
</script>

<style scoped>

</style>