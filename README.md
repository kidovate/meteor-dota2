meteor-dota2
============

Dota2 api for meteor

**Usage**

```
var api = Dota2("YOUR_STEAM_API_KEY");

//Fetches last 25 maximum public matches
//All options are optional
api.matchHistory({
  player_name: "noob",
  hero_id=id, //Hero IDS are in dota/scripts/npc/npc_heros.txt
  skill: 0, //0 for any 1 for normal 2 for high 3 for very high
  date_min: date, //unix time format
  date_max: date, //unix time format
  account_id: steamid, //STEAM account ID number portion (not entire steam ID)
  league_id: leagueid, //ID of a league, for example TI3
  start_at_match_id: id, //Start at a match ID
  matches_requested: 25 //Request 25 matches
});
```
