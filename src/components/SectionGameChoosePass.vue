<template>
  <div id="container-section-move">
    <h4>{{ this.componentStep }}</h4>
    <div
      class="section-circle-game"
      :style="[
        isThisStep && isDisabled == false ? { border: '1px solid #000' } : null,
      ]"
    >
      <label for="select1" />
      <select
        name="first"
        id="first"
        :style="{ backgroundColor: this.inputColors.first }"
        class="option circle-choose-color"
        v-model="inputColors.first"
        :disabled="isThisStep ? false : true"
      >
        <option
          class="option-test"
          v-for="(data, key) in arrSelectedColors"
          :style="{ backgroundColor: data }"
          :key="data + key"
          :value="data"
        ></option>
      </select>

      <label for="select1" />
      <select
        name="second"
        :style="{ backgroundColor: this.inputColors.second }"
        class="option circle-choose-color"
        v-model="inputColors.second"
        :disabled="isThisStep ? false : true"
      >
        <option
          v-for="(data, key) in arrSelectedColors"
          :style="{ backgroundColor: data }"
          :key="data + key"
          :value="data"
        ></option>
      </select>

      <label for="select1" />
      <select
        name="third"
        :style="{ backgroundColor: this.inputColors.third }"
        class="option circle-choose-color"
        v-model="inputColors.third"
        :disabled="isThisStep ? false : true"
      >
        <option
          v-for="(data, key) in arrSelectedColors"
          :style="{ backgroundColor: data }"
          :key="data + key"
          :value="data"
        ></option>
      </select>

      <label for="select1" />
      <select
        name="fourth"
        :style="{ backgroundColor: this.inputColors.fourth }"
        class="option circle-choose-color"
        v-model="inputColors.fourth"
        :disabled="isThisStep ? false : true"
      >
        <option
          v-for="(data, key) in arrSelectedColors"
          :style="{ backgroundColor: data }"
          :key="data + key"
          :value="data"
        ></option>
      </select>
    </div>

    <div class="section-hits">
      <div
        v-for="(data, key) in scoreColors"
        :key="data + key"
        class="circle-hits"
        :style="{ backgroundColor: data }"
      ></div>
    </div>

    <button
      @click="
        verifyCode();
        handleClick();
      "
      id="test-code"
      :disabled="isThisStep ? false : true"
    >
      Test
    </button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import colorArr from "../assets/colors.json";

export default {
  name: "SectionGame",
  props: {
    codeColor: {
      type: Array,
    },
    componentStep: Number,
    prevColors: Object,
  },
  data() {
    return {
      arrSelectedColors: colorArr[0],
      selectedOption: "",
      inputColors: {
        first: "black",
        second: "black",
        third: "black",
        fourth: "black",
      },

      scoreColors: ["transparent", "transparent", "transparent", "transparent"],
    };
  },
  computed: {
    ...mapState(["actualStep", "start"]),
    isThisStep() {
      return this.componentStep === this.actualStep ? true : false;
    },
    isDisabled() {
      return this.start === false ? true : false;
    },
  },
  watch: {
    start() {
      if (this.start === false) {
        this.finishGame();
      }
    },
  },
  methods: {
    ...mapMutations(["INCREASE_STEP", "CHANGE_STATE_START"]),
    handleClick() {
      this.INCREASE_STEP();
    },
    verifyCode() {
      let resultColorsHits = [];
      let arrInfoHits = [];
      let arrColorAppeared = [];

      // let qntShowColor = 0;
      let actualColorsChoosed = Object.values(this.inputColors);
      let actualCodeColor = this.codeColor.map((x) => x);

      for (let i = 0; i < 4; i++) {
        if (actualColorsChoosed[i] === actualCodeColor[i]) {
          arrInfoHits.push(1);
          arrColorAppeared.push(actualColorsChoosed[i]); //store all colors in this that hit code and my pass
        } else if (actualCodeColor.includes(actualColorsChoosed[i])) {
          let qntTimeAppearInCode = this.numbTimesColorAppear(
            actualCodeColor,
            actualColorsChoosed[i]
          );

          let qntTimeAppearBefore = this.numbTimesColorAppear(
            arrColorAppeared,
            actualColorsChoosed[i]
          );

          let qntTimeAppearInPass = this.numbTimesColorAppear(
            actualColorsChoosed,
            actualColorsChoosed[i]
          );

          if (qntTimeAppearInPass === qntTimeAppearInCode) {
            arrInfoHits.push(0);
          } else if (qntTimeAppearInPass < qntTimeAppearInCode) {
            console.log(qntTimeAppearInPass, qntTimeAppearInCode);
            qntTimeAppearBefore === 0
              ? arrInfoHits.push(0)
              : arrInfoHits.push(-1);
          } else {
            arrInfoHits.push(0);
          }
        } else {
          arrInfoHits.push(-1);
        }
      }

      // let resultArray = arrInfoHits.sort().reverse(); //Posicioan em ordem os números
      let resultArray = arrInfoHits; //Posicioan em ordem os números
      //Add the colors to the score circles, to indentify the score.
      for (let i = 0; i < 4; i++) {
        if (resultArray[i] == 1) {
          resultColorsHits[i] = "red";
        } else if (resultArray[i] == 0) {
          resultColorsHits[i] = "white";
        } else {
          resultColorsHits[i] = "transparent";
        }
      }
      this.scoreColors = resultColorsHits;
      this.finishGame();
    },
    numbTimesColorAppear(arrColor, testColor) {
      let numbTime = arrColor.filter((color) => color == testColor).length;

      return numbTime;
    },

    finishGame() {
      if (this.scoreColors.every((hits) => hits === "red")) {
        this.CHANGE_STATE_START();
        this.inputColors = {
          first: "black",
          second: "black",
          third: "black",
          fourth: "black",
        };

        this.scoreColors = [
          "transparent",
          "transparent",
          "transparent",
          "transparent",
        ];
      }
    },
  },
};
</script>

<style>
#container-section-move {
  display: flex;
  flex-direction: row;
  background-color: chartreuse;
  margin: 10px;
}

.section-circle-game {
  display: flex;
  flex-direction: row;
}

.circle-choose-color {
  width: 40px;
  height: 40px;
  margin: 10px;

  border-radius: 50%;
  background-color: black;
  border: 1px solid #000;
}

.section-hits {
  border: 1px solid #000;
  width: 33px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}

.circle-hits {
  width: 10px;
  height: 10px;

  border-radius: 50%;
  border: 1px solid #000;

  margin: 2px;
}
button:disabled {
  display: none;
}

#test-code {
  border: none;
  height: 30px;
  width: 100px;
  align-self: center;
  border-radius: 0px;

  margin: auto;

  background-color: rgb(183, 226, 118);
  color: white;
  font-weight: bold;

  cursor: pointer;
}

select {
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
}

option:hover {
  background-color: blue !important;
}
/* select.decorated option:hover {
  box-shadow: 0 0 10px 100px #1882a8 inset;
}

select option.option-test:focus {
  box-shadow: 0 0 10px 100px #000 inset;
} */
</style>
