export default {
  createForm({ commit }, data) {
    commit({
      type: 'ADD_FORM_ORGANIZATION',
      name: data.name,
      directorName: data.directorName,
      phone: data.phone
    })
  },
  clearForm({ commit }) {
    commit('CLEAR_ALL_VALUE')
  },
  // изменить на key вместо index`a
  deleteOrganizationFromState({ commit }, key) {
    commit({
      type: 'DELETE_ORGANIZATION',
      key: key
    })
  },
  nextPageTable({ commit }) {
    commit('CHANGE_PAGE_TO_NEXT')
  },
  prevPageTable({ commit }) {
    commit('CHANGE_PAGE_TO_PREV')
  },
  lastPageTable({ commit }) {
    commit('CHANGE_PAGE_TO_LAST')
  },
  firstPageTable({ commit }) {
    commit('CHANGE_PAGE_TO_FIRST')
  },
  setLengthOrganizationsList({ commit }, value) {
    commit({
      type: 'SET_LENGTH_ORGANIZATIONS',
      value: value
    })
  },

  sortByDirectorName({ commit }) {
    commit('TOGGLE_ARROW_UP_FIRST')
    commit('FALSE_ARROW_UP_SECOND')
    commit('SORT_DIRECTOR_NAME')
  },
  sortByOrganizatonName({ commit }) {
    commit('TOGGLE_ARROW_UP_SECOND')
    commit('FALSE_ARROW_UP_FIRST')
    commit('SORT_ORGANIZATION_NAME')
  },

  setOrganizationLocalStorage({ commit }) {
    commit('SET_ON_LOCAL_STORAGE_ORGANIZATIONS')
  },
  setOrganizationFromLocalStorage({ commit }) {
    commit('SET_FROM_LOCAL_STORAGE_ORGANIZATIONS')
  }
}