<template>
  <div id="container-section-game-code">
    <div
      v-for="(data, key) in newColorObj"
      :key="data + key"
      class="div-color"
      :style="{ backgroundColor: data }"
    ></div>
    <button @click="selectColors()">Click Me</button>
  </div>
</template>

<script>
import colorObj from "../assets/colors.json";

export default {
  name: "SectionGameCode",
  data() {
    return {
      prevColorObj: colorObj[0],
      newColorObj: [],
    };
  },
  methods: {
    selectColors() {
      let prevColorObj = this.prevColorObj;

      let arrNumberSelecteds = [];
      let newColorObj = [];
      let i = 0;

      //How to shuffle values of an array
      while (i < 4) {
        let randNumber = Math.floor(Math.random() * prevColorObj.length); //I choose a random number between 0 and 4

        //Check if the number exists in array arrNumberSelecteds, if not then
        if (arrNumberSelecteds.includes(randNumber) === false) {
          newColorObj[i] = prevColorObj[randNumber]; //The position of newColorObj is populated by a prevColor index of rand number
          i++;
          arrNumberSelecteds.push(randNumber); //put the find nuumber in the array
        }
      }
      this.newColorObj = newColorObj;

      this.$emit("clicked-get-code", newColorObj);
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
