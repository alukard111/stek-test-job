<template>
  <div class="modal-window" >
    <div class="modal-window__inner">
      <div 
        class="modal-window__closer"
        @click="$emit('closeModalWindow')"
      >
      </div>
      <div class="modal-window__components">
        <div class="modal-window__title">
          <h3 class="modal-window__title-text">Добавить организацию</h3>
        </div>
        <div class="modal-window__inputs">
          <div class="modal-window__input">
            <!-- rename slots -->
            <slot name="slotInputOne"></slot>
          </div>
          <div class="modal-window__input">
            <slot name="slotInputTwo"></slot>
          </div>
          <div class="modal-window__input">
            <slot name="slotInputThree"></slot>
          </div>
        </div>
        <div class="modal-window__btns">
          <div class="modal-window__btn">
            <BaseBtn
              @click="$emit('click')"
              :btnName="btnNameCancel"
            />
          </div>
          <div class="modal-window__btn">
            <BaseBtn
              :btnName="btnNameAddCard"
              :btnDisable="isFormComplited"
              @click="$emit('addForm')"
            />
          </div>
        </div>
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
  props: {
    isFormComplited: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  data: () => ({
    placeholderOrg: 'Огранизация',
    placeholderDirector: 'Имя директора',
    placeholderPhone: 'Номер телефона',
    typeOrg: 'text',
    typeDirector: 'text',
    typePhone: 'tel',
    valueOrg: '',
    valueDirector: '',
    valuePhote: '',

    btnNameCancel: 'Отмена',
    btnNameAddCard: 'Добавить запись',
    btnDisable: true
  }),
}
</script>

<style lang="scss" scoped>
$opacityGray: rgba(210, 221, 247, 0.521);
$blue: rgb(48, 71, 94);
$white: rgb(255, 255, 255);
.modal-window {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  background: $opacityGray;
    &__inner {
      width: 100%;
      height: 100%;
      position: relative;
    }
		&__closer {
      width: 100%;
      height: 100%;
		}

		&__components {
      border: $blue 2px solid;
      width: 100%;
      max-width: 310px;
      height: 100%;
      max-height: 350px;
      background: $white;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);

      display: flex;
      flex-direction: column;
		}

    &__input {
      margin: 5px;
    }
		&__inputs {
      margin: auto;
		}

    &__btn {
      width: 45%;
      margin: 0 auto;
      display: flex;
    }

		&__btns {
      margin: auto;
      display: flex;
      justify-content: space-around;
      width: 100%;
		}
    &__title {
      border-bottom: $blue 2px solid;
      &-text {

      }      
    }
}

</style>