import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import GetCustomerQuery from 'graphql-demo/gql/queries/customer.graphql';

export default class CustomerRoute extends Route {
  @service('apollo') apollo;

  async model({ customer_id }) {
    let { customer } = await this.apollo.query({
      query: GetCustomerQuery,
      variables: { id: customer_id },
    });

    return customer;
  }
}
