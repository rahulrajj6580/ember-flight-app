import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SearchBoxComponent extends Component {
  @tracked isCardVisible = false;
  @tracked adultCount = 0;

  @action
  showCard() {
    this.isCardVisible = !this.isCardVisible;
  }

  @action
  addAdult() {
    this.adultCount++;
  }

  @action
  subtractAdult() {
    if (this.adultCount > 0) {
      this.adultCount--;
    }
  }
}
