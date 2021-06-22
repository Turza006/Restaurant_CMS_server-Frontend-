import { ALL_SERVICE_BY_CATEGORY } from '../graphql/queries/service'
import { API } from '../util/statusCode'
import { getDataWithCustomHeader } from '../util/apolloApiUtil'

export const state = () => ({
  allService: {
    Services: []
  }
})

export const mutations = {
  SET_ALL_SERVICE: (state, payload) => {
    state.allService = payload
  }
}

export const actions = {
  requestGetAllServiceByCategoryId: async ({ commit }, {
    $apollo,
    CategoryId,
    jwt
  }) => {
    const data = await getDataWithCustomHeader($apollo, ALL_SERVICE_BY_CATEGORY, { CategoryId }, { jwt })
    if (data.AllServiceByCategory !== null && data.AllServiceByCategory.code === API.SUCCESS) {
      await commit('SET_ALL_SERVICE', data.AllServiceByCategory)
      return {
        code: 'success',
        msg: data.AllServiceByCategory.msg
      }
    } else {
      return {
        code: 'error',
        msg: 'Something went wrong please try again later'
      }
    }
  }
}

export const getters = {
  allService: ({ allService }) => allService
}
