export class Monster {
    // 과제 첫 코드
    // monsterLevel:number = 1;
    // monsterHp:number = 10;
    // monsterGold:number = 1;

    // getHp = this.monsterHp;

    // getGold = this.monsterGold;

    // getMonsterLevel = this.monsterLevel;

    private hp: number = 10;
    private gold: number = 1;
    private level: number = 1;
    private currentHp = 10;
    private currentGold = 1;


    /**
     * monster를 때릴 때 마다 user의 addGold로 들어갈 인자를 return
     * hp - power
     * hp 가 0보다 작거나 같으면
     * 이전 gold를 preGold로 저장. return 전에 레벨업하고 이전 gold를 보내야 하니까.
     * levelUp 은 monster 레벨, hp, gold를 올려줌.
     *
     * @param {number} power
     * @return {*} 
     * @memberof Monster
     */
    hit(power:number){
        this.currentHp -= power;
        if(this.currentHp <= 0 ){
            const preGold = this.getGold;
            this.levelUp();
            return preGold
        }
        return 0;
    };

    get getGold(): number{
        return this.currentGold;
    };

    get getHp(): number {
        return this.currentHp;
    }

    get getMonsterLevel(): number {
        return this.level;
    }

    levelUp() {
        this.level += 1;
        this.currentHp = Math.floor(this.level * this.hp * 1.4);
        this.currentGold = this.level *  this.gold;
    }

}