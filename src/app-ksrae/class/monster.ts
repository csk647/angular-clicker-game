
export class Monster {
  private hp: number = 10;
  private gold: number = 1;
  private level: number = 1;
  private currentHp = 10;
  private currentGold = 1;
  /**
   * return true => killed
   *
   * @param {number} power
   * @return {*}  {boolean}
   * @memberof Monster
   */
  hit(power: number): number {
    this.currentHp -= power;
    if(this.currentHp <= 0) {
      const preGold = this.getGold;
      this.levelUp();
      return preGold;
    }
    return 0;
  }
  get getHp(): number {
    return this.currentHp;
  }
  get getGold(): number {
    return this.currentGold;
  }
  levelUp() {
    this.level += 1;
    this.currentHp = Math.floor(this.level * this.hp * 1.4);
    this.currentGold = Math.floor(this.level * this.gold * 1.3);
  }
}

