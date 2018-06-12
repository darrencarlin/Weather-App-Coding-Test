<template>
  <div v-if="cork">
    <span class='title'>{{cork.name}}</span>
   <div class='temps'>
     <span class="temp">{{cork.main.temp.toFixed(0)}}</span>
     <span class="temp-max">{{cork.main.temp_max.toFixed(0)}}&deg;</span>
   </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ["cork"],
  data() {
    return {
      city: "Cork"
    };
  }
};
</script>


<style lang='scss' scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.temps {
  display: flex;
  flex-direction: row;
  .temp {
    font-size: 2.5em;
  }
  .temp-max {
    font-size: 2em;
  }
}

.title {
  font-size: 1.5em;
}
</style>
