<template>
  <div id="container-section-move">
    <div class="section-circle-game">
      <label for="select1" />
      <Select
        name="select1"
        id="select1"
        :style="{ backgroundColor: this.colors.first }"
        class="option circle-choose-color"
        ;
      >
        <option
          v-for="(data, key) in arrSelectedColors"
          :style="{ backgroundColor: data }"
          :key="data + key"
        ></option>
      </Select>

      <label for="select1" />
      <Select
        name="select1"
        id="select1"
        :style="{ backgroundColor: this.colors.first }"
        class="option circle-choose-color"
      >
        <option
          v-for="(data, key) in arrSelectedColors"
          :style="{ backgroundColor: data }"
          :key="data + key"
        ></option>
      </Select>

      <label for="select1" />
      <Select
        name="select1"
        id="select1"
        :style="{ backgroundColor: this.colors.first }"
        class="option circle-choose-color"
      >
        <option
          v-for="(data, key) in arrSelectedColors"
          :style="{ backgroundColor: data }"
          :key="data + key"
        ></option>
      </Select>

      <label for="select1" />
      <Select
        name="select1"
        id="select1"
        :style="{ backgroundColor: this.colors.first }"
        class="option circle-choose-color"
      >
        <option
          v-for="(data, key) in arrSelectedColors"
          :style="{ backgroundColor: data }"
          :key="data + key"
        ></option>
      </Select>
    </div>

    <div class="section-hits">
      <div class="circle-hits"></div>
      <div class="circle-hits"></div>
      <div class="circle-hits"></div>
      <div class="circle-hits"></div>
    </div>

    <button @click="verCor()" id="test-code">Test</button>
  </div>
</template>

<script>
import colorArr from "../assets/colors.json";

export default {
  name: "SectionGame",

  data() {
    return {
      //InforHits determina a quantidade de acertos existentes na fase do jogo.
      //1 - Acertou posição e cor, 0 - acertou apenas cor e -1 - Não acertoou
      infoHits: [1, 1, 0, -1],
      arrSelectedColors: colorArr[0],

      colors: {
        first: "black",
        second: "black",
        third: "black",
        fourth: "black",
      },
    };
  },

  methods: {
    verCor() {
      console.log(this.arrSelectedColors);
      console.log(this.colors);
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
  background-color: white;
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

.option {
  background-color: red;
  color: red;
}
</style>
