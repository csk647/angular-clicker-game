export class Item {
  private price: number = 1;
  private value: number = 1;
  private level: number = 1;
  /**
   * true => purchased
   *
   * @param {number} gold
   * @return {*}  {boolean}
   * @memberof PowerItem
   */
  purchase(gold: number): any {
    const prePrice = this.price;
    const preValue = this.value;
    if(prePrice <= gold) {
      this.levelUp();
      return {value: preValue, price: prePrice};
    } else {
      return {value: 0, price: 0};
    }
  }
  get getPrice(): number {
    return this.price;
  }
  get getValue(): number {
    return this.value;
  }
  levelUp() {
    this.level += 1;
    this.price = Math.floor(this.level * this.price * 1.3);
    this.value = Math.floor(this.level * this.value * 1.2);
  }
}
