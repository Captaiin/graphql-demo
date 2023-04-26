import Route from '@ember/routing/route';

export default class CustomersAddRoute extends Route {
  model() {
    return this.modelFor('customers');
  }
}
