<template>
  <div id="section-colors">
    <div
      v-for="(data, key) in colorObj"
      :key="data + key"
      class="circle-color"
      :id="data"
      :style="{ backgroundColor: data }"
      @click="getColor()"
    ></div>
  </div>
</template>
<script>
import ObjColors from "../assets/colors.json";
export default {
  name: "SectionColors",
  data() {
    return {
      colorValue: "",
      colorObj: ObjColors[0],
    };
  },
  methods: {
    getColor() {
      console.log(this.colorObj);
    },
  },
};
</script>

<style>
#section-colors {
  border: 1px solid #000;
  width: 60px;
}
.circle-color {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 10px;

  cursor: pointer;
}
</style>
