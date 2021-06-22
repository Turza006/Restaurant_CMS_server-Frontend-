import { CREATE_RESTAURANT } from '@/graphql/mutations/restaurant'
import { API } from '@/util/statusCode'
import { getMutationDataWithCustomHeader } from '@/util/apolloApiUtil'

export const actions = {
  requestCreateRestaurant: async ({ commit }, { $apollo, payload, jwt }) => {
    try {
      const { data } = await getMutationDataWithCustomHeader($apollo, CREATE_RESTAURANT, { payload }, { jwt })
      if (data.CreateRestaurant !== null) {
        if (data.CreateRestaurant.code === API.CREATED) {
          return {
            msg: data.CreateRestaurant.msg,
            code: 'success',
            restaurantId: data.CreateRestaurant.restaurantId
          }
        } else {
          return {
            msg: data.CreateRestaurant.msg,
            code: 'error'
          }
        }
      } else {
        return {
          msg: 'Something went wrong, please try again later.',
          code: 'error'
        }
      }
    } catch (err) {
      return {
        msg: err.message,
        code: 'error'
      }
    }
  }
}
