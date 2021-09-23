<template>
  <div id="container-section-buttons">
    <button
      class="button button-play"
      @click="
        handleClick();
        getIconButton();
      "
    >
      <img id="play" :src="'/icons/' + actualButtonIcon + '.png'" />
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "SectionButtons",
  data() {
    return {
      actualButtonIcon: "play",
    };
  },
  methods: {
    ...mapMutations(["CHANGE_STATE_START"]),
    handleClick() {
      this.CHANGE_STATE_START();
      console.log(this.actualButtonIcon);
    },
    getIconButton() {
      this.start
        ? (this.actualButtonIcon = `refresh`)
        : (this.actualButtonIcon = `play`);
    },
  },
  computed: {
    ...mapState(["start"]),
  },
  actualButtonIcon() {
    if (this.start === true) {
      console.log(this.start);
      return (this.actualButtonIcon = this.iconRestart);
    } else {
      return (this.actualButtonIcon = this.iconStart);
    }
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
  margin-left: 5px;

  width: 25px;
  height: 25px;
}
</style>
