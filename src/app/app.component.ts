import { Component } from '@angular/core';
import { User } from './classes/user';
import { Monster } from './classes/monster';
import { Item } from './classes/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-clicker-game';
  user = new User();
  monster = new Monster();
  item = new Item();

  constructor() {}

  attack() {
    // 고민 : 변수에 넣어서 쓰고 싶은데 어떻게 하면 좋을까?
    if (this.monster.getHp - this.user.getPower <= 0) {
      // 유저 gold에 몬스터 gold 더한다.
      this.user.getGold = this.user.getGold + this.monster.getGold;
      // 몬스터 레벨업
      // 몬스터의 hp와 gold 증가한 값으로 리셋
      this.monster.getMonsterLevel++;
      this.monster.getHp = 10 * this.monster.getMonsterLevel;
      this.monster.getGold++;
    } else {
      //몬스터 hp를 user power만큼 줄인다.
      this.monster.getHp = this.monster.getHp - this.user.getPower;
    }
  }

  buyItem() {
    if (this.user.getGold >= this.item.getPrice) {
      // 유저 - 골드는 쓰고 파워는 높이고.
      this.user.getGold = this.user.getGold - this.item.getPrice;
      this.user.getPower = this.user.getPower + this.item.getValue;
      // 아이템 - 골드, 파워 레벨 높이기
      this.item.getItemLevel = this.item.getItemLevel + 1;
      this.item.getValue = this.item.getValue + 1;
      this.item.getPrice = this.item.getPrice + 1;
    } else {
      alert(
        `Gold가 부족해 아이템을 구매할 수 없습니다. \n 보유골드 : ${
          this.user.getGold
        }, 필요골드 수 : ${this.item.getPrice - this.user.getGold}`
      );
    }
  }
}
