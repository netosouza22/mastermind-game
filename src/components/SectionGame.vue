<template>
  <div id="container-section-game">
    <SectionGameChoosePass
      :code-color="arrCodeChoosed"
      :componentStep="1"
      :prevColors="colors"
      :prevHitColors="hitColors"
    />
    <SectionGameChoosePass
      :code-color="arrCodeChoosed"
      :componentStep="2"
      :prevColors="colors"
      :prevHitColors="hitColors"
    />
    <SectionGameChoosePass
      :code-color="arrCodeChoosed"
      :componentStep="3"
      :prevColors="colors"
      :prevHitColors="hitColors"
    />
    <SectionGameChoosePass
      :code-color="arrCodeChoosed"
      :componentStep="4"
      :prevColors="colors"
      :prevHitColors="hitColors"
    />
    <SectionGameChoosePass
      :code-color="arrCodeChoosed"
      :componentStep="5"
      :prevColors="colors"
      :prevHitColors="hitColors"
    />
    <SectionGameChoosePass
      :code-color="arrCodeChoosed"
      :componentStep="6"
      :prevColors="colors"
      :prevHitColors="hitColors"
    />
    <SectionGameChoosePass
      :code-color="arrCodeChoosed"
      :componentStep="7"
      :prevColors="colors"
      :prevHitColors="hitColors"
    />
    <SectionGameChoosePass
      :code-color="arrCodeChoosed"
      :componentStep="8"
      :prevColors="colors"
      :prevHitColors="hitColors"
    />

    <SectionGameCode @clicked-get-code="onClickGetCode($event)" />
  </div>
</template>

<script>
import SectionGameCode from "./SectionGameCode.vue";
import SectionGameChoosePass from "./SectionGameChoosePass.vue";

export default {
  name: "SectionGame",
  props: {
    selectedArrCode: Array,
  },
  data() {
    return {
      //InforHits determina a quantidade de acertos existentes na fase do jogo.
      //1 - Acertou posição e cor, 0 - acertou apenas cor e -1 - Não acertoou
      colors: {
        first: "black",
        second: "black",
        third: "black",
        fourth: "black",
      },

      hitColors: ["transparent", "transparent", "transparent", "transparent"],
      arrCode: this.selectedArrCode,
      arrCodeChoosed: [],
    };
  },

  methods: {
    onClickGetCode(event) {
      this.arrCodeChoosed = event;
    },
  },
  components: {
    SectionGameCode,
    SectionGameChoosePass,
  },
};
</script>

<style>
.section-circle-game {
  display: flex;
  flex-direction: row;
}
.circle-game {
  width: 40px;
  height: 40px;
  margin: 10px;

  border-radius: 50%;
  background-color: blue;
  border: 1px solid #000;
}
</style>
