<template>
  <div>
    <v-navigation-drawer v-model="dialog" color="primary" app temporary :width="`${$vuetify.breakpoint.mobile ? '300px' : '360px'}`">
      <v-list-item class="py-8">
        <v-list-item-content>
          <v-list-item-title class="title text-center">
            <v-icon x-large color="grey">
              mdi-account-circle-outline
            </v-icon>
          </v-list-item-title>
          <v-list-item-subtitle class="text-center white--text">
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider color="white" class="mb-2 mx-5" />

      <v-list
        rounded
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
          color="white"
        >
          <v-list-item-icon>
            <v-icon color="white">
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  data () {
    return {
      dialog: false,
      items: [
        { title: 'Home', icon: 'mdi-home-outline', to: '/' },
        { title: 'My Profile', icon: 'mdi-account-outline', to: '/profile' },
        { title: 'My Purchase', icon: 'mdi-home', to: '/my-purchase' }
      ]
    }
  },
  created () {
    this.$nuxt.$on('toggleNavigationDrawer', () => {
      this.dialog = !this.dialog
    })
  }
}
</script>

<style scoped>

</style>
