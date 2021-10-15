export class Item {
    // 과제 첫 코드
    // power: number = 1;
    // price:number = 1;
    // itemLevel:number = 1; 

    // getValue = this.power;

    // getPrice = this.price;

    // getItemLevel = this.itemLevel;
    private power: number = 1;
    private price: number = 1;
    private level: number = 1;

    get getPrice(): number {
        return this.price;
    }
    get getValue():number {
        return this.power;
    }
    get getItemPower(): number {
        return this.power;
    }

    levelUp() {
        this.level += 1;
        this.price = this.level * this.price;
        this.power = this.level * this.power;
    }

    purChase(gold: number) {
        const prePrice = this.price;
        const prePower = this.power;
        if (prePrice <= gold) {
            this.levelUp();
            return { value: prePower, price: prePrice }
        } else {
            return { value: 0, price: 0 }
        }
    }

}