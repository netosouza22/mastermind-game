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

      //   console.log(newColorObj);

      // let arr = [0, 1, 2, 3, 4];
      let arrNumberSelecteds = [];
      let newColorObj = [];
      let i = 0;
      console.log("anterior", prevColorObj);
      while (i < 4) {
        let randNumber = Math.floor(Math.random() * 5); //I choose a randnumber between 0 and 4
        console.log("randNumber", randNumber);

        //Check if the number exists in array arrNumberSelecteds
        if (arrNumberSelecteds.includes(randNumber) === false) {
          newColorObj[i] = prevColorObj[randNumber];
          i++;
          arrNumberSelecteds.push(randNumber);
        }
      }
      this.newColorObj = newColorObj;
      console.log("novo", newColorObj);
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
