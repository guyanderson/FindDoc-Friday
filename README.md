# _What's up Doc?!_

#### _Takes user symptom, return a list of doctors that can help. 7/1/17_

#### By _**Guy Anderson**_

## Description

_Simple program that only takes one user entry, a symptom. Program will then interface with the "Better Doctor API", and return a list of nearby doctors that can help with that issue._

## specs
| Behavior | Input | Output |
|---|---|---|
| Index page will display an entry for user entry of a medical symptom. | keyboard: bloody nose/ Click: Submit | Page returns picture, first and last name of a 'near by' doctor that can help with bloody noses. |
| Searching for a new symptom will clear previous search results. | keyboard: chipped nail/ Click: Submit | Clear bloody nose results, display chipped nail results. |
| If search will be limited to 20 results. | see above | No more than 20 doctors will be displayed. |
| Program will interface with the "Better Doctor API" to get a list of real doctors. |  see above | see above |
| No results found | See above | "Your search returned no results." |
| Free version of app only displays Doc pic and name. Paid version will give the user useful information like a contact number (to be developed later.)| none | none |

## Setup/Installation Requirements

* _Visit the BetterDoctor API site and click “Get a free API key”, follow instructions for getting a key._
* _Go to Github repository page._
* _Click the "download or clone" button and copy the link to FindDoc-Friday_
* _In your computers terminal type "git clone" & paste the copied link._
* _CD into FindDoc-Friday_
* _Open in atom_
* _create a file named .env in the top directory_
* _paste this in the file with your API Key:  exports.apiKey = "[your key here]";_
* _In terminal run _
* _$ npm install_
* _$ bower install_
* _$ gulp build_
* _$ gulp serve_
* _web site should deploy_
* _Hopefully you're not in need of medical attention, cuz this could take some time!_


## Known Bugs

* _Not all doctor pictures are displayed. This appears to be a incomplete database issue. Amateurs._
* _If no symptom is entered before clicking search, results will still be returned._

## Technologies Used

_HTML, JavaScript, gulp, bower, Better Doctor API_

### License

*I can't promise this app will return reliable results. Use at your own risk!*

Copyright (c) 2017 **_FunGuy Entertainment_**
