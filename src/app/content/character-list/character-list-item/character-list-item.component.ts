import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FireApiService } from 'src/app/services/fire-api.service';
import { character, characterWithId } from '../../models/character.model';

@Component({
  selector: 'app-character-list-item',
  templateUrl: './character-list-item.component.html',
  styleUrls: ['./character-list-item.component.scss'],
})
export class CharacterListItemComponent implements OnInit {
  @Input() character: characterWithId;
  @Output() itemDeleted=new EventEmitter();

  constructor(private router: Router, private fireApiService: FireApiService) {}

  ngOnInit() {}

  goToDetails(id: string) {
    this.router.navigate([`content/details/${id}`]);
  }

  deleteCharacter(id: string) {
    this.fireApiService.deleteCharacter(id)
    this.itemDeleted.emit("deleted")
  }

}
