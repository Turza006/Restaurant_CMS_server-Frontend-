import {getMutationDataWithCustomHeader} from "../util/apolloApiUtil";
import {UPLOAD_IMAGE_MUTATION} from "../graphql/mutations";

export const state = {
  singleUploadImageLink: ''
}

export const mutations = {
  SET_SINGLE_UPLOAD_IMAGE_LINK: (state, payload) => {
    state.singleUploadImageLink = payload.imageLink
  },
  UNSET_SINGLE_UPLOAD_IMAGE_LINK: (state) => {
    state.singleUploadImageLink = ''
  }
}

export const actions = {
  singleUpload: async ({ commit }, { $apollo, file, jwt }) => {
    // console.log('queryVariables=', { file })
    try {
      const { data } = await getMutationDataWithCustomHeader($apollo, UPLOAD_IMAGE_MUTATION, { file }, { jwt })

      await commit('SET_SINGLE_UPLOAD_IMAGE_LINK', { imageLink: data.SingleUpload.imageLink })
      return true
    } catch (err) {
      // console.log('singleUpload---error', err)
      return false
    }
  }
}

export const getters = {
  singleUploadImageLink: ({ singleUploadImageLink }) => singleUploadImageLink
}
