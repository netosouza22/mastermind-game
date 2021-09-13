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
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 100px;

  border: 1px solid #000;
}
.button {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
img {
  width: 40px;
  height: 40px;
}
</style>
