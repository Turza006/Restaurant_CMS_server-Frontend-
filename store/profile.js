// eslint-disable-next-line import/named
import { OWNER_CHANGE_PASSWORD, OWNER_SELF, OWNER_PROFILE_EDIT } from '../graphql/queries/profile'
import { getDataWithCustomHeader, getMutationDataWithCustomHeader } from '../util/apolloApiUtil'
import { TOAST } from '../util/strings'
import { API } from '../util/statusCode'

export const state = () => ({
  ownerInfo: {}
})

export const mutations = {
  SET_OWNER_PROFILE_DATA: (state, payload) => {
    state.ownerInfo = payload
  }
}

export const actions = {
  requestGetOwnerProfile: async ({ commit }, {
    $apollo,
    jwt
  }) => {
    const data = await getDataWithCustomHeader($apollo, OWNER_SELF, {}, { jwt })
    if (data.OwnerSelf !== null && data.OwnerSelf.code === API.SUCCESS) {
      await commit('SET_OWNER_PROFILE_DATA', data.OwnerSelf)
      return {
        code: API.SUCCESS,
        msg: data.OwnerSelf.msg
      }
    } else {
      return {
        code: API.ERROR,
        msg: TOAST.SOMETHING_WENT_WRONG_PLEASE_TRY_AGAIN_LATER
      }
    }
  },
  requestEditOwnerProfile: async ({ commit }, {
    $apollo,
    ownerId,
    payload,
    jwt
  }) => {
    const { data } = await getMutationDataWithCustomHeader($apollo, OWNER_PROFILE_EDIT, { ownerId, payload }, { jwt })
    if (data.OwnerProfileEdit !== null && data.OwnerProfileEdit.code === API.SUCCESS) {
      return {
        code: API.SUCCESS,
        msg: data.OwnerProfileEdit.msg
      }
    } else {
      return {
        code: API.ERROR,
        msg: TOAST.SOMETHING_WENT_WRONG_PLEASE_TRY_AGAIN_LATER
      }
    }
  },
  requestOwnerChangePassword: async ({ commit }, {
    $apollo,
    oldPassword,
    newPassword,
    jwt
  }) => {
    const { data } = await getMutationDataWithCustomHeader($apollo, OWNER_CHANGE_PASSWORD, { oldPassword, newPassword }, { jwt })
    if (data.OwnerChangePassword !== null && data.OwnerChangePassword.code === API.SUCCESS) {
      return {
        code: API.SUCCESS,
        msg: data.OwnerChangePassword.msg
      }
    } else {
      return {
        code: API.ERROR,
        msg: TOAST.SOMETHING_WENT_WRONG_PLEASE_TRY_AGAIN_LATER
      }
    }
  }
}

export const getters = {
  ownerInfo: ({ ownerInfo }) => ownerInfo
}
