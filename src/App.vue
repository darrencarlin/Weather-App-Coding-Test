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
        'http://api.openweathermap.org/data/2.5/group?id=2965140,5128581,1283240,1275339,1622846&units=imperial&APPID=c0653f0b4a60be8b7ba25f3324b59d78'
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
          console.log(this.cork);
          console.log(this.nyc);
          console.log(this.kathmandu);
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
}
</style>
