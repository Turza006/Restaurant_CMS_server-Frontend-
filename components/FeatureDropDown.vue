<template>
<div>
  <v-menu
      open-on-hover
      offset-y
      transition="slide-x-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          color="white"
          class="font-weight-bold"
          text
          small
          v-bind="attrs"
          v-on="on"
      >
        Features

        <v-icon class="pl-1" small>mdi-arrow-down-drop-circle-outline</v-icon>
<!--        <v-icon class="pl-1" small >mdi-chevron-up</v-icon>
        <v-icon class="pl-1" small >mdi-chevron-down</v-icon>-->
      </v-btn>
    </template>

    <v-list>
      <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :href="item.href"
          @click="$vuetify.goTo(item.href,option)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</div>
</template>

<script>
export default {
  name: "FeatureDropDown",
  data() {
    return {
      option: {
        duration: 1000,
        offset: 80,
        easing: 'linear',
        changeIcon: true
      },
      items: [
        { title: 'About Website', href: '#description1' },
        { title: 'About Dashboard', href: '#description2' }
      ],
    }
  }
}
</script>

<style scoped>

</style>