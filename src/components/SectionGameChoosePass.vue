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
        :style="{ backgroundColor: this.colors.first }"
        class="option circle-choose-color"
        v-model="colors.first"
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
        :style="{ backgroundColor: this.colors.second }"
        class="option circle-choose-color"
        v-model="colors.second"
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
        :style="{ backgroundColor: this.colors.third }"
        class="option circle-choose-color"
        v-model="colors.third"
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
        :style="{ backgroundColor: this.colors.fourth }"
        class="option circle-choose-color"
        v-model="colors.fourth"
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
        v-for="(data, key) in hitColors"
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
    codeColor: Array,
    componentStep: Number,
  },
  data() {
    return {
      arrSelectedColors: colorArr[0],
      selectedOption: "",
      colors: {
        first: "black",
        second: "black",
        third: "black",
        fourth: "black",
      },

      hitColors: ["transparent", "transparent", "transparent", "transparent"],
    };
  },
  computed: {
    ...mapState(["actualStep", "start"]),
    isThisStep() {
      if (this.componentStep === this.actualStep) {
        return true;
      }
      return false;
    },
    isDisabled() {
      if (this.start === false) {
        return true;
      } else {
        return false;
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
      let arrInfoHiits = [];
      let actualCodeColor = this.codeColor;
      let actualColorsChoosed = Object.values(this.colors);

      //Armazena a quantidade de acertos existentes na fase do jogo.
      //1 - Acertou posição e cor, 0 - acertou apenas cor e -1 - Não acertoou
      for (let i = 0; i < 4; i++) {
        if (actualCodeColor[i] === actualColorsChoosed[i]) {
          arrInfoHiits.push(1);
        } else if (actualCodeColor.includes(actualColorsChoosed[i])) {
          arrInfoHiits.push(0);
        } else {
          arrInfoHiits.push(-1);
        }
      }

      let resultArray = arrInfoHiits.sort().reverse(); //Posicioan em ordem os números

      //Adiciona as cores no array responsável por altewrar a cor das divs
      for (let i = 0; i < 4; i++) {
        if (resultArray[i] == 1) {
          resultColorsHits[i] = "red";
        } else if (resultArray[i] == 0) {
          resultColorsHits[i] = "white";
        } else {
          resultColorsHits[i] = "transparent";
        }
      }
      this.hitColors = resultColorsHits;
      this.finishGame();
    },
    finishGame() {
      if (this.hitColors.every((hits) => hits === "red")) {
        this.CHANGE_STATE_START();
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
