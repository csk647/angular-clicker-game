export class User {
  // private은 기입하지 않아도 되나 class는 변수를 private으로 작성하는 경향이 있어 샘플로 넣었습니다.
    private power: number = 1;
    private wallet: number = 0;

    set addPower(power: number) {
      this.power += power;
    }
    get getPower(): number {
      return this.power;
    }

    set buyItem(item: {value: number, price: number}) {
      this.addPower = item.value;
      this.takeGold = item.price;
    }

    set takeGold(gold: number) {
      this.wallet -= gold;
    }
    set addGold(gold: number) {
      this.wallet += gold;
    }

    get getGold(): number {
      return this.wallet;
    }


}
