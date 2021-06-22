<template>
  <div>
    <v-navigation-drawer v-model="dialog" app right temporary :width="`${$vuetify.breakpoint.mobile ? '80%' : '360px'}`">
      <div class=" ma-5">
        <span class="body-1 font-weight-bold">
          Cart
          <span>
            ({{ cart === null ? 0 : 1 }})
          </span>
        </span>
        <v-btn icon class="float-right" style="margin-top: -6px" @click="drawer=!drawer">
          <v-icon class="black--text" @click="dialog = !dialog">
            mdi-close
          </v-icon>
        </v-btn>
      </div>
      <v-divider class="mx-5" />
      <div v-if="cart !== null" class="px-5 pt-5 pb-0">
        <label>Duration :</label>
        <v-select
          v-model="defaultSelected"
          :items="select"
          class="mt-2"
          placeholder="1 month"
          outlined
          dense
        >
          <template #selection="{ item, index }">
            <span v-if="index === 0"> {{ item.time }} </span>
            <span
              v-if="index === 0"
              class="grey--text caption ml-2"
            >
              (save {{ item.saving }} %)
            </span>
          </template>
          <template #item="{ item, index }">
            <span class="black--text">
              {{ item.time }}
              <span class="pl-1 caption">(save {{ item.saving }} %)</span>
            </span>
          </template>
        </v-select>
      </div>
      <div>
        <div v-if="cart === null">
          <p class="mx-5 mt-8 mb-0 text-center">
            There is no item in your cart
          </p>
          <div class="text-center">
            <a
              :href="link"
              class="primary--text text-decoration-underline"
              @click="goToPackages()"
              @click.stop="$vuetify.goTo('#packages',option)"
            >Go to packages</a>
          </div>
        </div>

        <v-card v-if="cart !== null" flat style="border:1px solid #ddd" class="ma-5 mt-0">
          <v-card-title>
            <span class="subtitle-1 font-weight-bold">
              {{ cart.packageName }}
            </span>
            <v-spacer />
            <span>
              <v-btn icon @click="deleteItem()">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </span>
          </v-card-title>
          <v-card-subtitle />
          <v-card-text class="pb-0">
            Subtotal (For one month):
            <span class="float-right font-weight-bold">
              {{ cart.packagePrice }} BDT
            </span>
          </v-card-text>
          <v-card-text class="pb-0">
            Duration in months:
            <span class="float-right font-weight-bold">
              {{ defaultSelected.month }} month
            </span>
          </v-card-text>
          <v-card-text class="pb-0">
            Total:
            <span class="float-right font-weight-bold">
              {{ cart.packagePrice * defaultSelected.month }} BDT
            </span>
          </v-card-text>
          <v-card-text class="pb-0">
            VAT ({{ vat }} %) :
            <span class="float-right font-weight-bold">
              {{ vatAmount }} BDT
            </span>
          </v-card-text>
          <v-card-text>
            Discount ({{ defaultSelected.saving }} %) :
            <span class="float-right font-weight-bold">
              {{ discountAmount }} BDT
            </span>
          </v-card-text>
        </v-card>
      </div>
      <div v-if="cart !== null" class="ma-5">
        <p class="primary--text font-weight-bold">
          Grand Total :
          <span class="float-right">
            {{ grandTotal }} BDT
          </span>
        </p>
        <v-btn
          v-if="cart !== null"
          block
          class="primary white--text mt-2"
          @click="goToCheckOut(item)"
        >
          <v-icon class="pr-1">
            mdi-cart
          </v-icon>
          Checkout
        </v-btn>

        <!--        <div v-for="(n, index) in cart" :key="index">
                  <p>{{ n }}</p>
                </div>-->
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { VAT } from '../../util/defaultValues'

export default {
  name: 'CartDrawer',
  data () {
    return {
      link: '',
      setCheckOut: [],
      vat: VAT,
      dialog: false,
      deleting: false,
      discount: 0,
      item: 1,
      discountAmount: 0,
      vatAmount: 0,
      initialDuration: { time: '1 month', saving: 0, month: 1 },
      defaultSelected: { time: '1 month', saving: 0, month: 1 },
      total: 0,
      // For UI
      drawer: false,
      select: [
        { time: '1 month', saving: 0, month: 1 },
        { time: '6 month', saving: 2, month: 6 },
        { time: '1 Year', saving: 4, month: 12 },
        { time: '2 Year', saving: 8, month: 24 }
      ],
      option: {
        duration: 1000,
        offset: 80,
        easing: 'linear'
      }
    }
  },
  watch: {
    async defaultSelected (newValue) {
      await this.$store.commit('cart/SET_SELECTED_DURATION', newValue)
    }
  },
  computed: {
    ...mapGetters('cart', ['cart', 'selectedDuration']),
    grandTotal () {
      const subtotal = this.cart.packagePrice * this.defaultSelected.month

      this.discountAmount = subtotal * (this.defaultSelected.saving / 100)
      this.vatAmount = subtotal * (this.vat / 100)
      this.total = (subtotal + this.vatAmount) - this.discountAmount

      console.log(this.total)
      return this.total
    }
  },
  created () {
    this.$nuxt.$on('toggleCart', () => {
      this.dialog = !this.dialog
    })
    this.$nuxt.$on('resetDefaultDuration', () => {
      this.defaultSelected = this.initialDuration
    })
  },
  methods: {
    goToPackages () {
      this.$nuxt.$emit('toggleCart')
      this.link = '#packages'
    },
    async deleteItem () {
      this.defaultSelected = this.initialDuration
      await this.$store.commit('cart/RESET_CART')
    },
    async goToCheckOut () {
      await this.$router.push('/cartPage')
    }
  }
}
</script>

<style scoped>
</style>
