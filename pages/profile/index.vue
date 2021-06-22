<template>
  <div>
    <div v-if="!$vuetify.breakpoint.mobile" class="ma-16 mb-10 pa-16">
      <v-card flat class="mx-3 mt-4 grey lighten-3">
        <v-card-title class="primary white--text">
          Profile
          <v-spacer />
          <v-btn
            color="white"
            small
            class="mr-3"
            rounded
            outlined
            @click="changePassword()"
          >
            <v-icon class="pr-2">
              mdi-key-change
            </v-icon> Change Password
          </v-btn>
          <v-btn color="white" to="profile/edit" small rounded outlined>
            <v-icon small class="pr-2">
              mdi-pencil
            </v-icon> Edit
          </v-btn>
        </v-card-title>
        <div class="px-3 py-16 text-center">
          <img
            v-if="ownerInfo.profilePic === null"
            class="mb-8"
            height="200"
            src="/img/ic_img_upload.png"
            alt="John"
          >
          <img
            v-else
            class="mb-8"
            height="200"
            :src="imgBaseUrl+ownerInfo.profilePic"
            alt="John"
          >
          <p style="font-size: 20px" class="mb-1 grey--text text--darken-1">
            <b class="black--text">Name: </b> {{ ownerInfo.firstName + ' ' + ownerInfo.lastName }}
          </p>
          <p style="font-size: 20px" class="mb-1 grey--text text--darken-1">
            <b class="black--text">Email: </b>
            {{ ownerInfo.email }}
          </p>
        </div>
      </v-card>
    </div>
    <div v-else class="mt-14 mb-8 pt-5 px-2">
      <v-card flat class="mx-3 mt-4 grey lighten-3">
        <v-card-title class="primary white--text">
          <v-layout>
            <v-flex xs3 md3 sm3>Profile</v-flex>
            <v-flex xs9 md9 sm9 class="text-right">
              <v-btn
                  color="white"
                  x-small
                  class=""
                  rounded
                  outlined
                  @click="changePassword()"
              >
                <v-icon class="pr-2" small>
                  mdi-key-change
                </v-icon> Change Password
              </v-btn>
              <v-btn color="white" to="profile/edit" x-small rounded outlined>
                <v-icon small class="pr-2">
                  mdi-pencil
                </v-icon> Edit
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card-title>
        <div class="px-3 py-16 text-center">
          <img
            v-if="ownerInfo.profilePic === null"
            class="mb-8"
            height="200"
            src="/img/ic_img_upload.png"
            alt="John"
          >
          <img
            v-else
            class="mb-8"
            height="200"
            :src="imgBaseUrl+ownerInfo.profilePic"
            alt="John"
          >
          <p style="font-size: 20px" class="mb-1 grey--text text--darken-1">
            <b class="black--text">Name: </b> {{ ownerInfo.firstName + ' ' + ownerInfo.lastName }}
          </p>
          <p style="font-size: 20px" class="mb-1 grey--text text--darken-1">
            <b class="black--text">Email: </b>
            {{ ownerInfo.email }}
          </p>
        </div>
      </v-card>
    </div>
<!--    <div v-else class="py-16">
      <v-card flat class="mx-3 mt-4 grey lighten-3">
        <v-card-title class="primary white&#45;&#45;text">
          Profile
          <v-spacer />
          <v-btn color="white" class="mr-3" icon>
            <v-icon>mdi-key-change</v-icon>
          </v-btn>
          <v-btn color="white" icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-card-title>
        <div class="px-3 py-8 text-center">
          <img
            height="120"
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          >
          <p class="mb-1">
            <b>Name: </b> Test Name
          </p>
          <p><b>Email: </b> test@gmail.com</p>
        </div>
      </v-card>
    </div>-->
    <DialogChangePassword />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DialogChangePassword from '@/components/dialog/DialogChangePassword'
import { DIALOG_EVENT } from '@/util/events'
export default {
  name: 'Profile',
  components: { DialogChangePassword },
  component: {
    DialogChangePassword
  },
  data () {
    return {
      loading: false,
      imgBaseUrl: process.env.IMAGE_BASE_URL,
      toggleDialogChangePassword: DIALOG_EVENT.TOGGLE_DIALOG_CHANGE_PASSWORD
    }
  },
  computed: {
    ...mapGetters('auth', ['jwt']),
    ...mapGetters('profile', ['ownerInfo'])
  },
  async created () {
    this.loading = true
    await this.requestGetOwnerProfile({ $apollo: this.$apollo, jwt: this.jwt })
    this.loading = false
  },
  methods: {
    ...mapActions('profile', ['requestGetOwnerProfile']),
    changePassword () {
      this.$nuxt.$emit(DIALOG_EVENT.TOGGLE_DIALOG_CHANGE_PASSWORD, () => {
        this.dialog = !this.dialog
      })
    }
  }
}
</script>

<style scoped>

</style>
