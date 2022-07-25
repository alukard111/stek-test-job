import Оrganization from '../../../helpers/classes'

export default {
  ADD_FORM_ORGANIZATION(state, data) {
    const newForm = new Оrganization(data.name, data.directorName, data.phone)
    state.organizations.push(newForm)
  },

  UPDATE_VALUE_NAME_ORGANIZATION(state, newValue) {
    if (typeof newValue === 'string') {
      state.valueNameOrganization = newValue
    }
  },
  UPDATE_VALUE_DIRECTOR_NAME(state, newValue) {
    state.valueDirectorName = newValue
  },
  UPDATE_PHONE(state, newValue) {
    state.valuePhone = newValue
  },

  CLEAR_ALL_VALUE(state) {
    state.valueNameOrganization = ''
    state.valueDirectorName = ''
    state.valuePhone = ''
  },
  DELETE_ORGANIZATION(state, data) {
    const indexSplice = state.organizations.findIndex((organization) => {
      return organization.key === data.key
    })
    state.organizations.splice(indexSplice, 1)
  },

  CHANGE_PAGE_TO_NEXT (state) {
    const numberOfRecordsOrganizationsOnPage = 10
    const countPages = Math.ceil(state.lengthOrganizations / numberOfRecordsOrganizationsOnPage)
    if (state.pageNumber < countPages) {
      state.pageNumber += 1
    }
  },
  CHANGE_PAGE_TO_LAST(state) {
    const numberOfRecordsOrganizationsOnPage = 10
    if (state.lengthOrganizations > 0) {
      state.pageNumber = Math.ceil(state.lengthOrganizations / numberOfRecordsOrganizationsOnPage)
    }
  },
  CHANGE_PAGE_TO_PREV(state) {
    if (state.pageNumber > 1) {
      state.pageNumber -= 1
    }
  },
  CHANGE_PAGE_TO_FIRST(state) {
    state.pageNumber = 1
  },

  SET_FILTER_VALUE(state, newValue) {
    state.valueFilter = newValue
  },
  SET_LENGTH_ORGANIZATIONS(state, data) {
    state.lengthOrganizations = data.value.length
  },

  TOGGLE_ARROW_UP_FIRST(state){
    state.sortArrowUpDirectorName = !state.sortArrowUpDirectorName
  },
  TOGGLE_ARROW_UP_SECOND(state) {
    state.sortArrowUpOrganizationName = !state.sortArrowUpOrganizationName
  },
  FALSE_ARROW_UP_FIRST(state) {
    state.sortArrowUpDirectorName = false
  },
  FALSE_ARROW_UP_SECOND(state) {
    state.sortArrowUpOrganizationName = false
  },

  SORT_DIRECTOR_NAME(state) {
    if (state.sortArrowUpDirectorName) {
      state.organizations = [...state.organizations].sort(sortByDirectorNameArray)
    } else {
      state.organizations = [...state.organizations].sort(sortByDirectorNameArray).reverse()
    }
  },
  SORT_ORGANIZATION_NAME(state) {
    if (state.sortArrowUpOrganizationName) {
      state.organizations = [...state.organizations].sort(sortByOrganizationNameArray)
    } else {
      state.organizations = [...state.organizations].sort(sortByOrganizationNameArray).reverse()
    }
  },

  SET_ON_LOCAL_STORAGE_ORGANIZATIONS(state) {
    localStorage.setItem('organizations', JSON.stringify(state.organizations))
  },
  SET_FROM_LOCAL_STORAGE_ORGANIZATIONS(state) {
    state.organizations = JSON.parse(localStorage.getItem('organizations'))
  }
}

function sortByDirectorNameArray(x, y){
  return x.directorName.localeCompare(y.directorName);
}
function sortByOrganizationNameArray(x, y){
  return x.name.localeCompare(y.name);
}