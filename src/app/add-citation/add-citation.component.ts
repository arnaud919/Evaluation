import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { citations } from '../data/mockcitation';
import { CitationInterface } from '../citation';

@Component({
  selector: 'app-add-citation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-citation.component.html',
  styleUrl: './add-citation.component.css'
})
export class AddCitationComponent {

  public form:FormGroup = new FormGroup({
    citation: new FormControl(''),
    auteur: new FormControl('')
  });

  citationInterface:CitationInterface[] = []

  submit(){
    const formData = this.form.value;
    citations.push(formData);
  }
}
