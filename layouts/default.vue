<template>
  <div>
    <v-app>
      <Navbar/>
      <v-main>
        <nuxt/>
      </v-main>
      <Footer/>
      <Snackbar/>
      <login-dialog/>
      <forgetPasswordToken/>
      <create-password-dialog/>
      <forget-password-dialog/>
      <sign-up-dialog/>
      <cart-drawer/>
      <navigation-drawer/>
    </v-app>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Snackbar from "@/components/Snackbar";
import LoginDialog from "../components/dialog/loginDialog";
import createPasswordDialog from "../components/dialog/createPasswordDialog";
import forgetPasswordToken from "../components/dialog/forgetPasswordToken";
import signUpDialog from "../components/dialog/signUpDialog";
import forgetPasswordDialog from "../components/dialog/forgetPasswordDialog";
import NavigationDrawer from "@/components/navigationDrawer";
import CartDrawer from "@/components/dialog/cartDrawer";



export default {
  components: {
    CartDrawer,
    NavigationDrawer,

    Navbar,
    Footer,
    Snackbar,
    LoginDialog,
    createPasswordDialog,
    forgetPasswordToken,
    signUpDialog,
    forgetPasswordDialog
  }
}
</script>
<style  >
::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 15px;
 }

/* Handle */
::-webkit-scrollbar-thumb {
  background: #07152b;
  border-radius: 15px;
  border: 2px solid #ddd;
  /*box-shadow: inset 0 0 10px #222 ;*/
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  /*background: #9575cd ;*/
}
/* Handle on hover */
</style>
