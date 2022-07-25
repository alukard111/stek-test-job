<template>
  <div class="table__wrapper">
    <table class="table" cellspacing="0">
      <tr class="table__row">
        <th class="table__cell">
          Название
          <a 
            href="#"
            class="table__cell_arrow-down"
            :class="{ 'table__cell_arrow-up': firstColumnArrowUp }"
            @click="$emit('sortByOrganizationName')"
          >
          </a>
        </th>
        <th class="table__cell">
          ФИО директор
          <a 
            href="#"
            class="table__cell_arrow-down"
            :class="{ 'table__cell_arrow-up': secondColumnArrowUp }"
            @click="$emit('sortByDirectorName')"
          >
          </a>
        </th>
        <th class="table__cell">Номер телефона</th>
        <th class="table__cell">
        </th>
      </tr>
      <tr 
        class="table__row"
        v-for="organization in organizationsList"
        :key="organization.key"
      >
        <td class="table__cell">
          <span class="table__cell-text">
            {{ organization.name }}
          </span>
        </td>
        <td class="table__cell">
          <span class="table__cell-text">
            {{ organization.directorName }}
          </span>
        </td>
        <td class="table__cell">
          <span class="table__cell-text">
            {{ organization.phone }}
          </span>
        </td>
        <td
          @click="$emit('deleteRow', organization.key)" 
          class="table__cell"
        >
          X
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    organizationsList: {
      type: Array,
      require: false,
      default: [{
        name: 'name',
        directorName: 'directorName',
        phoneNumber: 'phoneNumber'
      }]
    },
    firstColumnArrowUp: {
      type: Boolean,
      require:false,
      default: false
    },
    secondColumnArrowUp: {
      type: Boolean,
      require:false,
      default: false
    },
  }
}
</script>

<style lang="scss" scoped>
$blueGray: rgb(57, 65, 73);
.table {
  border-style: solid;
  border-width: 1px 0px 0px 1px; 
  border-color: $blueGray;
  width: 100%;
  text-align: center;
  empty-cells: show;
  border-collapse: separate;
		&__wrapper {
      width: calc(100% - 10px);
      margin: 0 auto;
		}

		&__row {
      height: 100%;
      transition: all 1s;
		}

		&__cell {
      max-width: 150px;
      min-width: 70px;
      border-style: solid;
      border-width: 0 1px 1px 0; 
      border-color: $blueGray;
      padding: 10px;
      position: relative;
      
      &-text {
        word-wrap:break-word; 
        word-break:keep-all; 
        overflow:hidden; 
      }
      &:last-child {
        min-width: 25px;
        max-width: 30px;
        cursor: pointer;
      }
      &_arrow-down { 
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 15px solid $blueGray;
        font-size: 0;
        line-height: 0;
        position: absolute;
        right: 10px;
        top: 10px;
      }
      &_arrow-up {
        transform: rotate(180deg)
      }
		}
}

</style>