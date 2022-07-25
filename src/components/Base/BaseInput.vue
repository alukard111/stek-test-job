<template>
  <div class="input">
    <input 
      class="input__base"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      require: false,
      default: 'input'
    },
    value: {
      type: String,
      require: false,
      default: ''
    },
    type: {
      type: String,
      require: false,
      default: 'text'
    }
  }
}
</script>

<style lang="scss" scoped>
$blueGray: rgb(57, 65, 73);
$white: rgb(255, 255, 255);
$blue: rgb(48, 71, 94);
$opacityGray: rgba(210, 221, 247, 0.521);
.input {
  width: 200px;
  margin: 0 auto;
		&__base {
      border: $blueGray 1px solid;
      border-radius: 4px;
      padding: 10px;
      outline: none;

      width: 100%;
      min-width: 100px;
      transition: background 0.2s ease;
      &:focus::placeholder {
        color: $opacityGray;
      }
      &:focus {
        color: $white;
        background: $blue;
      }
		}
}

</style>