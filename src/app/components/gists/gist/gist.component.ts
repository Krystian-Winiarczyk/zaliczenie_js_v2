import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gist',
  templateUrl: './gist.component.html',
  styleUrls: ['./gist.component.css']
})
export class GistComponent implements OnInit {
  @Input() gist: any;

  constructor() { }

  ngOnInit(): void {
  }

}
