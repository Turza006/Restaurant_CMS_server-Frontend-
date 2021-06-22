<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="500px"
  >
    <v-card>
      <v-card-title class="primary white--text">
        Qr Code
        <v-spacer />
        <v-btn icon large text class="black--text" @click="dialog = !dialog">
          <v-icon large class="white--text">
            mdi-close
          </v-icon>
        </v-btn>
      </v-card-title>

      <div class="pa-5 pt-8 mx-auto" style="width: 250px">
        <v-img
          class="mx-auto mb-5"
          width="200px"
          height="200px"
          :src="form.qrCodeUrl"
        />
        <p class="mb-1 text-center">
          01711111111
        </p>
        <p class="text-center mb-5">
          For sending money please scan the qr code first
        </p>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'BillingRequestWithQrCode',
  data () {
    return {
      dialog: false,
      form: {
        qrCodeUrl: 'https://www.investopedia.com/thmb/ZG1jKEKttKbiHi0EkM8yJCJp6TU=/1148x1148/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png'
      }
    }
  },
  created () {
    this.$nuxt.$on('toggleQRCode', () => {
      this.dialog = !this.dialog
    })
  }
}
</script>

<style scoped>

</style>
