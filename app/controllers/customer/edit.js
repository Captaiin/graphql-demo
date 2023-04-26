import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import EditCustomerMutation from 'graphql-demo/gql/mutations/edit-customer.graphql';

export default class CustomerEditController extends Controller {
  @service('apollo') apollo;

  @service('router') router;

  @tracked name = this.model.name;
  @tracked email = this.model.email;
  @tracked age = this.model.age;

  @action
  async editCustomer() {
    let { editCustomer } = await this.apollo.mutate({
      mutation: EditCustomerMutation,
      variables: {
        id: this.model.id,
        name: this.name,
        email: this.email,
        age: this.age,
      },
    });

    this.router.transitionTo('customer', editCustomer);
  }
}
