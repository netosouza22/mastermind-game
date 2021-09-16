<template>
  <div id="container-section-move">
    <div class="section-circle-game">
      <label for="select1" />
      <select
        name="first"
        id="first"
        :style="{ backgroundColor: this.colors.first }"
        class="option circle-choose-color"
        v-model="colors.first"
        :disabled="disabled"
        @change="getOwnColor($event)"
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
        name="second"
        :style="{ backgroundColor: this.colors.second }"
        class="option circle-choose-color"
        v-model="colors.second"
        :disabled="disabled"
        @change="getOwnColor($event)"
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
        :disabled="disabled"
        @change="getOwnColor($event)"
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
        :disabled="disabled"
        @change="getOwnColor($event)"
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

    <button @click="verifyCode()" id="test-code">Test</button>
  </div>
</template>

<script>
import colorArr from "../assets/colors.json";

export default {
  name: "SectionGame",
  props: ["codeColor", "step"],
  data() {
    return {
      arrSelectedColors: colorArr[0],
      disabled: false,
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

  methods: {
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
      this.disabled = true;
    },

    getOwnColor(event) {
      console.log(event.target);
      let objColors = this.colors;
      console.log(this.selected);

      if (Object.prototype.hasOwnProperty.call(objColors, event.target.name)) {
        console.log(event.target.name);
      }
    },
  },
};
</script>

<style>
#container-section-move {
  display: flex;
  flex-direction: row;
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
  height: 20px;
  align-self: center;
  border-radius: 0px;

  margin: auto;

  background-color: rgb(183, 226, 118);
  color: white;

  cursor: pointer;
}

select {
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
}

select:focus {
  background-color: red;
  color: red;
}
</style>
