import { MenuDataService } from './../../../../core/services/menu-data.service';
import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  visible = true;
  items: MenuItem[] = [];

  constructor(private menuDataService: MenuDataService) {}

  ngOnInit(): void {
    this.items = this.menuDataService.getMenuList();
  }
}
