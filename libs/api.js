
class Api {
  static token = null;

  static headers(){
    return {
      'Content-Type': 'application/json',
      'Authorization': 'JWT '+this.token,

    }
  }

  static get(route){
    return this.xhr(route, null, 'GET');
  }

  static put(route, params){
    return this.xhr(route, params, 'PUT');
  }

  static post(route, params){
    return this.xhr(route, params, 'POST');

  }

  static postGetImage(route, params){
    return this.xhrBlob(route, params, 'POST');
  }

  static delete(route, params){
    return this.xhr(route, params, 'DELETE');
  }

  static xhr(route, params, verb){
    const host = 'http://api.karrahandaz-app.ir/';
    const url = `${host}${route}`;
    let options = Object.assign({method: verb}, params ? {body:JSON.stringify(params)} : null);
    options.headers = Api.headers();
    console.log(options)
    return fetch(url, options).then( resp => {
        let json = resp.json();
        console.log(json)
        if(resp.ok){
            return json;
          }
          return json.then(err => {throw err});
    });
  }

  static xhrExternal(url,headers={"Content-Type": "application/json"},params={}, verb="POST"){
    let options = Object.assign({method: verb}, params ? {body:JSON.stringify(params)} : null);
    options.headers=headers;
    return fetch(url, options).then( resp => {
      if(resp.headers.map["content-type"] == 'image/png')
      {
      }else{

        let json = resp.json();
        if(resp.ok){
            return json;
          }
          return json.then(err => {throw err});
      }

    });
  }

}

export default Api
