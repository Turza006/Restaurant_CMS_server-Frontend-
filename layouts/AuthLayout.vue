<template>
<v-app>
  <nuxt/>
  <Snackbar />
</v-app>
</template>

<script>
import Snackbar from "../components/Snackbar";
export default {
name: "AuthLayout",
  components: {Snackbar}
}
</script>

<style scoped>

</style>
