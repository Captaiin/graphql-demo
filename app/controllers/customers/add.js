import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import AddCustomerMutation from 'graphql-demo/gql/mutations/add-customer.graphql';

export default class CustomersAddController extends Controller {
  @service('apollo') apollo;

  @tracked name;
  @tracked email;
  @tracked age;

  @action
  async addCustomer() {
    await this.apollo.mutate({
      mutation: AddCustomerMutation,
      variables: {
        name: this.name,
        email: this.email,
        age: parseInt(this.age),
      },
    });
  }
}
