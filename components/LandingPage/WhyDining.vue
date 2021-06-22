<template>
  <div>
    <div class="pb-16 hidden-sm-and-down" id="whyUs">
      <h1 class="display-3 text-center primary--text">What makes Dining Different?</h1>
      <p class="text-center pt-3 grey--text" style="font-size: 18px">Lorem Ipsum is simply dummy text of the printing and
        typesetting
        industry.
      </p>

      <v-row>
        <v-col class="px-5 py-10 d-flex justify-center align-center">
          <v-responsive class="px-10">
            <v-img width="auto" height="400" class="" :src="picture"></v-img>
          </v-responsive>
        </v-col>
        <v-col class="px-16 py-10">
          <div class="">
            <v-expansion-panels>
              <v-expansion-panel
                  class="" v-for="(item, index) in items" :key="index" @click="imageChange(item)"
              >
                <v-expansion-panel-header>
                  <b class="primary--text">{{ item.title }}</b>
                  <template v-slot:actions>
                    <v-icon color="primary">
                      mdi-arrow-down-drop-circle-outline
                    </v-icon>
                  </template>
                </v-expansion-panel-header>

                <v-expansion-panel-content class="grey--text py-2" style="border-top: 1px solid #eee">
                  Restaurant Management System aids restaurant proprietors and professionals with the automation of
                  administrative tasks, inventory tracking, workforce direction & monitoring and management, orders, and
                  even
                  payroll. More often than they comprise an integrated IP (POS) method, or even a good integration using a
                  POS
                  offered by means of a partner seller.
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="pb-16 hidden-md-and-up">
      <h1 class="display-1 text-center primary--text">What makes Dining Different?</h1>
      <p class="text-center pt-3 grey--text px-3" style="font-size: 16px">Lorem Ipsum is simply dummy text of the printing and
        typesetting
        industry.
      </p>

      <v-row>
        <v-col class="px-5 d-flex justify-center align-center">
          <v-responsive class="px-10">
            <v-img width="auto" height="auto" class="" :src="picture"></v-img>
          </v-responsive>
        </v-col>
        <v-col class="px-8 py-10">
          <div class="">
            <v-expansion-panels>
              <v-expansion-panel
                  class="" v-for="(item, index) in items" :key="index" @click="imageChange(item)"
              >
                <v-expansion-panel-header>
                  <b class="primary--text">{{ item.title }}</b>
                  <template v-slot:actions>
                    <v-icon color="primary">
                      mdi-arrow-down-drop-circle-outline
                    </v-icon>
                  </template>
                </v-expansion-panel-header>

                <v-expansion-panel-content class="grey--text py-2" style="border-top: 1px solid #eee">
                  Restaurant Management System aids restaurant proprietors and professionals with the automation of
                  administrative tasks, inventory tracking, workforce direction & monitoring and management, orders, and
                  even
                  payroll. More often than they comprise an integrated IP (POS) method, or even a good integration using a
                  POS
                  offered by means of a partner seller.
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhyDining",
  data() {
    return {
      picture: 'https://image.freepik.com/free-vector/communication-flat-icon_1262-18771.jpg',
      items: [
        {
          title: 'A full Restaurant Management System with POS facility',
          image: 'https://image.freepik.com/free-vector/communication-flat-icon_1262-18771.jpg'
        },
        {
          title: 'Cloud base Restaurant Management System',
          image: 'https://image.freepik.com/free-vector/team-leader-managing-project_1262-21430.jpg'
        },
        {
          title: 'Increase your sales',
          image: 'https://image.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg'
        },
        {
          title: 'Improve your Service',
          image: 'https://image.freepik.com/free-vector/recruitment-agency-applicants-job-interview_1262-18959.jpg'
        },
        {
          title: 'Easy to Handle',
          image: 'https://image.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg'
        },
        {
          title: 'User friendly',
          image: 'https://image.freepik.com/free-vector/flat-design-time-management-concept_23-2148813012.jpg'
        },
        {
          title: 'Top secure system',
          image: 'https://image.freepik.com/free-vector/managers-looking-chart-monitor_1262-19283.jpg'
        },
        {
          title: '24/7 support',
          image: 'https://image.freepik.com/free-vector/time-management-concept-illustration_114360-1013.jpg'
        },
        {
          title: 'Cost efficient',
          image: 'https://image.freepik.com/free-vector/organizing-projects-concept-illustration_114360-542.jpg'
        },
        {
          title: 'Automatic Analysis',
          image: 'https://image.freepik.com/free-vector/modern-productivity-concept-with-flat-design_23-2147972848.jpg'
        }

      ]
    }
  },
  methods: {
    imageChange(item) {
      this.picture = item.image
    }
  }
}
</script>

<style scoped>

</style>