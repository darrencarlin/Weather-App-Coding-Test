<template>
	<div class='cities page' v-if='nyc,cork,ubud,kathmandu,mumbai'>
    <div class='intro'>
    <h1>Weather App</h1>
    <p>These are just some of the cities I have travelled to in the past several years.</p>
    </div>
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


</style>
