<script>
export default {
  name: "Weather",
  data() {
    return {
      cork: null,
      nyc: null,
      kathmandu: null,
      mumbai: null,
      ubud: null
    };
  },
  mounted() {
    this.getWeather();
  },
  methods: {
    getWeather() {
      fetch(
        "http://api.openweathermap.org/data/2.5/group?id=2965139,5128581,1283240,1275339,1622846&units=metric&APPID=c0653f0b4a60be8b7ba25f3324b59d78"
      )
        .then(response => {
          return response.json();
        })
        .then(cities => {
          this.cork = cities.list["0"];
          this.nyc = cities["1"];
          this.kathmandu = cities["2"];
          this.mumbai = cities["3"];
          this.ubud = cities["4"];
        })
        .then(() => {
          console.log(this.cork.name);
        });
    }
  }
};
</script>