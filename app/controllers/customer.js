import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import DeleteCustomerMutation from 'graphql-demo/gql/mutations/delete-customer.graphql';

export default class CustomerController extends Controller {
  @service('apollo') apollo;

  @service('router') router;

  @action
  async deleteCustomer(id) {
    await this.apollo.mutate({
      mutation: DeleteCustomerMutation,
      variables: { id },
    });

    this.router.transitionTo('customers');
  }
}
