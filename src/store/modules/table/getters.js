export default {
  isThisFormComplited: state => {
    return Boolean(state.valueNameOrganization.length) && Boolean(state.valueDirectorName.length) && Boolean(state.valuePhone.length)
  },


  // filtred list наполняется ещё по маунту в мутации
  // проверяем еслить ли фильтрация по этому листу
  // если есть фильтрация, вызываем экшен и меняем список в мутации на фильтрованный
  // когда филтрации нет, список идет пустой
  
  // сортировка
  // сортировка есть по имени вперед и назад, так же есть сортировка по организации
  // сортировка включена по алфавиту. по развернутому алфавиту
  // сортируется тот же список что и фильтруется

  // страницы вычисляются из сортированных страниц
  getOrganizationsOnPageTable (state, getters) {
    let arr = []
    arr = getters.getFiltredOrganization || state.organizations
    
    const numberOfRecordsOrganizationsOnPage = 10
    const numberOfPages = Math.ceil(arr.length / numberOfRecordsOrganizationsOnPage)
    return arr.slice((state.pageNumber - 1) * numberOfRecordsOrganizationsOnPage , (numberOfRecordsOrganizationsOnPage * state.pageNumber))

  },
  
  isThisLastPage: state => {
    const numberOfRecordsOrganizationsOnPage = 10
    if (state.lengthOrganizations > 0) {
      const numberOfPages = Math.ceil(state.lengthOrganizations / numberOfRecordsOrganizationsOnPage)
      return numberOfPages === state.pageNumber
    } else {
      return true
    }
  },
  isThisFirstPage: state => {
    return state.pageNumber === 1
  },
  getFiltredOrganization: state => {
    if (state.valueFilter && typeof(state.valueFilter) === 'string') {
      return state.organizations.filter(organization => organization.directorName.toLowerCase().includes(state.valueFilter.toLowerCase().trim()))
    } else {
      return state.organizations
    }
  },
  sortArrayByDirectorName: state => {
    return state.organizations.sort(sortArray)
  }
}

function sortArray(x, y){
  return x.directorName.localeCompare(y.directorName);
}