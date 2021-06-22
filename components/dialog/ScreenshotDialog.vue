<template>
<div>
    <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        max-width="850px">
      <v-card>
        <v-card-title class="primary lighten-3 white--text">
          Screen shot
         <v-spacer></v-spacer>
          <v-btn icon class="white--text" @click="dialog = !dialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <div class="pa-5">
          <v-img
              width="auto" height="auto"
              src="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"></v-img>
        </div>
      </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
name: "ScreenshotDialog",
  data() {
    return {
      dialog: false
    }
  },
  created() {
    this.$nuxt.$on('toggleScreenshotDialog', () => {
      this.dialog = !this.dialog
    })
  }
}
</script>

<style scoped>

</style>