var Dota2 = function(apikey){
  this.apikey = apikey;
}

Dota2.prototype.matchHistory = function(filters){
  filters["key"] = this.apikey;
  var url = "https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/";
  return HTTP.get(url, {data: filters}).data;
}


