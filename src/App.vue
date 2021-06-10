<template>
    <SimonTest />
</template>

<script>
// import SimonBoxes from './components/SimonBoxes.vue'
import SimonTest from './components/SimonTest.vue'

export default {
  name: 'App',
  components: {
    // SimonBoxes,
    SimonTest,
  },
  data(){
    return{
      bufArr: [],
      isButtonDisabled: true,
    }
  },
  
}
</script>

<style lang="scss">
  // .game-blocker {
  //   width: 200px;
  //   height: 200px;
  //   z-index: 10;
  //   background-color: black;
  // }
</style>
