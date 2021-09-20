<template>
  <div id="container-section-buttons">
    <button class="button button-play" @click="handleClick()">
      <img id="play" src="../assets/icons/play.png" />
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "SectionButtons",
  methods: {
    ...mapMutations(["changeStartBool"]),
    handleClick() {
      this.changeStartBool();
    },
  },
};
</script>

<style>
#container-section-buttons {
  /* margin: 0px auto; */
  display: flex;
  flex-direction: column;
  /* align-content: space-between; */
  /* justify-content: center; */

  border: 1px solid #000;
}
.button {
  width: 40px;
  height: 40px;
  margin: 5px;

  border-radius: 50%;
  padding: 0px;
  border: none;

  cursor: pointer;
}

.button:hover > img {
  width: 26px;
}
img {
  margin-top: 3px;

  width: 25px;
  height: 25px;
}
</style>
