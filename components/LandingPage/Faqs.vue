<template>
  <div>
    <div v-if="!$vuetify.breakpoint.mobile" class="py-16 px-10" id="Faqs">
      <v-row class="mx-auto">
        <v-col xs6 md6 sm12 class="pa-8 d-flex justify-center align-center">
          <div>
            <h3 class="display-2 primary--text">Frequently Asked Questions</h3>
            <p class="pt-5 grey--text" style="font-size: 18px">We use the latest technologies and tools in order to create a better code that not only works great, but it is easy easy to work with too.</p>
            <!--         <div>
                       <v-btn icon x-large class=""><v-icon>mdi-gmail</v-icon></v-btn>
                       <v-btn icon x-large class="primary&#45;&#45;text text&#45;&#45;lighten-2"><v-icon>mdi-facebook</v-icon></v-btn>
                       <v-btn icon x-large class="primary&#45;&#45;text text&#45;&#45;lighten-2"><v-icon>mdi-whatsapp</v-icon></v-btn>
                       <v-btn icon x-large class="primary&#45;&#45;text text&#45;&#45;lighten-2"><v-icon>mdi-instagram</v-icon></v-btn>
                     </div>-->
            <span v-for="(links, index) in socialLink" :key="index">
            <v-btn icon x-large class="mr-1" :href="links.href">
              <v-icon class="primary--text">{{ links.icon }}</v-icon>
            </v-btn>
          </span>
          </div>
        </v-col>
        <v-col xs6 md6 sm12 class="pa-8 px-8">

          <div >
            <v-expansion-panels>
              <v-expansion-panel
                  v-for="(item,i) in 7"
                  :key="i"
                  class="primary white--text py-2"
              >
                <v-expansion-panel-header>
                  <b>Question: What is a Restaurant Management System ?</b>
                  <template v-slot:actions>
                    <v-icon color="white">
                      mdi-arrow-down-drop-circle-outline
                    </v-icon>
                  </template>
                </v-expansion-panel-header>

                <v-expansion-panel-content class="white grey--text pa-5">
                  <b>Answer:</b> Restaurant Management System aids restaurant proprietors and professionals with the automation of
                  administrative tasks, inventory tracking, workforce direction & monitoring and management, orders, and even
                  payroll. More often than they comprise an integrated IP (POS) method, or even a good integration using a POS
                  offered by means of a partner seller.
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div></v-col>
      </v-row>
    </div>
    <div v-else class="py-16 px-3">
      <v-row class="mx-auto">
        <v-col xs6 md6 sm12 class="d-flex justify-center align-center mt-10 mb-6">
          <div>
            <h3 class="display-2 primary--text">Frequently Asked Questions</h3>
            <p class="pt-5 grey--text" style="font-size: 18px">We use the latest technologies and tools in order to create a better code that not only works great, but it is easy easy to work with too.</p>
            <span v-for="(links, index) in socialLink" :key="index">
            <v-btn icon x-large class="mr-1" :href="links.href">
              <v-icon class="primary--text">{{ links.icon }}</v-icon>
            </v-btn>
          </span>
          </div>
        </v-col>
        <v-col xs6 md6 sm12 class="pa-8 px-3">

          <div >
            <v-expansion-panels>
              <v-expansion-panel
                  v-for="(item,i) in 7"
                  :key="i"
                  class="primary white--text py-2"
              >
                <v-expansion-panel-header>
                  <b>Question: What is a Restaurant Management System?</b>
                  <template v-slot:actions>
                    <v-icon color="white">
                      mdi-arrow-down-drop-circle-outline
                    </v-icon>
                  </template>
                </v-expansion-panel-header>

                <v-expansion-panel-content class="white grey--text pa-5">
                  <b>Answer:</b> Restaurant Management System aids restaurant proprietors and professionals with the automation of
                  administrative tasks, inventory tracking, workforce direction & monitoring and management, orders, and even
                  payroll. More often than they comprise an integrated IP (POS) method, or even a good integration using a POS
                  offered by means of a partner seller.
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div></v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Faqs",
  data() {
    return {
      socialLink: [
        {icon: 'mdi-gmail', href: 'mailto:Official@Consoleit.Io.com'},
        {icon: 'mdi-facebook', href: 'https://www.facebook.com/consoleIt.io'},
        {icon: 'mdi-whatsapp', href: 'tel:+880 1879-149501'},
        {icon: 'mdi-instagram', href: 'https://www.instagram.com/console.it/?hl=bn'}
      ]
    }
  }
}
</script>

<style scoped>

</style>