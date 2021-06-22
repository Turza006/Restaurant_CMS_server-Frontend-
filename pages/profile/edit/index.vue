<template>
  <div class="py-16">
    <v-card v-if="!$vuetify.breakpoint.mobile" class="ma-16 grey lighten-4" flat :loading="loading">
      <v-card-title class="">
        Edit Profile
      </v-card-title>
      <v-divider />
      <v-form ref="form" class="px-10 pt-16 pb-8">
        <v-layout>
          <v-flex
            class="mt-5"
          >
            <ImageInput
              style="box-shadow: 0px 0px 20px #aaa;"
              class="mx-auto"
              :image-link="form.profilePic"
              @changeImagelink="updateImageUrl($event)"
            />
            <div class="text-center">
              <p class="mt-5 pa-4 font-weight-bold grey--text text--darken-1" style="font-size: 20px">
                <v-icon class="pr-2">
                  mdi-pencil
                </v-icon>
                Edit Your Image
              </p>
            </div>
          </v-flex>
        </v-layout>
        <div class="pa-10">
          <h3 class="text-uppercase mb-5">
            Account Information
          </h3>
          <v-layout>
            <v-flex xs12 md2 sm4 class="pt-4">
              <label>Edit First Name:</label>
            </v-flex>
            <v-flex xs12 md10 sm8>
              <v-text-field
                v-model="form.firstName"
                :rules="firstNameRules"
                type="text"
                placeholder="First Name*"
                prepend-inner-icon="mdi-account"
                append-icon="mdi-pencil"
                filled
                dense
                rounded
              />
            </v-flex>
            <v-flex />
          </v-layout>
          <v-layout>
            <v-flex xs12 md2 sm4 class="mt-4">
              <label>Edit Last Name:</label>
            </v-flex>
            <v-flex xs12 md10 sm8>
              <v-text-field
                v-model="form.lastName"
                :rules="lastNameRules"
                type="text"
                placeholder="Last Name"
                prepend-inner-icon="mdi-account"
                append-icon="mdi-pencil"
                filled
                dense
                rounded
              />
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 md2 sm4 class="mt-4">
              <label>Email:</label>
            </v-flex>
            <v-flex xs12 md10 sm8>
              <v-text-field
                v-model="form.email"
                :rules="emailRules"
                type="email"
                placeholder="Email *"
                prepend-inner-icon="mdi-gmail"
                append-icon="mdi-pencil"
                filled
                rounded
                dense
                disabled
              />
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 md2 sm4 class="mt-4">
              <label>Phone:</label>
            </v-flex>
            <v-flex xs12 md10 sm8>
              <v-text-field
                v-model="form.phoneNo"
                :rules="phoneNoRules"
                type="email"
                placeholder="Phone *"
                prepend-inner-icon="mdi-phone"
                append-icon="mdi-pencil"
                filled
                dense
                rounded
              />
            </v-flex>
          </v-layout>
        </div>
        <div class="px-10 pt-3">
          <h3 class="text-uppercase mb-5">
            Billing Info
          </h3>
          <v-layout>
            <v-flex xs12 md2 sm4 class="mt-4">
              <label>Billing Address:</label>
            </v-flex>
            <v-flex xs12 md10 sm8>
              <v-text-field
                v-model="form.billingAddress"
                type="text"
                placeholder="Billing Address"
                filled
                dense
                rounded
              />
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 md2 sm4 class="mt-4">
              <label>Billing Number:</label>
            </v-flex>
            <v-flex xs12 md10 sm8>
              <v-text-field
                v-model="form.billingNumber"
                type="text"
                placeholder="Billing Number"
                filled
                dense
                rounded
              />
            </v-flex>
          </v-layout>
        </div>
      </v-form>
      <div class="pb-8 text-center mt-5 pb-10">
        <v-btn class="primary mx-auto white--text" rounded :loading="loading" @click="onSubmit()">
          <v-icon class="mr-1">
            mdi-update
          </v-icon>
          Update Profile
        </v-btn>
      </div>
    </v-card>
    <v-card v-else class="my-8 mb-4 mx-3 grey lighten-4" flat :loading="loading">
      <v-card-title class="">
        Edit Profile
      </v-card-title>
      <v-divider />
      <v-form ref="form" class="px-6 pt-16 pb-8">
        <v-layout>
          <v-flex
              class="mt-5"
          >
            <ImageInput
                style="box-shadow: 0px 0px 20px #aaa;"
                class="mx-auto"
                :image-link="form.profilePic"
                @changeImagelink="updateImageUrl($event)"
            />
            <div class="text-center">
              <p class="mt-5 pa-4 font-weight-bold grey--text text--darken-1" style="font-size: 20px">
                <v-icon class="pr-2">
                  mdi-pencil
                </v-icon>
                Edit Your Image
              </p>
            </div>
          </v-flex>
        </v-layout>
        <div class="py-6">
          <h3 class="text-uppercase mb-2">
            Account Information
          </h3>
          <v-divider class="mb-5"/>
              <label class="ml-2">Edit First Name:</label>
              <v-text-field
                  v-model="form.firstName"
                  :rules="firstNameRules"
                  type="text"
                  class="mt-2"
                  placeholder="First Name*"
                  prepend-inner-icon="mdi-account"
                  append-icon="mdi-pencil"
                  filled
                  rounded
                  dense
              />
              <label class="ml-2">Edit Last Name:</label>
              <v-text-field
                  v-model="form.lastName"
                  :rules="lastNameRules"
                  type="text"
                  class="mt-2"
                  placeholder="Last Name"
                  prepend-inner-icon="mdi-account"
                  append-icon="mdi-pencil"
                  filled
                  rounded
                  dense
              />
              <label class="ml-2">Email:</label>
              <v-text-field
                  v-model="form.email"
                  :rules="emailRules"
                  type="email"
                  class="mt-2"
                  placeholder="Email *"
                  prepend-inner-icon="mdi-gmail"
                  append-icon="mdi-pencil"
                  filled
                  rounded
                  dense
                  disabled
              />
              <label class="ml-2">Phone:</label>
              <v-text-field
                  v-model="form.phoneNo"
                  :rules="phoneNoRules"
                  type="number"
                  class="mt-2"
                  placeholder="Phone *"
                  prepend-inner-icon="mdi-phone"
                  append-icon="mdi-pencil"
                  filled
                  dense
                  rounded
              />
        </div>
        <div class="px-2 pt-3">
          <h3 class="text-uppercase mb-2">
            Billing Info
          </h3>
          <v-divider class="mb-5" />
              <label class="ml-2">Billing Address:</label>
              <v-text-field
                  v-model="form.billingAddress"
                  type="text"
                  class="mt-2"
                  placeholder="Billing Address"
                  filled
                  dense
                  rounded
              />
              <label class="ml-2">Billing Number:</label>
              <v-text-field
                  v-model="form.billingNumber"
                  type="text"
                  class="mt-2"
                  placeholder="Billing Number"
                  filled
                  dense
                  rounded
              />
        </div>
      </v-form>
      <div class="pb-8 text-center mt-5 pb-10">
        <v-btn class="primary mx-auto white--text" rounded :loading="loading" @click="onSubmit()">
          <v-icon class="mr-1">
            mdi-update
          </v-icon>
          Update Profile
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import moment from 'moment'
import { mapActions, mapGetters } from 'vuex'
import ImageInput from '../../../components/ImageInput'
import DateConverterMixin from '~/mixins/DateConverterMixin'

export default {
  name: 'EditAdminProfile',
  components: { ImageInput },
  mixins: [DateConverterMixin],
  data () {
    return {
      loading: false,
      dobMenu: false,
      date: null,
      adminId: '',
      imgBaseUrl: process.env.IMAGE_BASE_URL,
      form: {
        firstName: '',
        lastName: '',
        phoneNo: '',
        email: '',
        profilePic: '',
        billingAddress: '',
        billingNumber: ''
      },
      firstNameRules: [
        v => !!v || 'First Name is required',
        v => v.length >= 3 || 'First Name must be at least 3 characters or more.'
      ],
      lastNameRules: [
        v => !!v || 'Last name is required',
        v => v.length >= 2 || 'The last name must be at least 2 characters or more.'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid'
      ],
      phoneNoRules: [
        v => !!v || 'Phone number is required'
      ]
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

    this.form = {
      firstName: this.ownerInfo.firstName,
      lastName: this.ownerInfo.lastName,
      phoneNo: this.ownerInfo.phoneNo,
      email: this.ownerInfo.email,
      profilePic: this.ownerInfo.profilePic,
      billingAddress: this.ownerInfo.billingAddress,
      billingNumber: this.ownerInfo.billingNumber
    }

    // if (this.ownerInfo.dob !== null) {
    //   this.date = this._milliToDateYYYYMMDD(this.ownerInfo.dob)
    // }
    this.adminId = this.ownerInfo.id
  },
  methods: {
    ...mapActions('profile', ['requestGetOwnerProfile', 'requestEditOwnerProfile']),
    updateImageUrl (url) {
      this.form.profilePic = url
    },
    async onSubmit () {
      if (this.$refs.form.validate()) {
        // if (this.date !== null) {
        //   this.form.dob = this._getDateToMillisFromYYYYMMDD(this.date).toString()
        // }
        // console.log('input valid :)', this.form)
        const res = await this.requestEditOwnerProfile({
          $apollo: this.$apollo,
          ownerId: this.ownerInfo.id,
          payload: this.form,
          jwt: this.jwt
        })

        this.$notifier.showMessage({
          content: res.msg,
          color: res.code
        })

        if (res.code === 'SUCCESS') {
          await this.$router.push('/profile')
        }
      } else {
        this.$notifier.showMessage({
          content: 'Please enter valid input',
          color: 'error'
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
