<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          Bkash
        </v-card-title>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "bkashPayment",
  data() {
    return {
      dialog: false
    }
  },
  created() {
    this.$nuxt.$on('toggleBkashPayment', () => {
      this.dialog = !this.dialog
    })
  }
}
</script>

<style scoped>

</style>