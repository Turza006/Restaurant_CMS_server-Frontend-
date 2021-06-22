export const state = () => ({
  isAuthenticated: false,
  user: {},
  verifyToken: '',
  resetPassUser: null
})

export const mutations = {
  SET_USER_DATA: (state, userData) => {
    state.isAuthenticated = !!userData.jwt
    state.user = userData
    state.resetPassUser = null
  },
  SET_VERIFY_TOKEN: (state, jwt) => {
    state.verifyToken = jwt
  },
  REMOVE_RESET_PASS_USER: (state) => {
    state.resetPassUser = null
  },
  LOGOUT_USER: (state) => {
    state.isAuthenticated = false
    state.user = {}
    state.verifyToken = ''
    state.resetPassUser = null
  }
}

export const actions = {
  requestPerformLogout: async ({ commit }) => {
    await commit('LOGOUT_USER')
  }
}

export const getters = {
  user: ({ user }) => user,
  jwt: ({ user }) => `Bearer ${user.jwt}`,
  isAuthenticated: ({ isAuthenticated }) => isAuthenticated
}
