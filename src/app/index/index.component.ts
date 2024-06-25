import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { citations } from '../data/mockcitation';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})

export class IndexComponent implements OnInit {

  citationData = citations;

  ngOnInit(): void {
    this.citationData;
    console.log(this.citationData);
  }
}