<template>
  <div id="section-colors">
      <div 
        v-for="(data, key) in colorObj" 
        :key="data+key" 

        class="circle-color"
        :id="key"
        :style="{backgroundColor: data}"

       @click="getColor($event)" 
        ></div>

  </div>
</template>

<script>
import ObjColors from "../assets/colors.json";
export default {
    name: "SectionColors",
    data() {
        return {
            colorValue: '',
            colorObj: ObjColors[0],
        }
    },
    methods: {
        // fetchColors() {
        //     fetch("../assets/colors.")
        //     .then(r => r.json())
        //     .then(r => {
        //         this.colorObj = r;
        //     })

        // },
        getColor(event) {
            console.log(event.target.id);
            console.log(this.$refs["data"]);
            // console.log(this.colorObj);
        }
    },
    // created() {
    //     this.fetchColors();
    // },

}
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
    }
</style>