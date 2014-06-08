Dota2 = function(apikey) {
  return {
    apikey: apikey,
    matchHistory: function(filters){
      if (filters == undefined) { 
        filters = {}; 
      }
      filters["key"] = this.apikey;
      var url = "https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/";
      return HTTP.get(url, {params: filters}).data.result;
    }
  }
}
