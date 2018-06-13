<template>
	<div class='cities page' v-if='nyc,cork,ubud,kathmandu,mumbai'>
		<router-link to='/nyc' exact class='city'>
			
      <div class='conditions'>
				<div>
        		<img alt='' 
    class='icon-small' 
    v-bind:src="'../../static/'+ nyc.weather['0'].main + '.svg'" >
        </div>
			</div>
      <div class='city-name'>
			<p>	{{nyc.name}}</p>
        <p>{{nyc.weather['0'].main}}</p>
			</div>
			
			<div class='temp'>
				<p>{{nyc.main.temp.toFixed(0)}}&deg;</p>
			</div>
		</router-link>
		<router-link to='/cork' exact class='city'>
			
			<div class='conditions'>
				<div>
					<img alt='' 
    class='icon-small' 
    v-bind:src="'../../static/'+ cork.weather['0'].main + '.svg'" ></div>
			</div>
      <div class='city-name'>
				<p>{{cork.name}}</p>
        	<p>{{cork.weather['0'].main}}</p>
			</div>
			<div class='temp'>
				<p class='temp'>{{cork.main.temp.toFixed(0)}}&deg;</p>
			</div>
		</router-link>
		<router-link to='/ubud' exact class='city'>
		
			<div class='conditions'>
				<div>
						<img alt='' 
    class='icon-small' 
    v-bind:src="'../../static/'+ ubud.weather['0'].main + '.svg'" ></div>
			</div>
      	<div class='city-name'>
				<p>{{ubud.name}}</p>
        <p>{{ubud.weather['0'].main}}</p>
			</div>
			<div class='temp'>
				<p class='temp'>{{ubud.main.temp.toFixed(0)}}&deg;</p>
			</div>
		</router-link>
		<router-link to='/kathmandu' exact class='city'>
		
			<div class='conditions'>
				<div>
					<img alt='' 
    class='icon-small' 
    v-bind:src="'../../static/'+ kathmandu.weather['0'].main + '.svg'" ></div>
			</div>
      	<div class='city-name'>
			<p>	{{kathmandu.name}}</p>
        	<p>{{kathmandu.weather['0'].main}}</p>
			</div>
			<div class='temp'>
				<p class='temp'>{{kathmandu.main.temp.toFixed(0)}}&deg;</p>
			</div>
		</router-link>
		<router-link to='/mumbai' exact class='city'>
			
			<div class='conditions'>
				<div>
				<img alt='' 
    class='icon-small' 
    v-bind:src="'../../static/'+ mumbai.weather['0'].main + '.svg'" ></div>
			</div>
      <div class='city-name'>
				<p>{{mumbai.name}}</p>
        	<p>{{mumbai.weather['0'].main}}</p>	
			</div>
			<div class='temp'>
				<p class='temp'>{{mumbai.main.temp.toFixed(0)}}&deg;</p>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
  props: ['nyc', 'cork', 'ubud', 'mumbai', 'kathmandu'],
  data() {
    return {};
  }
};
</script>


<style lang='scss' scoped>
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
  min-height: 100vh;
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
</style>
