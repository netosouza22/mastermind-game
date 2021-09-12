<template>
  <div id="section-colors">
      <div 
        v-for="(data, key) in colorObj" 
        :key="data+key" 
        @click="getColor()" 
        class="circle-color"
        :style="{backgroundColor: data}"
        ></div>

      <!-- <div @click="getColor()" class="circle-color">

      </div>

      <div @click="getColor()" class="circle-color">

      </div>
      <div @click="getColor()" class="circle-color">

      </div>
      <div @click="getColor()" class="circle-color">

      </div> -->
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
        getColor() {

            console.log(this.$refs);
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