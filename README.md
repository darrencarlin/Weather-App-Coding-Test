# Weather-App-Coding-Test
Weather App for a coding test

* Best experience on mobile 

Features:

* Includes 5 city homepage with direct links to a more detailed view of each city.
* Updates weather icon based on current local weather.
* Sunset/Sunrise times are local based on city
* Wind speed / Direction 
* Provides local time for each city, the background is updated based on local time. day, evening, night gradient backgrounds. 


Steps taken: 

* Inital setup with my gulp based boilerplate. Playing around with the API while coming up with design ideas. 
* Setup as Vue.js project.
* Implemented function to get main data from API (temps,sunrise/sunset times,wind speed/direction, humidity, pressure).
* Implemented function to get local time for each city
    * this was a little challenging given the Date object gets local time by default.
* Implemented function to convert sunrise / sunset time to local time.
* Implemented function to get wind direction to flesh out detailed pages.
* Implemented desktop version.
* deployed to public github pages.

Todo:

* Refreshing the page causes 404 becuase of Vue Router on Github pages.
* There is a problem with the substr method on the github page not returning the right substr length for the time on the detailed pages, works fine on local machine.