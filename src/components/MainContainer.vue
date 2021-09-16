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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#container {
  margin: auto;
  width: 80%;
  border: 1px solid #000;

  display: flex;
  flex-direction: row;
  justify-content: center;

  background-color: #c4c4c4;
}
</style>
