<template>
  <div id="container-section-game-code">
    <div
      v-for="(data, key) in newRandColorArr"
      :key="data + key"
      class="div-color"
      :style="{ backgroundColor: data }"
    ></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import colorArr from "../assets/colors.json";

export default {
  name: "SectionGameCode",
  data() {
    return {
      allColorArr: colorArr[0],
      newRandColorArr: [],
    };
  },
  computed: {
    ...mapState(["start"]),
  },
  methods: {
    selectColors() {
      let allColorArr = this.allColorArr;

      let arrRandNumberSelecteds = [];
      let newRandColorArr = [];
      let i = 0;

      //How to shuffle values of an array
      while (i < 4) {
        let randNumber = Math.floor(Math.random() * allColorArr.length); //I choose a random number between 0 and 4

        //Check if the number exists in array arrRandNumberSelecteds, if not then
        if (arrRandNumberSelecteds.includes(randNumber) === false) {
          newRandColorArr[i] = allColorArr[randNumber]; //The position of newColorArr is populated by a prevColor index of rand number
          i++; //Increment de value to the while structure
          arrRandNumberSelecteds.push(randNumber); //put the find nuumber in the array
        }
      }
      this.newRandColorArr = newRandColorArr;

      this.$emit("clicked-get-code", newRandColorArr); //Emit the value for the parent component
    },
  },
  //Using watch to wait the change state 'start' stored in store.js
  watch: {
    start() {
      if (this.start === true) {
        this.selectColors();
      }
    },
  },
};
</script>

<style>
#container-section-game-code {
  border: 1px solid #000;
  display: flex;

  flex-direction: row;
}
.div-color {
  width: 40px;
  height: 40px;
  border-radius: 50%;

  margin: 10px;
}
</style>
