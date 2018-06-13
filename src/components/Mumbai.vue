<template>
<div class='main' v-if='mumbai' v-bind:class="{ 'day': day, 'evening': evening, 'night': night }">
	<div class='controls' >
	 <router-link to='/'><i class='fas fa-arrow-circle-left fa-2x'></i></router-link>
		<p class='title'>{{mumbai.name}}</p>
	</div>

	<div class='conditions'>
     <p>{{mumbai.weather['0'].main}}</p>
		<img alt='' 
    class='icon-large' 
    v-bind:src="'../../static/'+ mumbai.weather['0'].main + '.svg'" > 
   
	</div>
	<div class='time'>
    <p class='time'>{{ calcTime(5.5) }}</p>
	</div>
	<div class='temps'>
		<p class='temp'>{{mumbai.main.temp.toFixed(0)}}&deg;</p>
		<div class='temp-high-low'>
			<p class='temp-min'>{{mumbai.main.temp_min.toFixed(0)}}&deg;</p>
			<p class='temp-high'>{{mumbai.main.temp_max.toFixed(0)}}&deg;</p>
		</div>
	</div>
	<div class='additional-info'>
		<div class='x-scroller'>
			<div class='sun'>
				<div>
					<p><img alt='' class='icon-small' src='https://image.flaticon.com/icons/svg/136/136741.svg'></p>
					<p>Sunrise</p>
          <p class='time'>{{getTime(mumbai.sys.sunrise, 9, 31)}}</p>
				</div>
        </div>
        <div class='sun'>
				<div>
					<p><img alt='' class='icon-small' src='https://image.flaticon.com/icons/svg/136/136742.svg'></p>
				<p>Sunset</p>
        	<p class='time'>{{getTime(mumbai.sys.sunset, 9, 31)}}</p>
				</div>
			</div>
			<div class='wind'>
				<div>
					<p><img alt='' class='icon-small' src='https://image.flaticon.com/icons/svg/136/136743.svg'></p>
          <p><b>{{getWindDirection(mumbai.wind.deg)}}</b> Wind </p>
        	<p class='time'>{{mumbai.wind.speed}} mph</p>
				</div>
			</div>
			<div class='humidity'>
				<div>
					<p><img alt='' class='icon-small' src='https://image.flaticon.com/icons/svg/136/136750.svg'></p>
					<p>Humidity</p>
          <p class='time'>{{mumbai.main.humidity}} %</p>
				</div>
			</div>
      <div class='pressure'>
        	<div>
					<p><img alt='' class='icon-small' src='https://image.flaticon.com/icons/svg/136/136751.svg'></p>
					<p>Pressure</p>
          <p class='time'>{{mumbai.main.pressure}} hpa</p>
				</div>
      </div>
		</div>
	</div>
</div>
</template>
<script>
export default {
  props: ['mumbai','directions'],
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
      let day = localTime.substr(0,2)
      console.log(day)
      if (day > 6 && day < 17) {
        console.log('1')
        this.day = true;
        this.morning = false;
        this.night = false;
      } else if (day > 16 && day < 20) {
         console.log('2')
        this.evening = true;
        this.day = false;
        this.night = false;
      } else {
         console.log('3')
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
.additional-info {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  //margin: 0 0 15px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.x-scroller {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow-x: scroll;
  overflow-y: hidden;
  width: auto;
  white-space: nowrap;
}

.main {
  color: #fff;
  height: 100vh;
}

.night {
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.evening {
  background: #114357; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #f29492,
    #114357
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #f29492,
    #114357
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.day {
  background: #2193b0; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #6dd5ed,
    #2193b0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #6dd5ed,
    #2193b0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.icon-small {
  height: 50px;
}

.icon-large {
  height: 100px;
}

.controls {
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  .title {
    font-size: 1.2em;
  }
}

.location,
.conditions,
.temps,
.time,
.sun,
.wind,
.humidity,
.pressure {
  margin: 0 0 10px 0;
  padding: 10px;
  height: auto;
}

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
}
.wi {
  font-size: 1.5em;
}

.time {
  margin: 0 0 0 0;
}
.temps {
  padding: 0;
  margin-bottom: 25px;
}
.temps,
.location {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  .title {
    font-size: 1.5em;
  }
  .temp {
    font-size: 7em;
    font-weight: 100;
  }
  .temp-min {
    border-bottom: 1px solid #fff;
  }
  .temp-high,
  .temp-min {
    font-size: 2em;
    font-weight: 100;
  }
}

.time {
  font-size: 1.2em;
}

.location {
  display: flex;
  justify-content: center;
  width: 60%;
  margin: 0 auto;
}

.sun,
.wind,
.humidity,
.pressure {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 0;
  div {
    display: flex;
    flex-direction: column;
  }
}
</style>