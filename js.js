
class Api {
    //mikä tätä vaivaa
        
      constructor(rootUrl) {
          this.rootUrl = rootUrl;
          this.cache = new Map();
      }
      
        async Get(path) {
          let url = this.rootUrl + path;
          // jos kyseinen url 
        if(this.cache.has(url)) {
            log(`[API]: Cache result found for: ''${url}''`);
            return this.cache.get(url);
        }
        
        log(`[API]: Requesting: ''${url}''`);
        return fetch(url).then((res) => {
            if(res.status != 200) {
              throw res;
          }
            let json = res.json();
          this.cache.set(url, json);
                return json;
        })
      }
      
    }
    //jaa
    let api = new Api("https://reqres.in/api/");

    api.Get("users?page=2").then((res) => {
        log("[OUTPUT]:")
        log(JSON.stringify(res));
      log("-----------------------------------")
    })