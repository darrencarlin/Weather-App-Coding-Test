<template>
<div>
	<div class="location">
		<span class='title'>{{nyc.name}},</span> 
    <span class='title'>{{nyc.sys.country}}</span>
	</div>
  <div class="conditions">
    <span class='description'>{{nyc.weather["0"].description}}</span>
  </div>
	<div class='temps'>
		<span class="temp">{{nyc.main.temp.toFixed(0)}}</span> 
    <span class="temp-max">{{nyc.main.temp_max.toFixed(0)}}&deg;</span>
	</div>
</div>
</template>

<script>
export default {
  props: ["nyc"],
  data() {
    return {
      city: "NYC"
    };
  },
  methods: {}
};
</script>


<style lang='scss' scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.temps,
.location {
  display: flex;
  flex-direction: row;
  .title {
    font-size: 1.5em;
  }
  .temp {
    font-size: 2.5em;
  }
  .temp-max {
    font-size: 2em;
  }
}
</style>
