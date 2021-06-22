<template>
  <div>
    <v-card max-width="900" class="mx-auto" :class="`${$vuetify.breakpoint.mobile ? 'mt-0 mb-4' : 'my-8'}`" outlined>
      <v-card-title class="primary white--text">
        Create restaurant
      </v-card-title>
      <v-divider />
      <v-form ref="form" class="pa-8">
        <label>Restaurant Logo:</label>
        <ImageInput class="mb-10 mt-5 text-left" @changeImagelink="updateImageUrl($event)" />
        <v-row>
          <v-col>
            <div class="">
              <div class="caption my-2 ml-3">
                Business Type:
              </div>

              <v-select
                v-model="form.businessType"
                :items="businessTypeArray"
                :rules="businessTypeRules"
                placeholder="Select business type"
                class="mt-2"
                filled
                rounded
                dense
              />
            </div>
          </v-col>
          <v-col>
            <div class="">
              <div class="caption my-2 ml-3">
                Dish / Restaurant Type:
              </div>
              <v-select
                v-model="form.restaurantType"
                :items="RestaurantTypesArray"
                :rules="restaurantTypeRules"
                placeholder="Select restaurant type"
                multiple
                chips
                class="mt-2"
                filled
                rounded
                dense
              />
            </div>
          </v-col>
        </v-row>
        <label class="ml-3">Restaurant Name</label>
        <v-text-field
          v-model="form.name"
          class="mt-2"
          filled
          dense
          rounded
          :rules="nameRules"
          placeholder="Restaurant Name"
        />

        <label class="ml-3">Restaurant Motto/Slogan: </label>
        <v-text-field
          v-model="form.slogan"
          class="mt-2"
          :rules="sloganRules"
          filled
          dense
          rounded
          placeholder="Restaurant Motto/Slogan"
        />

        <label class="ml-3">About Restaurant: </label>
        <v-textarea
          v-model="form.aboutUs"
          class="mt-2"
          :rules="aboutUsRules"
          filled
          dense
          rounded
          placeholder="About your Restaurant"
        />

        <v-row>
          <v-col>
            <span class="caption">Restaurant Address</span>
            <v-divider />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <label class="ml-3">Country</label>
            <v-text-field
              v-model="form.address.country"
              class="mt-2"
              :rules="addressCountryRules"
              filled
              dense
              rounded
              placeholder="Country"
            />
          </v-col>
          <v-col>
            <label class="ml-3">City</label>
            <v-text-field
              v-model="form.address.city"
              class="mt-2"
              :rules="addressCityRules"
              filled
              dense
              rounded
              placeholder="City"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <label class="ml-3">Street</label>
            <v-text-field
              v-model="form.address.street"
              class="mt-2"
              :rules="addressStreetRules"
              filled
              dense
              rounded
              placeholder="Street"
            />
          </v-col>
          <v-col>
            <label class="ml-3">Area</label>
            <v-text-field
              v-model="form.address.area"
              class="mt-2"
              :rules="addressAreaRules"
              filled
              dense
              rounded
              placeholder="Area"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <label class="ml-3">Zip Code</label>
            <v-text-field
              v-model="form.address.zip_code"
              class="mt-2"
              :rules="addressZipCodeRules"
              filled
              dense
              rounded
              placeholder="Zip Code"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <span class="caption">Emails</span>
            <v-divider />
          </v-col>
        </v-row>

        <v-row>
          <v-col v-for="(email,index) in form.email" :key="index" cols="6" class="py-0 mt-2">
            <label class="ml-3">Restaurant Email ({{ index + 1 }})</label>
            <v-btn
              v-if="index !== 0"
              x-small
              outlined
              color="error"
              class="text-right"
              @click="removeEmail(index)"
            >
              Remove
            </v-btn>
            <v-text-field
              v-model="form.email[index]"
              class="mt-2"
              :rules="emailRules"
              filled
              dense
              rounded
              placeholder="Restaurant Email"
            />
          </v-col>
        </v-row>
        <div v-if="form.email.length < 4" class="ml-3 pb-10 mt-4">
          <v-btn small rounded color="primary" class="mr-3" @click="addEmail()">
            <v-icon small>
              mdi-plus
            </v-icon>
            Add Email
          </v-btn>
        </div>

        <v-row>
          <v-col>
            <span class="caption">Phone Numbers</span>
            <v-divider />
          </v-col>
        </v-row>

        <v-row>
          <v-col v-for="(phone,index) in form.phoneNo" :key="index" cols="6" class="py-0">
            <label class="ml-3">Restaurant Phone Number ({{ index + 1 }})</label>
            <v-btn
              v-if="index !== 0"
              x-small
              outlined
              color="error"
              class="text-right"
              @click="removePhoneNo(index)"
            >
              Remove
            </v-btn>
            <v-text-field
              v-model="form.phoneNo[index]"
              class="mt-2"
              :rules="phoneNoRules"
              filled
              dense
              rounded
              placeholder="Restaurant Phone Number"
            />
          </v-col>
        </v-row>
        <div v-if="form.phoneNo.length < 4" class="ml-3 pb-10 mt-4">
          <v-btn small rounded color="primary" class="mr-3" @click="addPhoneNo()">
            <v-icon small>
              mdi-plus
            </v-icon>
            Add Phone Number
          </v-btn>
        </div>

        <v-row>
          <v-col class="mr-2">
            <v-row>
              <v-col>
                <span class="caption">Opening Times</span>
                <v-divider />
              </v-col>
            </v-row>
            <v-row v-for="(open, index) in form.opening" :key="index">
              <v-col class="py-0">
                <span class="pl-6">{{ open.day }}</span>
                <v-text-field
                  v-model="open.time"
                  class="mt-2"
                  :rules="openingRules"
                  filled
                  dense
                  rounded
                  hint="Example: 09:00am"
                  :placeholder="`${open.day} Opening Time`"
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col class="ml-2">
            <v-row>
              <v-col>
                <span class="caption">Closing Times</span>
                <v-divider />
              </v-col>
            </v-row>
            <v-row v-for="(close, index) in form.closing" :key="index">
              <v-col class="py-0">
                <span class="pl-6">{{ close.day }}</span>
                <v-text-field
                  v-model="close.time"
                  class="mt-2"
                  :rules="closingRules"
                  filled
                  dense
                  rounded
                  hint="Example: 20:00pm"
                  :placeholder="`${close.day} Closing Time`"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <span class="caption">Social Links</span>
            <v-divider />
          </v-col>
        </v-row>
        <v-row v-for="(social,index) in form.socialLink" :key="index">
          <v-col class="py-0">
            <label class="ml-3">Restaurant Social Link ({{ index + 1 }})</label>
            <v-btn
              x-small
              v-if="index > 0"
              outlined
              color="error"
              class="text-right"
              @click="removeSocialLink(index)"
            >
              Remove
            </v-btn>
            <v-text-field
              v-model="social.socialSite"
              class="mt-2"
              :rules="socialLinkRules"
              filled
              dense
              rounded
              placeholder="Social Site Name"
            />
          </v-col>
          <v-col class="py-0">
            <label class="ml-3" />
            <v-text-field
              v-model="social.link"
              class="mt-2"
              :rules="socialLinkRules"
              filled
              dense
              rounded
              placeholder="Restaurant Social Site Link"
            />
          </v-col>
        </v-row>
        <div v-if="form.socialLink.length < 8" class="ml-3 pb-10 mt-4">
          <v-btn small rounded color="primary" class="mr-3" @click="addSocialLink()">
            <v-icon small>
              mdi-plus
            </v-icon>
            Add Social Link
          </v-btn>
        </div>

        <!--        <label class="ml-3">Restaurant Location:</label>-->

        <label class="ml-3">Legal Notice:</label>
        <v-textarea
          v-model="form.legalNotice"
          :rules="legalNoticeRules"
          class="mt-3 ml-3"
          dense
          filled
          rounded
          placeholder="Legal Notice"
        />
        <div class="text-center">
          <v-btn :loading="isLoading" class="primary white--text px-10" rounded @click="createRestaurant()">
            Submit
          </v-btn>
        </div>
      </v-form>
    </v-card>
    <ViewNewlyCreatedRestaurantDialog />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UploadImageMixins from '../../../mixins/UploadImageMixins'
import ViewNewlyCreatedRestaurantDialog from '../../../components/dialog/ViewNewlyCreatedRestaurantDialog'
import ImageInput from '../../../components/ImageInput'
import { DIALOG_EVENT } from '../../../util/events'
import { TOAST, BUSINESS_TYPES, RESTAURANT_TYPES } from '../../../util/strings'

export default {
  name: 'CreateRestaurant',
  components: {
    ImageInput,
    ViewNewlyCreatedRestaurantDialog
  },
  mixins: [UploadImageMixins],
  layout: 'AuthLayout',
  middleware: ['authenticated'],
  data () {
    return {
      isRestaurantCreated: false,
      isLoading: false,
      image: null,
      diningAdminPanelUrl: process.env.DINING_ADMIN_PANEL_URL,
      form: {
        ownedPackage: '',
        restaurantType: [],
        businessType: [],
        name: '',
        logo: '',
        favicon: '',
        thumbnail: '',
        primaryColor: '',
        secondaryColor: '',
        fonts: '',
        slider: [],
        address: {
          street: '',
          city: '',
          zip_code: '',
          area: '',
          country: ''
        },
        location: {},
        slogan: '',
        socialLink: [{
          socialSite: '',
          link: ''
        }],
        phoneNo: [''],
        email: [''],
        description: [],
        aboutUs: '',
        opening: [
          { day: 'Monday', time: '' },
          { day: 'Tuesday', time: '' },
          { day: 'Wednesday', time: '' },
          { day: 'Thursday', time: '' },
          { day: 'Friday', time: '' },
          { day: 'Saturday', time: '' },
          { day: 'Sunday', time: '' }
        ],
        closing: [
          { day: 'Monday', time: '' },
          { day: 'Tuesday', time: '' },
          { day: 'Wednesday', time: '' },
          { day: 'Thursday', time: '' },
          { day: 'Friday', time: '' },
          { day: 'Saturday', time: '' },
          { day: 'Sunday', time: '' }
        ],
        legalNotice: ''
        // orderFromOutside: false,
        // ordersWith: [],
        // termsAndCondition: ''
      },
      businessTypeRules: [v => !!v || 'Business type is required'],
      restaurantTypeRules: [v => !!v || 'Restaurant type is required'],
      requiredRules: [v => !!v || 'The field is required'],
      nameRules: [v => !!v || 'Restaurant Name is required'],
      logoRules: [v => !!v || 'Restaurant Logo is required'],
      faviconRules: [v => !!v || 'Website Favicon is required'],
      thumbnailRules: [v => !!v || 'Thumbnail is required'],
      // primaryColorRules: [v => !!v || 'Primary color for website is required'],
      // secondaryColorRules: [v => !!v || 'Secondary color for website is required'],
      // fontsRules: [v => !!v || 'Font is required'],
      // sliderRules: [],
      // galleryRules: [],
      addressCountryRules: [v => !!v || 'Country is required'],
      addressCityRules: [v => !!v || 'City is required'],
      addressStreetRules: [v => !!v || 'Street is required'],
      addressAreaRules: [v => !!v || 'Area is required'],
      addressZipCodeRules: [v => !!v || 'Zip Code is required'],
      sloganRules: [v => !!v || 'Restaurant motto/slogan is required'],
      socialLinkRules: [v => !!v || 'Social Link is required'],
      phoneNoRules: [
        v => !!v || 'Phone number is required',
        v => /(?=.*\d)/.test(v) || 'Phone number must contain number only',
        v => v.length === 14 || 'The phone number must be 14 digit long with country code.'
      ],
      descriptionRules: [v => !!v || 'Website description is required'],
      aboutUsRules: [v => !!v || 'About Restaurant is required'],
      openingRules: [v => !!v || 'Opening time is required'],
      closingRules: [v => !!v || 'Closing time is required'],
      legalNoticeRules: [v => !!v || 'Legal notice is required'],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  computed: {
    ...mapGetters('auth', ['jwt']),
    businessTypeArray () {
      return this.businessType = BUSINESS_TYPES
    },
    RestaurantTypesArray () {
      return this.restaurantType = RESTAURANT_TYPES
    }
  },
  watch: {
    image: {
      deep: true,
      handler (image) {
        console.log('image selected---> ', image)
      }
    }
  },
  created () {
    this.form.ownedPackage = this.$route.params.id
  },
  methods: {
    ...mapActions('restaurant', ['requestCreateRestaurant']),
    updateImageUrl (url) {
      this.form.logo = url
    },
    addEmail () {
      this.form.email.push('')
    },
    removeEmail (index) {
      this.form.email.splice(index, 1)
    },
    addPhoneNo () {
      this.form.phoneNo.push('')
    },
    removePhoneNo (index) {
      this.form.phoneNo.splice(index, 1)
    },
    addSocialLink () {
      this.form.socialLink.push({
        socialSite: '',
        link: ''
      })
    },
    removeSocialLink (index) {
      this.form.socialLink.splice(index, 1)
    },
    async onChange (image) {
      if (image) {
        console.log('Picture loaded.', image)
        const imgLink = await this.uploadImageDataNetworkCall(this.$apollo, image)
        if (imgLink !== '') {
          this.form.logo = imgLink
        }
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    },
    showNewlyCreatedRestaurantDialog (restaurantInfo) {
      this.$nuxt.$emit(DIALOG_EVENT.TOGGLE_DIALOG_VIEW_NEWLY_CREATED_RESTAURANT, restaurantInfo)
    },
    onDone (val) {
      const { data } = val
      console.log(data)
    },
    async createRestaurant () {
      if (this.form.logo === '') {
        this.$notifier.showMessage({
          content: TOAST.IMAGE_IS_REQUIRED,
          color: 'error'
        })
      }
      if (this.$refs.form.validate() && this.form.logo !== '') {
        console.log('createRestaurant payload --->', this.form)
        this.isLoading = true
        const res = await this.requestCreateRestaurant({ $apollo: this.$apollo, payload: this.form, jwt: this.jwt })
        this.isLoading = false

        console.log('res-------->', res)

        this.$notifier.showMessage({
          content: res.msg,
          color: res.code
        })

        if (res.code === 'success') {
          this.showNewlyCreatedRestaurantDialog({ id: res.restaurantId })
        }
      } else {
        console.log('Not valid')
        this.$notifier.showMessage({
          content: TOAST.PLEASE_INPUT_ALL_REQUIRED_INPUT,
          color: 'error'
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
