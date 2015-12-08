#Shadowrun API

###WARNING: THIS API IS IN VERY EARLY ALPHA

## Endpoints

All routes begin with /api/alpha

#### GET Characters

* /characters => all characters

#### GET Items

* /items => all items

  ##### GET 'Ware

  * /items/ware => all cyberware and bioware
  * /items/ware/:name => named 'ware
  * /items/ware/:type => all 'ware of the given type

  ##### GET Weapons

  * /items/weapons => all weapons
  * /items/weapons/:name => named weapon
  * /items/ware/:type => all weapons of the given type

#### GET Skills

* /skills => all skills
* /skills/:name => named skill
* /skills/:type => all skills of the given type
