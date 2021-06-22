<template>
  <div class="dashboard pa-16">
      <v-card tile class="mt-16">
        <h3 class="pa-3 primary white--text">
          Owned Packages
        </h3>
      </v-card>
      <v-skeleton-loader
        v-if="loading"
        class="mx-auto"
        max-height="280"
        type="card"
      />
      <v-card
        class="grey lighten-3"
        tile
        flat
      >
        <v-simple-table>
          <template #default>
            <thead>
              <tr>
                <th class="text-left py-6">
                  Package Name
                </th>
                <th class="text-left">
                  Package Price
                </th>
                <th class="text-left">
                  Started At
                </th>
                <th class="text-left">
                  Created At
                </th>
                <th class="text-left">
                  Updated At
                </th>
                <th class="text-left">
                  Status
                </th>
                <th class="text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in allOwnedPackage"
                :key="index"
              >
                <td class="py-5">{{ item.package.packageName }}</td>
                <td>{{ item.package.packagePrice }}</td>
                <td>{{ item.startedFrom < 0 ? item.startedFrom : 'No Started' }}</td>
                <td>
                  <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                      <span
                        v-bind="attrs"
                        v-on="on"
                      >
                        {{ item.createdAt | _timeAgoFromMillis }}
                      </span>
                    </template>
                    <span class="">{{ item.createdAt | _milliToDate }}</span>
                  </v-tooltip>
                </td>
                <td>
                  <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                      <span
                        v-bind="attrs"
                        v-on="on"
                      >
                        {{ item.updatedAt | _timeAgoFromMillis }}
                      </span>
                    </template>
                    <span class="">{{ item.updatedAt | _milliToDate }}</span>
                  </v-tooltip>
                </td>
                <td>
                  <v-chip small color="info">
                    {{ item.status }}
                  </v-chip>
                </td>
                <td>
                  <div>
                    <v-btn v-if="item.restaurant === null || item.restaurant.length === 0" x-small color="success" :disabled="item.status === 'PENDING'" :to="`/create-restaurant/${item._id}`">
                      Create Restaurant
                    </v-btn>
                    <v-btn
                      v-if="item.restaurant !== null && item.restaurant.length > 0"
                      x-small
                      color="info"
                      link
                      :href="`${diningAdminPanelUrl}?id=${item._id}`"
                      target="_blank"
                    >
                      Go to Admin Panel
                    </v-btn>
                    <v-btn
                      v-if="item.restaurant !== null && item.restaurant.length > 0"
                      x-small
                      class="my-2"
                      color="info"
                      link
                      :href="diningWebUrl"
                      target="_blank"
                    >
                      Go to Restaurant Website
                    </v-btn>
                  </div>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--        <v-row>
          <v-col class="pa-2">
            <b class="font-weight-bold primary&#45;&#45;text">Package Name </b>
            <div class="mt-5">
              {{ item.package.packageName }}
            </div>
          </v-col>
          <v-col class="text-center">
            <span v-if="item.restaurant !== null && item.restaurant.length > 0" class="font-weight-bold px-1">{{ item.restaurant[0].name }}</span>
            <span v-else class="caption">Restaurant not Created yet.</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center">
            <v-row>
              <v-col class="pa-2">
                <b class="font-weight-bold primary&#45;&#45;text">Package Name </b>
                <div class="mt-5">
                  {{ item.package.packageName }}
                </div>
              </v-col>
              <v-col class="text-center pa-2">
                <b class="primary&#45;&#45;text">Package Price </b>
                <div class="mt-5">
                  {{ item.package.packagePrice }}
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-row>
              <v-col class="pa-2">
                <b class="primary&#45;&#45;text">Started At</b>
                <div class="mt-5">
                  {{ item.startedFrom < 0 ? item.startedFrom : 'No Started' }}
                </div>
              </v-col>

              <v-col class="mr-3 pa-2">
                <b class="primary&#45;&#45;text">Created At</b>
                <div class="mt-5">
                  <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                      <span
                        v-bind="attrs"
                        v-on="on"
                      >
                        {{ item.createdAt | _timeAgoFromMillis }}
                      </span>
                    </template>
                    <span class="">{{ item.createdAt | _milliToDate }}</span>
                  </v-tooltip>
                </div>
              </v-col>
              <v-col class="pa-2">
                <b class="primary&#45;&#45;text">Updated At</b>
                <div class="mt-5">
                  <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                      <span
                        v-bind="attrs"
                        v-on="on"
                      >
                        {{ item.updatedAt | _timeAgoFromMillis }}
                      </span>
                    </template>
                    <span class="">{{ item.updatedAt | _milliToDate }}</span>
                  </v-tooltip>
                </div>
              </v-col>
              <v-col class="pa-2">
                <b class="primary&#45;&#45;text">Status</b>
                <v-chip small color="info">
                  {{ item.status }}
                </v-chip>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="text-left">
            <div class="">
              <b class="primary&#45;&#45;text">Action</b>
              <div>
                <v-btn v-if="item.restaurant === null || item.restaurant.length === 0" x-small color="success" :disabled="item.status === 'PENDING'" :to="`/create-restaurant/${item._id}`">
                  Create Restaurant
                </v-btn>
                <v-btn
                  v-if="item.restaurant !== null && item.restaurant.length > 0"
                  x-small
                  color="info"
                  link
                  :href="`${diningAdminPanelUrl}?id=${item._id}`"
                  target="_blank"
                >
                  Go to Admin Panel
                </v-btn>
                <v-btn
                  v-if="item.restaurant !== null && item.restaurant.length > 0"
                  x-small
                  class="my-2"
                  color="info"
                  link
                  :href="diningWebUrl"
                  target="_blank"
                >
                  Go to Restaurant Website
                </v-btn>
              </div>
              &lt;!&ndash;              <div>
                <v-btn x-small color="info">
                  Details
                </v-btn>
                <v-btn x-small color="error">
                  Renew
                </v-btn>
              </div>&ndash;&gt;
            </div>
          </v-col>
        </v-row>-->
      </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DateConverterMixin from '../../mixins/DateConverterMixin'

export default {
  name: 'PageMyPurchase',
  mixins: [DateConverterMixin],
  middleware: ['authenticated'],
  data () {
    return {
      loading: false,
      diningAdminPanelUrl: process.env.DINING_ADMIN_PANEL_URL,
      diningWebUrl: process.env.DINING_WEB_URL
    }
  },
  computed: {
    ...mapGetters('auth', ['jwt']),
    ...mapGetters('package', ['allOwnedPackage'])
  },
  async created () {
    this.loading = true
    await this.requestGetAllOwnedPackage({ $apollo: this.$apollo, jwt: this.jwt })
    this.loading = false
  },
  methods: {
    ...mapActions('package', ['requestGetAllOwnedPackage'])
  }
}
</script>

<style scoped>

</style>
