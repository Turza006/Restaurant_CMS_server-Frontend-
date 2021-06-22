<template>
  <div>
    <landing-page-about-us-component />
    <about-us-component />
<!--    <introduction />-->
<!--    <why-dining />-->
<!--    <description1 />-->
<!--    <description2 />-->
<!--    <video-section />-->
    <pricing />
    <Faqs />
    <contact-components />
  </div>
</template>

<script>

import AboutUsComponent from '../components/LandingPage/AboutUs'
import LandingPageAboutUsComponent from '~/components/LandingPage/LandingPageAboutUs'
// import introduction from '~/components/LandingPage/introduction'
// import description1 from '~/components/LandingPage/description1'
// import description2 from '~/components/LandingPage/description2'
import pricing from '~/components/LandingPage/pricing'
import ContactComponents from '~/components/LandingPage/contactComponents'
// import WhyDining from '~/components/LandingPage/WhyDining'
import Faqs from '~/components/LandingPage/Faqs'
// import VideoSection from '~/components/LandingPage/VideoSection'

export default {
  name: 'WelComePage',
  components: {
    LandingPageAboutUsComponent,
    AboutUsComponent,
    // VideoSection,
    Faqs,
    // WhyDining,
    ContactComponents,
    // introduction,
    // description1,
    // description2,
    pricing
  },
  data () {
    return {
      input: '',
      model: 0
    }
  }
}
</script>

<style scoped>

/*.gradient {
  background-image: linear-gradient(
    to right,
    #1a6225,
    #00bf2e,
    !*rgb(68, 255, 0),*! #145f1f
  );
}*/

/*Custom Scroll bar -- start */
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #098294;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-image: linear-gradient(to bottom right, #009DB5, #04526B);
}

/* Custom Scroll bar -- end */

</style>
