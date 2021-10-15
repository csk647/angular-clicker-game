import { Item } from '../class/item';
import { Monster } from '../class/monster';
import { User } from '../class/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent implements OnInit {
  user = new User();
  monster = new Monster();
  item = new Item();

  constructor() { }

  ngOnInit(): void {
  }

  attack() {
    this.user.addGold = this.monster.hit(this.user.getPower);
  }
  buyItem() {
    this.user.buyItem = this.item.purchase(this.user.getGold);
  }
}
