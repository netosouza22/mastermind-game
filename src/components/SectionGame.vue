<template>
  <div id="container-section-game">
    <SectionGameChoosePass />
    <SectionGameChoosePass />
    <SectionGameChoosePass />
    <SectionGameChoosePass />
    <SectionGameChoosePass />
    <SectionGameChoosePass />
    <SectionGameChoosePass />

    <SectionGameCode />
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
      infoHits: [1, 1, 0, -1],
      arrCode: this.selectedArrCode,
    };
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
