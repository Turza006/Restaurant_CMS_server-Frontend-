<template>
  <div id="Home">
    <nav>
      <v-app-bar v-if="!$vuetify.breakpoint.mobile" class="ml-0 px-6 primary " style="top: 0;" fixed>
        <v-toolbar-title>
          <nuxt-link to="/" class="pl-8">
            <v-img class="mb-7" src="/diningLogo.png" height="auto" width="100" />
          </nuxt-link>
        </v-toolbar-title>
        <v-spacer />
        <v-btn
          v-show="$route.name==='index'"
          text
          small
          class="ml-2 font-weight-bold"
          color="white"
          href="#aboutUs"
          @click="$vuetify.goTo('#aboutUs',option)"
        >
          About Us
        </v-btn>

<!--        <v-btn-->
<!--          v-show="$route.name==='index'"-->
<!--          text-->
<!--          small-->
<!--          class="ml-2 font-weight-bold"-->
<!--          color="white"-->
<!--          href="#benefit"-->
<!--          @click="$vuetify.goTo('#benefit',option)"-->
<!--        >-->
<!--          Benefits-->
<!--        </v-btn>-->

<!--        <v-btn-->
<!--          v-show="$route.name==='index'"-->
<!--          text-->
<!--          small-->
<!--          class="ml-2 font-weight-bold"-->
<!--          color="white"-->
<!--          href="#whyUs"-->
<!--          @click="$vuetify.goTo('#whyUs',option)"-->
<!--        >-->
<!--          Why Us-->
<!--        </v-btn>-->

<!--        <FeatureDropDown v-show="$route.name==='index'" />-->

<!--        <v-btn-->
<!--          v-show="$route.name==='index'"-->
<!--          text-->
<!--          small-->
<!--          class="ml-2 font-weight-bold"-->
<!--          color="white"-->
<!--          href="#pricing"-->
<!--          @click="$vuetify.goTo('#pricing',option)"-->
<!--        >-->
<!--          Pricing-->
<!--        </v-btn>-->

        <v-btn
          v-show="$route.name==='index'"
          text
          small
          class="ml-2 font-weight-bold"
          color="white"
          href="#packages"
          @click="$vuetify.goTo('#packages',option)"
        >
          Packages
        </v-btn>

        <v-btn
          v-show="$route.name==='index'"
          text
          small
          class="ml-2 font-weight-bold"
          color="white"
          href="#Faqs"
          @click="$vuetify.goTo('#Faqs',option)"
        >
          Faqs
        </v-btn>

        <v-btn
          v-show="$route.name==='index'"
          text
          small
          class="ml-2 font-weight-bold"
          color="white"
          href="#contact"
          @click="$vuetify.goTo('#contact',option)"
        >
          Contact Us
        </v-btn>

        <v-menu
          v-if="isAuthenticated"
          offset-y
        >
          <template #activator="{ attrs, on }">
            <v-btn
              class="ma-5"
              color="grey lighten-4"
              v-bind="attrs"
              icon
              v-on="on"
            >
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              class="px-10"
              link
              to="/my-purchase"
              color="primary"
            >
              <v-list-item-title>My Purchases</v-list-item-title>
            </v-list-item>
            <v-list-item
              class="px-10"
              link
              to="/profile"
              color="primary"
            >
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item
              class="px-10"
              link
              @click="signOut()"
            >
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <span v-else class="ml-2 font-weight-bold">
          <v-btn text small color="white" @click="logIn">
            Sign In
          </v-btn>
        </span>

        <span v-if="isAuthenticated && $route.name === 'index'">
          <v-divider class="grey mr-3 py-6" vertical />
        </span>

        <span v-if="$route.name === 'index'">
          <v-btn v-if="cart !== null" icon @click="openCart()">
            <v-badge color="orange white--text" content="1">
              <v-icon class="white--text">mdi-cart</v-icon>
            </v-badge>
          </v-btn>
          <v-btn v-else icon @click="openCart()">
            <v-badge color="orange black--text" content="0">
              <v-icon class="white--text">mdi-cart</v-icon>
            </v-badge>
          </v-btn>
        </span>
      </v-app-bar>

      <v-app-bar v-else class="ml-0s primary " style="top: 0;" fixed>
        <v-app-bar-nav-icon class="white--text" @click="openNavigationDrawer()" />
        <v-toolbar-title class="pl-0">
          <v-icon />
          <span>
            <v-img src="/diningLogo.png" height="auto" width="100" class=" mb-7" to="/" />
          </span>
        </v-toolbar-title>
        <v-spacer />

        <!--        <div>
                  <v-btn text small class="ml-2 font-weight-bold" color="white" href="#aboutUs"
                         @click="$vuetify.goTo('#aboutUs',option)">
                    About Us
                  </v-btn>
                  <v-btn text small class="ml-2 font-weight-bold" color="white" href="#benefit"
                         @click="$vuetify.goTo('#benefit',option)">
                    Benefits
                  </v-btn>
                  <v-btn text small class="ml-2 font-weight-bold" color="white" href="#whyUs"
                         @click="$vuetify.goTo('#whyUs',option)">
                    Why Us
                  </v-btn>
                  <FeatureDropDown />
                  <v-btn text small class="ml-2 font-weight-bold" color="white" href="#pricing"
                         @click="$vuetify.goTo('#pricing',option)">
                    Pricing
                  </v-btn>
                  <v-btn text small class="ml-2 font-weight-bold" color="white" href="#packages"
                         @click="$vuetify.goTo('#packages',option)">
                    Packages
                  </v-btn>
                  <v-btn text small class="ml-2 font-weight-bold" color="white" href="#Faqs"
                         @click="$vuetify.goTo('#Faqs',option)">
                    Faqs
                  </v-btn>
                  <v-btn text small class="ml-2 font-weight-bold" color="white" href="#contact"
                         @click="$vuetify.goTo('#contact',option)">
                    Contact Us
                  </v-btn>

                </div>-->

        <span class="ml-2 font-weight-bold">
          <v-btn v-if="!isAuthenticated" text small color="white" @click="logIn">
            Sign In
          </v-btn>
          <v-btn v-else text small color="white" @click="signOut">
            Sign Out
          </v-btn>
          <span>
            <span v-if="$route.name !== 'cartPage'">
              <v-btn v-if="cart !== null" icon @click="openCart()">
                <v-badge color="orange" content="1">
                  <v-icon class="white--text">mdi-cart</v-icon>
                </v-badge>
              </v-btn>
              <v-btn v-else icon @click="openCart()">
                <v-badge color="orange black--text" content="0">
                  <v-icon class="white--text">mdi-cart</v-icon>
                </v-badge>
              </v-btn>
            </span>
          </span>
        </span>
      </v-app-bar>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import FeatureDropDown from '~/components/FeatureDropDown'

export default {
  name: 'Navbar',
  components: { FeatureDropDown },
  middleware: 'cart',
  data () {
    return {
      path: '/cartPage',
      cartLength: [],
      name: '',
      dialog: false,
      color: 'black',
      option: {
        duration: 1000,
        offset: 80,
        easing: 'linear'
      },
      loggedIn: false,
      showPassword: false,
      logout: false,
      text: '',
      menu: [
        { icon: 'home', title: 'Link A' },
        { icon: 'info', title: 'Link B' },
        { icon: 'warning', title: 'Link C' }
      ]
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapGetters('cart', ['cart'])

  },
  methods: {
    ...mapActions('auth', ['requestPerformLogout']),
    logIn () {
      this.$nuxt.$emit('toggleLoginDialog')
    },
    async signOut () {
      await this.requestPerformLogout()
      await this.$apolloHelpers.onLogout()
      await this.$router.push('/')
    },
    openCart () {
      this.$nuxt.$emit('toggleCart')
    },
    openNavigationDrawer () {
      this.$nuxt.$emit('toggleNavigationDrawer')
    }
  }
}

</script>

<style scoped>

</style>
