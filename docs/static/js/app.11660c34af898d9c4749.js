webpackJsonp([0],{BpbL:function(t,s){},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("7+uW"),e={name:"App",data:function(){return{cork:null,nyc:null,kathmandu:null,mumbai:null,ubud:null,directions:["N","NE","E","SE","S","SW","W","NW"]}},created:function(){this.getWeather()},methods:{getWeather:function(){var t=this;fetch("https://api.openweathermap.org/data/2.5/group?id=2965140,5128581,1283240,1275339,1622846&units=imperial&APPID=c0653f0b4a60be8b7ba25f3324b59d78").then(function(t){return t.json()}).then(function(s){t.cork=s.list[0],t.nyc=s.list[1],t.kathmandu=s.list[2],t.mumbai=s.list[3],t.ubud=s.list[4]}).then(function(){})}}},n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page",attrs:{id:"app"}},[s("transition",{attrs:{name:"animation","enter-active-class":"animated fadeIn"}},[s("router-view",{attrs:{cork:this.cork,nyc:this.nyc,kathmandu:this.kathmandu,mumbai:this.mumbai,ubud:this.ubud,directions:this.directions}})],1)],1)},staticRenderFns:[]};var c=i("VU/8")(e,n,!1,function(t){i("hL/0")},null,null).exports,r=i("/ocq"),m={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.nyc,t.cork,t.ubud,t.kathmandu,t.mumbai?i("div",{staticClass:"cities page"},[t._m(0),t._v(" "),i("router-link",{staticClass:"city",attrs:{to:"/nyc",exact:""}},[i("div",{staticClass:"conditions"},[i("div",[i("img",{staticClass:"icon-small",attrs:{alt:"",src:"Weather-App-Coding-Test/static/"+t.nyc.weather[0].main+".svg"}})])]),t._v(" "),i("div",{staticClass:"city-name"},[i("p",[t._v("\t"+t._s(t.nyc.name))]),t._v(" "),i("p",[t._v(t._s(t.nyc.weather[0].main))])]),t._v(" "),i("div",{staticClass:"temp"},[i("p",[t._v(t._s(t.nyc.main.temp.toFixed(0))+"°")])])]),t._v(" "),i("router-link",{staticClass:"city",attrs:{to:"/cork",exact:""}},[i("div",{staticClass:"conditions"},[i("div",[i("img",{staticClass:"icon-small",attrs:{alt:"",src:"Weather-App-Coding-Test/static/"+t.cork.weather[0].main+".svg"}})])]),t._v(" "),i("div",{staticClass:"city-name"},[i("p",[t._v(t._s(t.cork.name))]),t._v(" "),i("p",[t._v(t._s(t.cork.weather[0].main))])]),t._v(" "),i("div",{staticClass:"temp"},[i("p",{staticClass:"temp"},[t._v(t._s(t.cork.main.temp.toFixed(0))+"°")])])]),t._v(" "),i("router-link",{staticClass:"city",attrs:{to:"/ubud",exact:""}},[i("div",{staticClass:"conditions"},[i("div",[i("img",{staticClass:"icon-small",attrs:{alt:"",src:"Weather-App-Coding-Test/static/"+t.ubud.weather[0].main+".svg"}})])]),t._v(" "),i("div",{staticClass:"city-name"},[i("p",[t._v(t._s(t.ubud.name))]),t._v(" "),i("p",[t._v(t._s(t.ubud.weather[0].main))])]),t._v(" "),i("div",{staticClass:"temp"},[i("p",{staticClass:"temp"},[t._v(t._s(t.ubud.main.temp.toFixed(0))+"°")])])]),t._v(" "),i("router-link",{staticClass:"city",attrs:{to:"/kathmandu",exact:""}},[i("div",{staticClass:"conditions"},[i("div",[i("img",{staticClass:"icon-small",attrs:{alt:"",src:"Weather-App-Coding-Test/static/"+t.kathmandu.weather[0].main+".svg"}})])]),t._v(" "),i("div",{staticClass:"city-name"},[i("p",[t._v("\t"+t._s(t.kathmandu.name))]),t._v(" "),i("p",[t._v(t._s(t.kathmandu.weather[0].main))])]),t._v(" "),i("div",{staticClass:"temp"},[i("p",{staticClass:"temp"},[t._v(t._s(t.kathmandu.main.temp.toFixed(0))+"°")])])]),t._v(" "),i("router-link",{staticClass:"city",attrs:{to:"/mumbai",exact:""}},[i("div",{staticClass:"conditions"},[i("div",[i("img",{staticClass:"icon-small",attrs:{alt:"",src:"Weather-App-Coding-Test/static/"+t.mumbai.weather[0].main+".svg"}})])]),t._v(" "),i("div",{staticClass:"city-name"},[i("p",[t._v(t._s(t.mumbai.name))]),t._v(" "),i("p",[t._v(t._s(t.mumbai.weather[0].main))])]),t._v(" "),i("div",{staticClass:"temp"},[i("p",{staticClass:"temp"},[t._v(t._s(t.mumbai.main.temp.toFixed(0))+"°")])])])],1):t._e()},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"intro"},[s("h1",[this._v("Weather App")]),this._v(" "),s("p",[this._v("These are just some of the cities I have travelled to in the past several years.")])])}]};var v=i("VU/8")({props:["nyc","cork","ubud","mumbai","kathmandu"],data:function(){return{}}},m,!1,function(t){i("BpbL")},"data-v-4f46a6c4",null).exports,l={props:["cork","directions"],data:function(){return{day:!1,evening:!1,night:!1}},methods:{getTime:function(t,s,i){var a=new Date(1e3*t);a.setHours(a.getHours()+s),a.setMinutes(a.getMinutes()+i);var e=a.getHours(),n=a.getMinutes();return n<10&&(n="0"+n),e>12&&e<24?e+":"+n+" pm":e+":"+n+" am"},calcTime:function(t){var s=new Date,i=s.getTime()+6e4*s.getTimezoneOffset(),a=new Date(i+36e5*t).toLocaleString().substr(12,5),e=a.substr(0,2);return e>6&&e<17?(this.day=!0,this.morning=!1,this.night=!1):e>16&&e<20?(this.evening=!0,this.day=!1,this.night=!1):(this.night=!0,this.day=!1,this.evening=!1),a},getWindDirection:function(t){return(t+=22.5)<0?t=360-Math.abs(t)%360:t%=360,["N","NE","E","SE","S","SW","W","NW"][parseInt(t/45)]}}},o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.cork?i("div",{staticClass:"main",class:{day:t.day,evening:t.evening,night:t.night}},[i("div",{staticClass:"controls"},[i("router-link",{attrs:{to:"/"}},[i("i",{staticClass:"fas fa-arrow-circle-left fa-2x"})]),t._v(" "),i("p",{staticClass:"title"},[t._v(t._s(t.cork.name))])],1),t._v(" "),i("div",{staticClass:"conditions"},[i("p",[t._v(t._s(t.cork.weather[0].main))]),t._v(" "),i("img",{staticClass:"icon-large",attrs:{alt:"",src:"Weather-App-Coding-Test/static/"+t.cork.weather[0].main+".svg"}})]),t._v(" "),i("div",{staticClass:"time"},[i("p",{staticClass:"time"},[t._v(t._s(t.calcTime(1)))])]),t._v(" "),i("div",{staticClass:"temps"},[i("p",{staticClass:"temp"},[t._v(t._s(t.cork.main.temp.toFixed(0))+"°")]),t._v(" "),i("div",{staticClass:"temp-high-low"},[i("p",{staticClass:"temp-min"},[t._v(t._s(t.cork.main.temp_min.toFixed(0))+"°")]),t._v(" "),i("p",{staticClass:"temp-high"},[t._v(t._s(t.cork.main.temp_max.toFixed(0))+"°")])])]),t._v(" "),i("div",{staticClass:"additional-info"},[i("div",{staticClass:"x-scroller"},[i("div",{staticClass:"sun"},[i("div",[t._m(0),t._v(" "),i("p",[t._v("Sunrise")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.getTime(t.cork.sys.sunrise,5,0)))])])]),t._v(" "),i("div",{staticClass:"sun"},[i("div",[t._m(1),t._v(" "),i("p",[t._v("Sunset")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.getTime(t.cork.sys.sunset,5,0)))])])]),t._v(" "),i("div",{staticClass:"wind"},[i("div",[t._m(2),t._v(" "),i("p",[i("b",[t._v(t._s(t.getWindDirection(t.cork.wind.deg)))]),t._v(" Wind ")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.cork.wind.speed)+" mph")])])]),t._v(" "),i("div",{staticClass:"humidity"},[i("div",[t._m(3),t._v(" "),i("p",[t._v("Humidity")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.cork.main.humidity)+" %")])])]),t._v(" "),i("div",{staticClass:"pressure"},[i("div",[t._m(4),t._v(" "),i("p",[t._v("Pressure")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.cork.main.pressure)+" hpa")])])])])])]):t._e()},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136741.svg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136742.svg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136743.svg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136750.svg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136751.svg"}})])}]};var _=i("VU/8")(l,o,!1,function(t){i("keeM")},"data-v-7b3d728c",null).exports,u={props:["nyc","directions"],data:function(){return{day:!1,evening:!1,night:!1}},methods:{getTime:function(t,s,i){var a=new Date(1e3*t);a.setHours(a.getHours()+s),a.setMinutes(a.getMinutes()+i);var e=a.getHours(),n=a.getMinutes();return n<10&&(n="0"+n),e>12&&e<24?e+":"+n+" pm":e+":"+n+" am"},calcTime:function(t){var s=new Date,i=s.getTime()+6e4*s.getTimezoneOffset(),a=new Date(i+36e5*t).toLocaleString().substr(12,5),e=a.substr(0,2);return e>6&&e<17?(this.day=!0,this.morning=!1,this.night=!1):e>16&&e<20?(this.evening=!0,this.day=!1,this.night=!1):(this.night=!0,this.day=!1,this.evening=!1),a},getWindDirection:function(t){return(t+=22.5)<0?t=360-Math.abs(t)%360:t%=360,["N","NE","E","SE","S","SW","W","NW"][parseInt(t/45)]}}},d={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.nyc?i("div",{staticClass:"main",class:{day:t.day,evening:t.evening,night:t.night}},[i("div",{staticClass:"controls"},[i("router-link",{attrs:{to:"/"}},[i("i",{staticClass:"fas fa-arrow-circle-left fa-2x"})]),t._v(" "),i("p",{staticClass:"title"},[t._v(t._s(t.nyc.name))])],1),t._v(" "),i("div",{staticClass:"conditions"},[i("p",[t._v(t._s(t.nyc.weather[0].main))]),t._v(" "),i("img",{staticClass:"icon-large",attrs:{alt:"",src:"Weather-App-Coding-Test/static/"+t.nyc.weather[0].main+".svg"}})]),t._v(" "),i("div",{staticClass:"time"},[i("p",{staticClass:"time"},[t._v(t._s(t.calcTime(-4)))])]),t._v(" "),i("div",{staticClass:"temps"},[i("p",{staticClass:"temp"},[t._v(t._s(t.nyc.main.temp.toFixed(0))+"°")]),t._v(" "),i("div",{staticClass:"temp-high-low"},[i("p",{staticClass:"temp-min"},[t._v(t._s(t.nyc.main.temp_min.toFixed(0))+"°")]),t._v(" "),i("p",{staticClass:"temp-high"},[t._v(t._s(t.nyc.main.temp_max.toFixed(0))+"°")])])]),t._v(" "),i("div",{staticClass:"additional-info"},[i("div",{staticClass:"x-scroller"},[i("div",{staticClass:"sun"},[i("div",[t._m(0),t._v(" "),i("p",[t._v("Sunrise")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.getTime(t.nyc.sys.sunrise,0,0)))])])]),t._v(" "),i("div",{staticClass:"sun"},[i("div",[t._m(1),t._v(" "),i("p",[t._v("Sunset")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.getTime(t.nyc.sys.sunset,0,0)))])])]),t._v(" "),i("div",{staticClass:"wind"},[i("div",[t._m(2),t._v(" "),i("p",[i("b",[t._v(t._s(t.getWindDirection(t.nyc.wind.deg)))]),t._v(" Wind ")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.nyc.wind.speed)+" mph")])])]),t._v(" "),i("div",{staticClass:"humidity"},[i("div",[t._m(3),t._v(" "),i("p",[t._v("Humidity")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.nyc.main.humidity)+" %")])])]),t._v(" "),i("div",{staticClass:"pressure"},[i("div",[t._m(4),t._v(" "),i("p",[t._v("Pressure")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.nyc.main.pressure)+" hpa")])])])])])]):t._e()},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136741.svg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136742.svg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136743.svg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136750.svg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136751.svg"}})])}]};var p=i("VU/8")(u,d,!1,function(t){i("eQ0f")},"data-v-0d6a88d5",null).exports,h={props:["kathmandu","directions"],data:function(){return{day:!1,evening:!1,night:!1}},methods:{getTime:function(t,s,i){var a=new Date(1e3*t);a.setHours(a.getHours()+s),a.setMinutes(a.getMinutes()+i);var e=a.getHours(),n=a.getMinutes();return n<10&&(n="0"+n),e>12&&e<24?e+":"+n+" pm":e+":"+n+" am"},calcTime:function(t){var s=new Date,i=s.getTime()+6e4*s.getTimezoneOffset(),a=new Date(i+36e5*t).toLocaleString().substr(12,5),e=a.substr(0,2);return e>6&&e<17?(this.day=!0,this.morning=!1,this.night=!1):e>16&&e<20?(this.evening=!0,this.day=!1,this.night=!1):(this.night=!0,this.day=!1,this.evening=!1),a},getWindDirection:function(t){return(t+=22.5)<0?t=360-Math.abs(t)%360:t%=360,["N","NE","E","SE","S","SW","W","NW"][parseInt(t/45)]}}},g={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.kathmandu?i("div",{staticClass:"main",class:{day:t.day,evening:t.evening,night:t.night}},[i("div",{staticClass:"controls"},[i("router-link",{attrs:{to:"/"}},[i("i",{staticClass:"fas fa-arrow-circle-left fa-2x"})]),t._v(" "),i("p",{staticClass:"title"},[t._v(t._s(t.kathmandu.name))])],1),t._v(" "),i("div",{staticClass:"conditions"},[i("p",[t._v(t._s(t.kathmandu.weather[0].main))]),t._v(" "),i("img",{staticClass:"icon-large",attrs:{alt:"",src:"Weather-App-Coding-Test/static/"+t.kathmandu.weather[0].main+".svg"}})]),t._v(" "),i("div",{staticClass:"time"},[i("p",{staticClass:"time"},[t._v(t._s(t.calcTime(5.76)))])]),t._v(" "),i("div",{staticClass:"temps"},[i("p",{staticClass:"temp"},[t._v(t._s(t.kathmandu.main.temp.toFixed(0))+"°")]),t._v(" "),i("div",{staticClass:"temp-high-low"},[i("p",{staticClass:"temp-min"},[t._v(t._s(t.kathmandu.main.temp_min.toFixed(0))+"°")]),t._v(" "),i("p",{staticClass:"temp-high"},[t._v(t._s(t.kathmandu.main.temp_max.toFixed(0))+"°")])])]),t._v(" "),i("div",{staticClass:"additional-info"},[i("div",{staticClass:"x-scroller"},[i("div",{staticClass:"sun"},[i("div",[t._m(0),t._v(" "),i("p",[t._v("Sunrise")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.getTime(t.kathmandu.sys.sunrise,9,45)))])])]),t._v(" "),i("div",{staticClass:"sun"},[i("div",[t._m(1),t._v(" "),i("p",[t._v("Sunset")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.getTime(t.kathmandu.sys.sunset,9,45)))])])]),t._v(" "),i("div",{staticClass:"wind"},[i("div",[t._m(2),t._v(" "),i("p",[i("b",[t._v(t._s(t.getWindDirection(t.kathmandu.wind.deg)))]),t._v(" Wind ")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.kathmandu.wind.speed)+" mph")])])]),t._v(" "),i("div",{staticClass:"humidity"},[i("div",[t._m(3),t._v(" "),i("p",[t._v("Humidity")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.kathmandu.main.humidity)+" %")])])]),t._v(" "),i("div",{staticClass:"pressure"},[i("div",[t._m(4),t._v(" "),i("p",[t._v("Pressure")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.kathmandu.main.pressure)+" hpa")])])])])])]):t._e()},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136741.svg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136742.svg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136743.svg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136750.svg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136751.svg"}})])}]};var C=i("VU/8")(h,g,!1,function(t){i("aIRK")},"data-v-192f468a",null).exports,f={props:["mumbai","directions"],data:function(){return{day:!1,evening:!1,night:!1}},methods:{getTime:function(t,s,i){var a=new Date(1e3*t);a.setHours(a.getHours()+s),a.setMinutes(a.getMinutes()+i);var e=a.getHours(),n=a.getMinutes();return n<10&&(n="0"+n),e>12&&e<24?e+":"+n+" pm":e+":"+n+" am"},calcTime:function(t){var s=new Date,i=s.getTime()+6e4*s.getTimezoneOffset(),a=new Date(i+36e5*t).toLocaleString().substr(12,5),e=a.substr(0,2);return e>6&&e<17?(this.day=!0,this.morning=!1,this.night=!1):e>16&&e<20?(this.evening=!0,this.day=!1,this.night=!1):(this.night=!0,this.day=!1,this.evening=!1),a},getWindDirection:function(t){return(t+=22.5)<0?t=360-Math.abs(t)%360:t%=360,["N","NE","E","SE","S","SW","W","NW"][parseInt(t/45)]}}},y={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.mumbai?i("div",{staticClass:"main",class:{day:t.day,evening:t.evening,night:t.night}},[i("div",{staticClass:"controls"},[i("router-link",{attrs:{to:"/"}},[i("i",{staticClass:"fas fa-arrow-circle-left fa-2x"})]),t._v(" "),i("p",{staticClass:"title"},[t._v(t._s(t.mumbai.name))])],1),t._v(" "),i("div",{staticClass:"conditions"},[i("p",[t._v(t._s(t.mumbai.weather[0].main))]),t._v(" "),i("img",{staticClass:"icon-large",attrs:{alt:"",src:"Weather-App-Coding-Test/static/"+t.mumbai.weather[0].main+".svg"}})]),t._v(" "),i("div",{staticClass:"time"},[i("p",{staticClass:"time"},[t._v(t._s(t.calcTime(5.5)))])]),t._v(" "),i("div",{staticClass:"temps"},[i("p",{staticClass:"temp"},[t._v(t._s(t.mumbai.main.temp.toFixed(0))+"°")]),t._v(" "),i("div",{staticClass:"temp-high-low"},[i("p",{staticClass:"temp-min"},[t._v(t._s(t.mumbai.main.temp_min.toFixed(0))+"°")]),t._v(" "),i("p",{staticClass:"temp-high"},[t._v(t._s(t.mumbai.main.temp_max.toFixed(0))+"°")])])]),t._v(" "),i("div",{staticClass:"additional-info"},[i("div",{staticClass:"x-scroller"},[i("div",{staticClass:"sun"},[i("div",[t._m(0),t._v(" "),i("p",[t._v("Sunrise")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.getTime(t.mumbai.sys.sunrise,9,31)))])])]),t._v(" "),i("div",{staticClass:"sun"},[i("div",[t._m(1),t._v(" "),i("p",[t._v("Sunset")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.getTime(t.mumbai.sys.sunset,9,31)))])])]),t._v(" "),i("div",{staticClass:"wind"},[i("div",[t._m(2),t._v(" "),i("p",[i("b",[t._v(t._s(t.getWindDirection(t.mumbai.wind.deg)))]),t._v(" Wind ")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.mumbai.wind.speed)+" mph")])])]),t._v(" "),i("div",{staticClass:"humidity"},[i("div",[t._m(3),t._v(" "),i("p",[t._v("Humidity")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.mumbai.main.humidity)+" %")])])]),t._v(" "),i("div",{staticClass:"pressure"},[i("div",[t._m(4),t._v(" "),i("p",[t._v("Pressure")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.mumbai.main.pressure)+" hpa")])])])])])]):t._e()},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136741.svg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136742.svg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136743.svg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136750.svg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136751.svg"}})])}]};var b=i("VU/8")(f,y,!1,function(t){i("qCDn")},"data-v-ba5d18c6",null).exports,k={props:["ubud","directions"],data:function(){return{day:!1,evening:!1,night:!1}},methods:{getTime:function(t,s,i){var a=new Date(1e3*t);a.setHours(a.getHours()+s),a.setMinutes(a.getMinutes()+i);var e=a.getHours(),n=a.getMinutes();return n<10&&(n="0"+n),e>12&&e<24?e+":"+n+" pm":e+":"+n+" am"},calcTime:function(t){var s=new Date,i=s.getTime()+6e4*s.getTimezoneOffset(),a=new Date(i+36e5*t).toLocaleString().substr(12,5),e=a.substr(0,2);return e>=6&&e<17?(this.day=!0,this.morning=!1,this.night=!1):e>16&&e<20?(this.evening=!0,this.day=!1,this.night=!1):(this.night=!0,this.day=!1,this.evening=!1),a},getWindDirection:function(t){return(t+=22.5)<0?t=360-Math.abs(t)%360:t%=360,["N","NE","E","SE","S","SW","W","NW"][parseInt(t/45)]}}},w={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.ubud?i("div",{staticClass:"main",class:{day:t.day,evening:t.evening,night:t.night}},[i("div",{staticClass:"controls"},[i("router-link",{attrs:{to:"/"}},[i("i",{staticClass:"fas fa-arrow-circle-left fa-2x"})]),t._v(" "),i("p",{staticClass:"title"},[t._v(t._s(t.ubud.name))])],1),t._v(" "),i("div",{staticClass:"conditions"},[i("p",[t._v(t._s(t.ubud.weather[0].main))]),t._v(" "),i("img",{staticClass:"icon-large",attrs:{alt:"",src:"Weather-App-Coding-Test/static/"+t.ubud.weather[0].main+".svg"}})]),t._v(" "),i("div",{staticClass:"time"},[i("p",{staticClass:"time"},[t._v(t._s(t.calcTime(8)))])]),t._v(" "),i("div",{staticClass:"temps"},[i("p",{staticClass:"temp"},[t._v(t._s(t.ubud.main.temp.toFixed(0))+"°")]),t._v(" "),i("div",{staticClass:"temp-high-low"},[i("p",{staticClass:"temp-min"},[t._v(t._s(t.ubud.main.temp_min.toFixed(0))+"°")]),t._v(" "),i("p",{staticClass:"temp-high"},[t._v(t._s(t.ubud.main.temp_max.toFixed(0))+"°")])])]),t._v(" "),i("div",{staticClass:"additional-info"},[i("div",{staticClass:"x-scroller"},[i("div",{staticClass:"sun"},[i("div",[t._m(0),t._v(" "),i("p",[t._v("Sunrise")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.getTime(t.ubud.sys.sunrise,12,0)))])])]),t._v(" "),i("div",{staticClass:"sun"},[i("div",[t._m(1),t._v(" "),i("p",[t._v("Sunset")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.getTime(t.ubud.sys.sunset,12,0)))])])]),t._v(" "),i("div",{staticClass:"wind"},[i("div",[t._m(2),t._v(" "),i("p",[i("b",[t._v(t._s(t.getWindDirection(t.ubud.wind.deg)))]),t._v(" Wind ")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.ubud.wind.speed)+" mph")])])]),t._v(" "),i("div",{staticClass:"humidity"},[i("div",[t._m(3),t._v(" "),i("p",[t._v("Humidity")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.ubud.main.humidity)+" %")])])]),t._v(" "),i("div",{staticClass:"pressure"},[i("div",[t._m(4),t._v(" "),i("p",[t._v("Pressure")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.ubud.main.pressure)+" hpa")])])])])])]):t._e()},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136741.svg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136742.svg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136743.svg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136750.svg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"icon-small",attrs:{alt:"",src:"https://image.flaticon.com/icons/svg/136/136751.svg"}})])}]};var E=i("VU/8")(k,w,!1,function(t){i("yqW7")},"data-v-281fcc66",null).exports;a.a.use(r.a);var x=new r.a({mode:"history",routes:[{path:"*",redirect:"/Weather-App-Coding-Test/"},{path:"/Weather-App-Coding-Test/",name:"Home",component:v},{path:"Weather-App-Coding-Test/cork",name:"Cork",component:_,props:!0},{path:"Weather-App-Coding-Test/nyc",name:"NYC",component:p,props:!0},{path:"Weather-App-Coding-Test/kathmandu",name:"Kathmandu",component:C,props:!0},{path:"Weather-App-Coding-Test/mumbai",name:"Mumbai",component:b,props:!0},{path:"Weather-App-Coding-Test/ubud",name:"Ubud",component:E,props:!0}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:x,components:{App:c},template:"<App/>"})},aIRK:function(t,s){},eQ0f:function(t,s){},"hL/0":function(t,s){},keeM:function(t,s){},qCDn:function(t,s){},yqW7:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.11660c34af898d9c4749.js.map