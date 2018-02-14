# project4


scope of the app/website
    go on website and it will use your location to find nearby washrooms
    <!-- maybe a standard radius set up? -->

feature add on
    allow user to filter thru the type of washroom
        public, establishment, rating(eventually), accessibilty
    directions?

API
google nearby search
    spits out nearby places, narrow with types
        fastfood, coffee
refuge restrooms search by location
    spit out restroom based on lat lng values and we can alter radius as well
gov't
    parks
ttc
    subway stations with bathrooms in them
google map
    display results with interactive map, multiple markers



<!-- TO DO -->


psudocode
- retrieve info from google place nearby based on lat long (focus on toronto for now)
    - filter for locations through type and price level


- use user location as lat long input
- embed map with customized markers


BASIC PSEUDO CODE

RETRIEVE USER LOCATIONS API
    USE LOCATION DATA (LAT LONG) PUT IT INTO THE AJAX REQUEST 

USE LAT LONG VALUES FROM USER LOCATION AND FILTER THRU CERTAIN TYPES OF ESTABLSIHMENTS (5) AS WELL AS PRICE POINTS
IF WE HAVE TIME INCLUDE THE SAME VALUES ONTO THE REFUGE WASHROOM API

USING THE FILTER RESULTS IT WILL GENNERATE MARKERS REFLECTING THE SEARCH RESULTS

WHEN USER SELECTS MARKER, ADDITIONAL INFO WILL SHOW 





