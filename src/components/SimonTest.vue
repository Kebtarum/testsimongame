<template>
  <div class="simonboxes">
    <div class="simonboxes__items">
      <div @click="clickBlue()" :class="[buttonLight[0] ? 'lightblue' : 'blue', 'simonboxes__item' ]"></div>
      <div @click="clickRed()" :class="[buttonLight[1] ? 'lightred' : 'red', 'simonboxes__item' ]"></div>
      <div @click="clickYellow()" :class="[buttonLight[2] ? 'lightyellow' : 'yellow', 'simonboxes__item' ]"></div>
      <div @click="clickGreen()" :class="[buttonLight[3] ? 'lightgreen' : 'green', 'simonboxes__item' ]"></div>
    </div>
    <div class="simonboxes__aside">
      <div class="simonboxes__aside-item">
        <h3>Turn</h3>
        <span class="simonboxes__counter">{{counter}}</span>
      </div>
      <select :disabled="blockSelect" v-model="difficulty" class="simonboxes__aside-item simonboxes__select">
        <option value="1500">1.5 sec</option>
        <option value="1000">1 sec</option>
        <option value="400">0.4 sec</option>
      </select>
      <button class="simonboxes__aside-item simonboxes__startbtn" @click="startGame()">Start</button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'SimonTest',
  props: {
    
  },
  data(){
    return{
      win: false,
      order: [],
      playerOrder: [],
      flash: 0,
      turn: 0,
      good: false,
      compTurn: false,
      intervalId: false,
      noise: true,
      on: false,
      buttonLight: [false,false,false,false],
      counter: 0,
      difficulty: 1500,
      blockSelect: false,
      // currentDiff: 1500,

      // isButtonBlueDisabled: true,
      // isButtonRedDisabled: true,
      // isButtonYellowDisabled: true,
      // isButtonGreenDisabled: true,
      // i: 0
    }
  },
  methods: {
        startGame(){
          clearInterval(this.intervalId);
          this.clearColor();
          this.win = false;
          this.order = [];
          this.playerOrder = [];
          this.flash = 0;
          this.intervalId = 0;
          this.turn = 1;
          this.counter = 1;
          this.good = true;
          this.blockSelect = true;
          
          for(let i = 0; i < 3; i++){
            this.order.push(Math.floor(Math.random() *4) + 1)
          }
          this.compTurn = true;

          this.intervalId = setInterval(this.gameTurn, this.difficulty);
        },
        gameTurn(){
          this.on = false;
          // this.blockSelect = true;
          if(this.flash == this.turn){
            clearInterval(this.intervalId);
            this.compTurn = false;
            this.clearColor();
            this.on = true;
          }

          if(this.compTurn){
            this.clearColor();
            setTimeout(() => {
              if(this.order[this.flash] == 1) this.one();
              if(this.order[this.flash] == 2) this.two();
              if(this.order[this.flash] == 3) this.three();
              if(this.order[this.flash] == 4) this.four();
              this.flash++
            }, 200)
          }
        },
///////////////////////////////////
        one(){
          if(this.noise){
            let audio = new Audio();
            audio.src = "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
            audio.play();
          }
          this.noise = true;
          this.buttonLight[0] = true
        },
        two(){
          if(this.noise){
            let audio = new Audio();
            audio.src = "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
            audio.play();
          }
          this.noise = true;
          this.buttonLight[1] = true
        },
        three(){
          if(this.noise){
            let audio = new Audio();
            audio.src = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
            audio.play();
          }
          this.noise = true;
          this.buttonLight[2] = true
        },
        four(){
          if(this.noise){
            let audio = new Audio();
            audio.src = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
            audio.play();
          }
          this.noise = true;
          this.buttonLight[3] = true
        },
///////////////////////////////////
        clearColor(){
          this.buttonLight=[false,false,false,false]
        },
        flashColor(){
          this.buttonLight=[true,true,true,true]
        },
///////////////////////////////////
        clickBlue(){
          if(this.on){
            this.playerOrder.push(1);
            this.check();
            this.one();
            if(!this.win){
            setTimeout(()=>{
              this.clearColor();
              }, 100)
            }
          }
        },
        clickRed(){
          if(this.on){
            this.playerOrder.push(2);
            this.check();
            this.two();
            if(!this.win){
            setTimeout(()=>{
              this.clearColor();
              }, 100)
            }
          }
        },
        clickYellow(){
          if(this.on){
            this.playerOrder.push(3);
            this.check();
            this.three();
            if(!this.win){
            setTimeout(()=>{
              this.clearColor();
              }, 100)
            }
          }
        },
        clickGreen(){
          if(this.on){
            this.playerOrder.push(4);
            this.check();
            this.four();
            if(!this.win){
            setTimeout(()=>{
              this.clearColor();
              }, 100)
            }
          }
        },
        check(){
          // debugger
          if(this.playerOrder[this.playerOrder.length-1] !== this.order[this.playerOrder.length-1]){
            this.good = false;
          }

          if(this.playerOrder.length == 3 && this.good){    //Player win
            this.on = false;
            this.winGame();
          }
          
          if(this.good == false){       //Player is wrong
            this.on = false;
            this.flashColor();
            this.counter = "wrong!"
            this.blockSelect = false;
            setTimeout(()=>{
              this.turn = 0
              this.counter = this.turn;
              this.clearColor();
              // this.startGame();
            }, 800);
            this.noise = false
          }

          if(this.turn == this.playerOrder.length && this.good && !this.win){
            this.on = false
            this.turn++;
            this.playerOrder = [];
            this.compTurn = true;
            this.flash = 0;
            this.counter = this.turn;
            this.intervalId = setInterval(this.gameTurn, this.difficulty);
          }

        },
        winGame(){
          this.flashColor();
          this.counter = "You win!";
          this.on = false;
          this.win = true;
          this.blockSelect = false;
        },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.simonboxes{
  width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  &__items{
    flex: 1;
    display: grid;
    max-width: 200px;
    height: 200px;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
  }
  &__aside{
    flex: 1;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }
  &__select{
    width: 100px;
  }
  &__startbtn{
    width: 100px;
    height: 50px;
    margin: 0;
  }


  h3{
    margin: 0;
    padding: 0;
  }

  .blue{
    background-color: darkblue;
  }
  .lightblue{
    background-color: lightskyblue;
  }
  .red{
    background-color: darkred;
  }
  .lightred{
    background-color: tomato;
  }
  .yellow{
    background-color: goldenrod;
  }
  .lightyellow{
    background-color: yellow;
  }
  .green{
    background-color: darkgreen;
  }
  .lightgreen{
    background-color: lightgreen;
  }
  
}

</style>
