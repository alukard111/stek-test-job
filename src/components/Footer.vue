<template>
  <div class="footer__inner">
    <div class="footer__pagination">
      <Pagination
        @firstPage="$emit('firstPage')"
        @prevPage="$emit('prevPage')"
        @nextPage="$emit('nextPage')"
        @lastPage="$emit('lastPage')"
        :firstPage="firstPage"
        :lastPage="lastPage"
        :pageNumber="pageNumber"
      />
    </div>
  </div>
</template>

<script>
import Pagination from './Pagination.vue'
export default {
  components: {
    Pagination
  },
  props: {
    firstPage: {
      type: Boolean,
      require: false,
      default: false,
    },
    lastPage: {
      type: Boolean,
      require: false,
      default: true
    },
    pageNumber: {
      type: Number,
      require: false,
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  &__inner {
    width: 100%;
    height: 100%;
    min-height: 50px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  &__pagination {
  }
}

</style>