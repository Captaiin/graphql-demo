import Route from '@ember/routing/route';

export default class CustomerEditRoute extends Route {
  model() {
    return this.modelFor('customer');
  }
}
