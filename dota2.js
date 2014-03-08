Dota2 = function(apikey){
  this.apikey = apikey;
}

Dota2.prototype.matchHistory = function(filters){
  if(filters == undefined){ filters = {}; }
  filters["key"] = this.apikey;
  console.log(filters);
  var url = "https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/";
  return HTTP.get(url, {params: filters}).data.result;
}
