<template>
  <div class="header">
    <div class="header__inner">
      <div class="header__item">
        <slot name="searchInput">

        </slot>
      </div>
      <div class="header__item">
        <BaseBtn 
          @click="$emit('click')"
          :btnDisable="false"
          :btnName="btnName"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseBtn from './Base/BaseBtn.vue'
import BaseInput from './Base/BaseInput.vue'
export default {
  components: { 
    BaseBtn,
    BaseInput
  },
  data: () => ({
    btnName: 'Добавить',
    
  }),

}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
		&__inner {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
		}
    &__item {
      margin: 5px;
    }
}

</style>