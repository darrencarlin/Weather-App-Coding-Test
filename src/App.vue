<template>
  <div id='app' class='page'>
    <transition 
      name='animation'
      enter-active-class='animated fadeIn' >
    <router-view 
      :cork='this.cork'
      :nyc='this.nyc'
      :kathmandu='this.kathmandu'
      :mumbai='this.mumbai'
      :ubud='this.ubud'
      :directions='this.directions'
     
    />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      cork: null,
      nyc: null,
      kathmandu: null,
      mumbai: null,
      ubud: null,
      directions: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    };
  },
  created() {
    this.getWeather();
  },
  methods: {
    getWeather() {
      fetch(
        'https://api.openweathermap.org/data/2.5/group?id=2965140,5128581,1283240,1275339,1622846&units=imperial&APPID=c0653f0b4a60be8b7ba25f3324b59d78'
      )
        .then(response => {
          return response.json();
        })
        .then(cities => {
          this.cork = cities.list['0'];
          this.nyc = cities.list['1'];
          this.kathmandu = cities.list['2'];
          this.mumbai = cities.list['3'];
          this.ubud = cities.list['4'];
        })
        .then(() => {
        });
    },
  }
};
</script>


<style lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,400');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  scroll-behavior: smooth;
}

i {
  color: #fff;
}

a {
  color: #fff;
  text-decoration: none;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page {
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
}

.cities {
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
  color: #fff;
  
}
.city {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 30px;
  border-bottom: 2px solid #fff;
  height: 20vh;
  &:last-child {
    border: 0;
  }
  .city-name {
    text-align: left;
    width: 100px;
    p{
      font-size: 1.2em;
      padding: 0 0 5px 0;
    }
  }
  .temp > p {
    font-size: 2em;
  }
}

.icon-small {
  height: 50px;
}

.intro {
  h1,p {
    padding: 5px 15px;
  }
  h1 {
    margin-top: 10px;
  }
}

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

@media screen and (min-width: 500px) {
  .cities {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    height: 100vh;
    .intro {
      width: 100%;
    }
    .city {
      width: 35%;
      margin: 10px;
      transition: all .3s ease-in-out;
      border: 0;
      &:hover {
        background: #fff;
        color: #000;
      }
    }
  }
  .x-scroller {
    justify-content: center;
  }
  .controls {
    .title {
      font-size: 2em;
    }
  }
  .conditions {
    p {
    font-size: 2em;
    }
    .icon-large {
      height: 200px;
    }
   
  }
  .temps .temp, .location .temp {
    font-size: 8em;
  
  }
  .temps, .location {
    justify-content: center;
  }
  .temps .temp-high, .temps .temp-min, .location .temp-high, .location .temp-min {
    font-size: 2.5em;
    
}
   .time {
      font-size: 1.5em;
    }
}
</style>
