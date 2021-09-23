<template>
  <div id="container">
    <SectionColors />
    <SectionGame />
    <SectionButtons />
  </div>
</template>

<script>
import SectionColors from "./SectionColors.vue";
import SectionButtons from "./SectionButtons.vue";
import SectionGame from "./SectionGame.vue";

export default {
  name: "MainContainer",
  props: {
    msg: String,
  },
  components: {
    SectionColors,
    SectionButtons,
    SectionGame,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
  margin: auto;
  width: 100%;
  border: 1px solid #000;
  margin: 0px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  background-color: white;
}
</style>
