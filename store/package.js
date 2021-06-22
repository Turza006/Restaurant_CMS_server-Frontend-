import { getDataWithCustomHeader } from '../util/apolloApiUtil'
import { SHOW_ALL_OWNED_PACKAGE, SHOW_ALL_PACKAGE_BY_CATEGORY_ID } from '../graphql/queries/package'
import { API } from '../util/statusCode'

export const state = () => ({
  allPackageByCategory: [],
  allOwnedPackage: []
})

export const mutations = {
  SET_ALL_PACKAGE_BY_CATEGORY: (state, payload) => {
    state.allPackageByCategory = payload
  },
  SET_ALL_OWNED_PACKAGE: (state, payload) => {
    state.allOwnedPackage = payload
  }
}

export const actions = {
  requestGetAllPackageByCategoryId: async ({ commit }, {
    $apollo,
    CategoryId,
    jwt
  }) => {
    const data = await getDataWithCustomHeader($apollo, SHOW_ALL_PACKAGE_BY_CATEGORY_ID, { CategoryId }, { jwt })

    if (data.ShowAllPackageByCategoryId !== null && data.ShowAllPackageByCategoryId.code === API.SUCCESS) {
      await commit('SET_ALL_PACKAGE_BY_CATEGORY', data.ShowAllPackageByCategoryId.Packages)
      return {
        code: 'success',
        msg: data.ShowAllPackageByCategoryId.msg
      }
    } else {
      return {
        code: 'error',
        msg: 'Something went wrong please try again later'
      }
    }
  },

  requestGetAllOwnedPackage: async ({ commit }, {
    $apollo,
    jwt
  }) => {
    const data = await getDataWithCustomHeader($apollo, SHOW_ALL_OWNED_PACKAGE, { }, { jwt })

    if (data.ShowAllOwnedPackage !== null && data.ShowAllOwnedPackage.code === API.SUCCESS) {
      await commit('SET_ALL_OWNED_PACKAGE', data.ShowAllOwnedPackage.OwnedPackages)
      return {
        code: 'success',
        msg: data.ShowAllOwnedPackage.msg
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
  allPackageByCategory: ({ allPackageByCategory }) => allPackageByCategory,
  allOwnedPackage: ({ allOwnedPackage }) => allOwnedPackage
}
