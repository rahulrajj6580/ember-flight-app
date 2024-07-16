import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
  async model() {
    let response = await fetch('/api/mock-data.json');
    let { data } = await response.json();
    return data.map((model) => {
      let { attributes } = model;
      return { ...attributes };
    });
  }
}
