<template>
  <div class="btn">
    <button 
      class="btn__base"
      :class="{
        'btn__base_disable': btnDisable 
      }"
      @click="$emit('click')"
    >
      {{ btnName }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    btnName: {
      type: String,
      require: false,
      default: 'Button'
    },
    btnDisable: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  data: () => ({

  })
}
</script>


<style lang="scss" scoped>
// color
$white: rgb(255, 255, 255);
$blueGray: rgb(57, 65, 73);
$blue: rgb(48, 71, 94);
.btn {
  text-align: center;
  width: 150px;
  margin: 0 auto;
  &__base {
    background: $white;
    border: $blueGray 1px solid;
    border-radius: 4px;
    padding: 10px;
    outline: none;
    cursor: pointer;

    width: 100%;
    min-width: 100px;
    transition: background 0.2s ease;
    
    &:hover {
      color: $white;
      background: $blueGray;
    }
    &:active {
      color: $white;
      background: $blue;
    }

    &_disable:before {
      background: gray;
      opacity: 0.5;
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
    }
    &_disable {
      position: relative;
      z-index: -1;
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none;   /* Chrome/Safari/Opera */
      -khtml-user-select: none;    /* Konqueror */
      -moz-user-select: none;      /* Firefox */
      -ms-user-select: none;       /* Internet Explorer/Edge */
      user-select: none; 
    }
  }
}

</style>