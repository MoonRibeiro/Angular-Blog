import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:string= "https://cinepop.com.br/wp-content/uploads/2022/05/kamala.jpg"

  @Input()
  cardTitle:string= "NOVA SÉRIE ANUNCIADA"
  
  @Input()
  Id:string="0"


  constructor(){ }

  ngOnInit(): void{
  }
}
