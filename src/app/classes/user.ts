export class User {
  userPower: number = 1;
  userGold: number = 0;

  getPower = this.userPower;

  getGold = this.userGold;

  get getPowerFunc() {
    return this.userPower;
  }

  // 고민 : 함수를 써야 하나?

  //   get power(): number {
  //     return this.userPower;
  //   }

  //   set power(value: number) {
  //     this.userPower = this.userPower + value;
  //   }
}
