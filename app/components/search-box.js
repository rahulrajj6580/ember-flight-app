import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SearchBoxComponent extends Component {
  @tracked isCardVisible = false;
  @tracked adultCount = 0;
  @tracked childrenCount = 0;
  @tracked infantCount = 0;

  @action
  showCard() {
    this.isCardVisible = !this.isCardVisible;
  }

  @action
  addAdult() {
    if (this.adultCount < 15) {
      this.adultCount++;
    }
  }

  @action
  addChildren() {
    if (this.childrenCount < 15) {
      this.childrenCount++;
    }
  }

  @action
  addInfant() {
    if (this.infantCount < 15) {
      this.infantCount++;
    }
  }

  @action
  subtractAdult() {
    if (this.adultCount > 0) {
      this.adultCount--;
    }
  }

  @action
  subtractChildren() {
    if (this.childrenCount > 0) {
      this.childrenCount--;
    }
  }

  @action
  subtractInfant() {
    if (this.infantCount > 0) {
      this.infantCount--;
    }
  }
}
