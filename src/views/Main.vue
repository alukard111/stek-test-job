<template>
  <div class="main">
    <div class="main__conteiner">
      <!-- header -->
      <header>
        <Header 
          @click="openAddOrganizationWindow()"
        >
          <template v-slot:searchInput>
            <BaseInput 
              :placeholder="placeholderSearch"
              :type="inputTypeSearch"
              v-model="searchInputValue"
            />
          </template>
        </Header>
      </header>
      <!-- main -->
      <div class="main__content">
        <Table
          :organizationsList="getOrganizationsOnPageTable"
          :firstColumnArrowUp="!sortArrowUpOrganizationName"
          :secondColumnArrowUp="!sortArrowUpDirectorName"
          @deleteRow="deleteOrganization"
          @sortByDirectorName="sortByDirectorName"
          @sortByOrganizationName="sortByOrganizatonName"
        />
      </div>
      <!-- modal -->
      <div 
        class="main__modal-window"
        v-if="isOpenModalWindow"
      >
        <ModalWindow
          @click="closeOrganizationWindow()"
          @closeModalWindow="closeOrganizationWindow()"
          @addForm="addFormOrganization()"
          :isFormComplited="!isThisFormComplited"
        >
          <template v-slot:slotInputOne>
             <BaseInput
              :type="typeOrg"
              :placeholder="placeholderOrg"
              v-model="organizationInput"
            />
          </template>
          <template v-slot:slotInputTwo>
             <BaseInput
              :type="typePhone"
              :placeholder="placeholderPhone"
              v-model="phoneInput"
            />
          </template>
          <template v-slot:slotInputThree>
             <BaseInput
              :type="typeOrg"
              :placeholder="placeholderOrg"
              v-model="directorNameInput"
            />
          </template>
        </ModalWindow>
      </div>
      <!-- footer -->
      <footer>
        <Footer 
          @firstPage="firstPageTable"
          @prevPage="prevPageTable"
          @nextPage="nextPageTable"
          @lastPage="lastPageTable"
          :firstPage="isThisFirstPage"
          :lastPage="isThisLastPage"
          :pageNumber="pageNumber"
        />
      </footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ModalWindow from '@/components/ModalWindow.vue'
import Table from '../components/Table.vue'

import BaseBtn from '@/components/Base/BaseBtn.vue'
import BaseInput from '../components/Base/BaseInput.vue'

import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    BaseBtn,
    ModalWindow,
    Table,
    BaseInput
},
  data: () => ({
    isOpenModalWindow: false,

    placeholderOrg: 'Огранизация',
    placeholderDirector: 'Имя директора',
    placeholderPhone: 'Номер телефона',
    typeOrg: 'text',
    typeDirector: 'text',
    typePhone: 'tel',
    valueOrg: '',
    valueDirector: '',
    valuePhote: '',

    placeholderSearch: 'Найти по ФИО',
    valueSearch: '',
    inputTypeSearch: 'text'
  }),
  mounted() {
    this.setOrganizationFromLocalStorage()
    this.setLengthOrganizationsList(this.getFiltredOrganization)
    this.setOrganizationLocalStorage()
  },
  updated() {
    this.setLengthOrganizationsList(this.getFiltredOrganization)
    // this.setOrganizationLocalStorage()
  },
  computed: {
    ...mapGetters('table', {
      isThisFormComplited: 'isThisFormComplited',
      getOrganizationsOnPageTable: 'getOrganizationsOnPageTable',
      isThisLastPage: 'isThisLastPage',
      isThisFirstPage: 'isThisFirstPage',
      sortArrayByDirectorName: 'sortArrayByDirectorName',
      getFiltredOrganization: 'getFiltredOrganization'
    }),
    ...mapState('table', {
      valueNameOrg: 'valueNameOrganization',
      valueDirectorName: 'valueDirectorName',
      valuePhone: 'valuePhone',
      valueSearchFilter: 'valueFilter',

      pageNumber: 'pageNumber',

      sortDirectorName: 'sortDirectorName',
      sortOrganizationName: 'sortOrganizationName',
      sortArrowUpOrganizationName: 'sortArrowUpOrganizationName',
      sortArrowUpDirectorName: 'sortArrowUpDirectorName',
    }),
    organizationInput: {
      get () {
        return this.valueNameOrg
      },
      set (value) {
        this.setNameOrganizationForm(value)
      }
    },
    directorNameInput: {
      get () {
        return this.valueDirectorName
      },
      set (value) {
        this.setDirectorNameForm(value)
      }
    },
    phoneInput: {
      get () {
        return this.valuePhone
      },
      set (value) {
        this.setPhoneForm(value)
      }
    },
    searchInputValue: {
      get () {
        return this.valueSearchFilter
      },
      set (value) {
        this.setFilterValue(value)
      }
    }
  },

  methods: {
    ...mapMutations('table', {
      setNameOrganizationForm: 'UPDATE_VALUE_NAME_ORGANIZATION',
      setDirectorNameForm: 'UPDATE_VALUE_DIRECTOR_NAME',
      setPhoneForm: 'UPDATE_PHONE',
      setFilterValue: 'SET_FILTER_VALUE'
    }),
    ...mapActions('table',{
      createForm: 'createForm',
      clearForm: 'clearForm',

      deleteOrganizationFromState: 'deleteOrganizationFromState',
      
      nextPageTable:  'nextPageTable',
      prevPageTable:  'prevPageTable',
      lastPageTable: 'lastPageTable',
      firstPageTable:  'firstPageTable',
      // добавим запись количества объектов массива на основе фильтра
      setLengthOrganizationsList: 'setLengthOrganizationsList',

      sortByDirectorName: 'sortByDirectorName',
      sortByOrganizatonName: 'sortByOrganizatonName',
      setOrganizationFromLocalStorage: 'setOrganizationFromLocalStorage',
      setOrganizationLocalStorage: 'setOrganizationLocalStorage'
    }),
    openAddOrganizationWindow() {
      this.isOpenModalWindow = true
    },
    closeOrganizationWindow() {
      this.isOpenModalWindow = false
      this.clearForm()
    },
    addFormOrganization() {
      this.createForm({
        name:  this.valueNameOrg,
        directorName:  this.valueDirectorName,
        phone: this.valuePhone
      })
      this.setOrganizationLocalStorage()
      this.closeOrganizationWindow()
    },
    deleteOrganization(index) {
      this.deleteOrganizationFromState(index)
      this.setOrganizationLocalStorage()
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  &__conteiner {
    width: 100%;
    max-width: 780px;
    height: 650px; 
    max-height: 80%;
  }
  &__content {
    margin: 10px 0px;
    width: 100%;
    height: 80%;
  }
}
</style>