<template>
  <div>
    <div v-if="!$vuetify.breakpoint.mobile">
      <v-footer class="primary  pa-5"
      >
        <v-row class="pa-10 primary white--text">
          <v-col class="text-center">
            <h2 class="white--text pb-5">About</h2>
            <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat
              nulla pariatur. </p>
          </v-col>
          <v-col class="text-center">
            <h2 class="white--text">Services</h2>
            <v-list class="pb-0 primary" v-for="(item,index) in services" :key="index">
              <v-list-item>
                <v-list-item-title>
                  <a href="" class="white--text a">{{ item.serviceTitle }}</a>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col xs3 md3 sm12 class="text-center">
            <h2 class="white--text ">Help Desk</h2>
            <v-list class="pb-0 primary" v-for="(desk, index) in helpDesk" :key="index">
              <v-list-item>
                <v-list-item-title>
                  <nuxt-link :to="desk.href" class="white--text a">{{ desk.title }}</nuxt-link>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col xs3 md3 sm12 class="text-center">
            <h2 class="mb-5 white--text">Contact</h2>
            <p>
              <v-icon class="white--text mr-2">mdi-map-marker</v-icon>
              3rd Floor, Rongdhonu-15, Chowkidekhi, Sylhet.
            </p>
            <p>
              <v-icon class="white--text mr-2">mdi-phone</v-icon>
              +880-1879 149501
            </p>
            <p>
              <v-icon class="white--text mr-2">mdi-gmail</v-icon>
              official@consoleit.io
            </p>
            <div>
              <h2 class="mt-8 white--text">Social Links:</h2>
              <span v-for="(links, index) in socialLink" :key="index">
            <v-btn icon small class="mr-3 mt-3" :href="links.href">
              <v-icon class="white--text">{{ links.icon }}</v-icon>
            </v-btn>
          </span>
            </div>
          </v-col>
        </v-row>
      </v-footer>
      <div class="py-4 pl-3 primary lighten-1">
      <span class="white--text px-12">&copy; {{ new Date().getFullYear() }}
      <a class="white--text a"
         href="https://consoleit.io/#/">console.it</a></span>
      </div>
    </div>
    <div v-else>
      <v-footer class="primary  pa-5"
      >
        <v-row class="pa-10 primary white--text">
          <v-col cols="12" class="text-center pb-6">
            <h2 class="white--text pb-5">About</h2>
            <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat
              nulla pariatur.
            </p>
          </v-col>
          <v-col class="text-center">
            <h2 class="white--text">Services</h2>
            <v-list class="pb-0 primary" v-for="(item,index) in services" :key="index">
              <v-list-item>
                <v-list-item-title>
                  <a href="" class="white--text a">{{ item.serviceTitle }}</a>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col class="text-center">
            <h2 class="white--text ">Help Desk</h2>
            <v-list class="pb-0 primary" v-for="(desk, index) in helpDesk" :key="index">
              <v-list-item>
                <v-list-item-title>
                  <nuxt-link :to="desk.href" class="white--text a">{{ desk.title }}</nuxt-link>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col class="text-center">
            <h2 class="mb-5 white--text">Contact</h2>
            <p>
              <v-icon class="white--text mr-2">mdi-map-marker</v-icon>
              3rd Floor, Rongdhonu-15, Chowkidekhi, Sylhet.
            </p>
            <p>
              <v-icon class="white--text mr-2">mdi-phone</v-icon>
              +880-1879 149501
            </p>
            <p>
              <v-icon class="white--text mr-2">mdi-gmail</v-icon>
              official@consoleit.io
            </p>
            <div>
              <h2 class="mt-8 white--text">Social Links:</h2>
              <span v-for="(links, index) in socialLink" :key="index">
            <v-btn icon small class="mr-3 mt-3" :href="links.href">
              <v-icon class="white--text">{{ links.icon }}</v-icon>
            </v-btn>
          </span>
            </div>
          </v-col>
        </v-row>
      </v-footer>
      <div class="py-4 pl-3 primary lighten-1 text-center">
      <span class="white--text px-12">
        Designed & Developed by
      <a class="white--text a"
         href="https://consoleit.io/#/">console.it</a></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      services: [
        {serviceTitle: 'Restaurant Service'},
        {serviceTitle: 'Medical Service'},
        {serviceTitle: 'Trip Service'},
        {serviceTitle: 'Home Service'},
      ],
      socialLink: [
        {icon: 'mdi-facebook', href: 'https://www.facebook.com/consoleIt.io'},
        {icon: 'mdi-whatsapp', href: 'tel:+880 1879-149501'},
        {icon: 'mdi-instagram', href: 'https://www.instagram.com/console.it/?hl=bn'},
        {icon: 'mdi-youtube', href: 'https://www.youtube.com/watch?v=4dFKEZ1Bp0A'}
      ],
      helpDesk: [
        {icon: '', title: 'Privacy & Policy', href: '/privacyAndPolicy'},
        {icon: '', title: 'Terms & Condition', href: '/termsAndCondition'}
      ]
    }
  }
}
</script>

<style scoped>
.a {
  text-decoration: none;
}

.a:hover {
  text-decoration: underline;
}
</style>
