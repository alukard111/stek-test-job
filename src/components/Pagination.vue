<template>
  <div class="pagination__wrapper">
    <!-- cтрелки стрелки название номер страницы,
     быстрая перемотка -->
    <div class="pagination__navigation">
      <div 
        v-if="!firstPage"
        class="pagination__arrow-left pagination__arrow-dubble"
        @click="$emit('firstPage')"
      >
      </div>
      <div 
        v-if="!firstPage"
        class="pagination__arrow-left"
        @click="$emit('prevPage')"
      >
      </div>
      <!-- name page and number -->
      <div class="pagination__name">
        <span class="pagination__text">
          Страница {{ pageNumber }}
        </span>
      </div>
      <div 
        v-if="!lastPage"
        class="pagination__arrow-right"
          @click="$emit('nextPage')"
      ></div>
      <div 
        v-if="!lastPage"
        class="pagination__arrow-right pagination__arrow-dubble"
          @click="$emit('lastPage')"
      >
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    pageNumber: {
      type: Number,
      require: false,
      default: 1
    },
    firstPage: {
      type: Boolean,
      require: false,
      default: true
    },
    lastPage: {
      type: Boolean,
      require: false,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  &__wrapper {
    width: 100%;
    min-width: 250px; 
  }
  &__navigation {
    display: flex;
    justify-content: center;
  }

  &__arrow-left {
    width: 15px;
    height: 15px;
    border-style: solid;
    border-left: 1px;
    border-top: 1px;
    border-color: black;
    transform: rotate(135deg);
    margin: 0 5px;
    cursor: pointer;
  }

  &__arrow-dubble:before {
    content: '';
    width: 15px;
    height: 15px;
    border-style: solid;
    border-left: 1px;
    border-top: 1px;
    border-color: black;
    margin: -5px;
    display: block;
    position: absolute;
    top: 10px;
    left: 10px;

  }

  &__arrow-right {
    width: 15px;
    height: 15px;
    border-style: solid;
    border-left: 1px;
    border-top: 1px;
    border-color: black;
    transform: rotate(-45deg);
    margin: 5px;
    margin: 0 5px;
    cursor: pointer;
  }
}

</style>