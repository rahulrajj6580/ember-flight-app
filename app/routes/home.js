import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default class HomeRoute extends Route {

  async model() {
    let response = await fetch('/api/mock-data.json');
    let { data } = await response.json();
    console.log(data);
    return data.map((model) => {
      let { attributes } = model;
      return { ...attributes };
    });
  }
  
}
// @service store
// async model() {
//     return {
//       title : 'Get offers',
//       image: 'https://offercdn.paytm.com/blog/2021/12/welcomeflight-tnc-app.png',
//       description: '14% Cash back for the first flight booning'
//     }
//     return this.store.findAll('content');
// let response = await fetch('/api/mock-data.json');
// let {data}= await response.json();
// return data.map((x) =>{
//     let {attributes} = x;
//     return {...attributes}
// })
// let response = await fetch('/api/mock-data.json');
// let parsed = await response.json();
// return parsed;
