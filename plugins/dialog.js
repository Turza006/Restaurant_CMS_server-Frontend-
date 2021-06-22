import Vue from 'vue'
import VuetifyConfirm from 'vuetify-confirm'

export default ({ app }) => {
    Vue.use(
        VuetifyConfirm,
        {
                vuetify: app.vuetify,
                buttonTrueText: 'Yes',
                buttonFalseText: 'No',
                color: 'primary lighten-2',
                icon: 'mdi-information',
                title: 'Warning',
                width: 350,
                property: '$confirm'
            })
        }