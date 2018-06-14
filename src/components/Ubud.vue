<template>
<div class='main' v-if='ubud' v-bind:class="{ 'day': day, 'evening': evening, 'night': night }">
	<div class='controls' >
		 <router-link to='/Weather-App-Coding-Test/'><i class='fas fa-arrow-circle-left fa-2x'></i></router-link>
		<p class='title'>{{ubud.name}}</p>
	</div>
	
	<div class='conditions'>
    <p>{{ubud.weather['0'].main}}</p>
		<img alt='' 
    class='icon-large' 
    v-bind:src="'../../static/'+ ubud.weather['0'].main + '.svg'" > 
    
	</div>
  <div class='time'>
    <p class='time'>{{ calcTime(8) }}</p>
	</div>
	<div class='temps'>
		<p class='temp'>{{ubud.main.temp.toFixed(0)}}&deg;</p>
		<div class='temp-high-low'>
			<p class='temp-min'>{{ubud.main.temp_min.toFixed(0)}}&deg;</p>
			<p class='temp-high'>{{ubud.main.temp_max.toFixed(0)}}&deg;</p>
		</div>
	</div>
	<div class='additional-info'>
		<div class='x-scroller'>
			<div class='sun'>
				<div>
					<p><img alt='' class='icon-small' src='https://image.flaticon.com/icons/svg/136/136741.svg'></p>
					<p>Sunrise</p>
            <p class='time'>{{getTime(ubud.sys.sunrise, 12, 0)}}</p>
				</div>
        </div>
        <div class='sun'>
				<div>
					<p><img alt='' class='icon-small' src='https://image.flaticon.com/icons/svg/136/136742.svg'></p>
				<p>Sunset</p>
          <p class='time'>{{getTime(ubud.sys.sunset, 12, 0)}}</p>
				</div>
			</div>
			<div class='wind'>
				<div>
					<p><img alt='' class='icon-small' src='https://image.flaticon.com/icons/svg/136/136743.svg'></p>
          <p><b>{{getWindDirection(ubud.wind.deg)}}</b> Wind </p>
        	<p class='time'>{{ubud.wind.speed}} mph</p>
				</div>
			</div>
			<div class='humidity'>
				<div>
					<p><img alt='' class='icon-small' src='https://image.flaticon.com/icons/svg/136/136750.svg'></p>
					<p>Humidity</p>
          <p class='time'>{{ubud.main.humidity}} %</p>
				</div>
			</div>
      <div class='pressure'>
        	<div>
					<p><img alt='' class='icon-small' src='https://image.flaticon.com/icons/svg/136/136751.svg'></p>
					<p>Pressure</p>
          <p class='time'>{{ubud.main.pressure}} hpa</p>
				</div>
      </div>
		</div>
	</div>
  
</div>
</template>

<script>
export default {
  props: ['ubud', 'directions'],
  data() {
    return {
      day: false,
      evening: false,
      night: false
    };
  },
  methods: {

    // sunrise / sunset 
    getTime(milliseconds, offsetHours, offsetMinutes) {
      let myDate = new Date(milliseconds * 1000);
      myDate.setHours(myDate.getHours() + offsetHours);
      myDate.setMinutes(myDate.getMinutes() + offsetMinutes);
      let hours = myDate.getHours();
      let minutes = myDate.getMinutes();
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (hours > 12 && hours < 24) {
        return `${hours}:${minutes} pm`;
      } else {
        return `${hours}:${minutes} am`;
      }
    },

    // local time & background
    calcTime(offset) {
      let date = new Date();
      let utc = date.getTime() + date.getTimezoneOffset() * 60000;
      let time = new Date(utc + 3600000 * offset);
      let localTime = time.toLocaleString().substr(12, 5);
      let day = localTime.substr(0,2);
      if (day >= 6 && day < 17) {
        this.day = true;
        this.morning = false;
        this.night = false;
      } else if (day > 16 && day < 20) {
        this.evening = true;
        this.day = false;
        this.night = false;
      } else {
        this.night = true;
        this.day = false;
        this.evening = false;
      }
      return localTime;
    },
    // wind direction 
    getWindDirection(degree) {
      let directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
      degree += 22.5;
      if (degree < 0) {
        degree = 360 - Math.abs(degree) % 360; 
      } else {
        degree = degree % 360;
      }
      let direction = parseInt(degree / 45);
      return directions[direction];
    }
  }
};
</script>

<style lang='scss' scoped>

</style>