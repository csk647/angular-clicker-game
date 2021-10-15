export class User {
  // 과제 첫 코드
  // userPower: number = 1;
  // userGold: number = 0;

  // getPower = this.userPower;

  // getGold = this.userGold;

  //   get power(): number {
  //     return this.userPower;
  //   }

  //   set power(value: number) {
  //     this.userPower = this.userPower + value;
  //   }

  //   updatePower(arg:number){
  //     this.userPower = this.userPower + arg
  //   }

  //   updateGold(arg:number){
  //     this.userGold = this.userGold + arg;
  //   }

  private power: number = 1;
  private gold: number = 0;

  /**
   * 변수가 private 이니 get set으로 값을 받고 설정한다.
   *
   * @readonly
   * @type {number}
   * @memberof User
   */
  get getPower(): number {
    return this.power;
  }

  // 아이템 사고 power up
  set addPower(power:number){
    console.log('아이템 구매! 파워 들어온다', power)
    this.power += power;
  }

  // 골드 값 다른 곳에서 받을 함수
  get getGold(): number {
    return this.gold;
  }

  // 몬스터 잡고 골드 얻음
  // 몬스터 잡으면 gold, 못잡으면 0이 gold 인자로 들어온다.
  set addGold(gold:number) {
    this.gold += gold;
  }

  // 골드 사용
  set takeGold(gold:number){
    this.gold -= gold;
  }

  set buyItem(item: {value:number, price:number }){
    this.addPower = item.value;
    this.takeGold = item.price;
  }

  
}
