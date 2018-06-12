<template>
  <div id="app">
    <router-view 
      :cork='this.cork'
      :nyc='this.nyc'
    />
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      cork: null,
      nyc: null,
      kathmandu: null,
      mumbai: null,
      ubud: null
    }
  },
  created() {
    this.getWeather();
  },
  methods: {
    getWeather() {
      fetch(
        "http://api.openweathermap.org/data/2.5/group?id=2965139,5128581,1283240,1275339,1622846&units=imperial&APPID=c0653f0b4a60be8b7ba25f3324b59d78"
      )
        .then(response => {
          return response.json();
        })
        .then(cities => {
          this.cork = cities.list["0"];
          this.nyc = cities.list["1"];
          this.kathmandu = cities.list["2"];
          this.mumbai = cities.list["3"];
          this.ubud = cities.list["4"];
        })
        .then(() => {
          console.log(this.nyc)
        });
    }
  }
};
</script>

<style>
*,*::before,*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
