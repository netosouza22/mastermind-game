<template>
  <div id="container-section-buttons">
    <button class="button button-play">
      <img id="play" src="../assets/icons/play.png" />
    </button>

    <button class="button button-refresh">
      <img id="refresh" src="../assets/icons/refresh.png" />
    </button>
  </div>
</template>

<script>
export default {
  name: "SectionButtons",
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
