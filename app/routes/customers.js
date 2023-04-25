import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import GetCustomersQuery from 'graphql-demo/gql/queries/customers.graphql';

export default class CustomersRoute extends Route {
  @service('apollo') apollo;

  async model() {
    const result = await this.apollo.query({ query: GetCustomersQuery });
    return result.customers;
  }
}
