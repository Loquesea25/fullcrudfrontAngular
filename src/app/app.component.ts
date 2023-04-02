import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CiudadService } from './services/ciudad/ciudad.service';
import { PaisesService } from './services/pais/pais.service';
import { PersonaService } from './services/persona/persona.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  

  personaForm: FormGroup | undefined;

  constructor(
    public fb: FormBuilder,
    public ciudadService: CiudadService,
    public paisService: PaisesService,
    public personaService: PersonaService
    ){

    }

  ngOnInit(): void {
    this.personaForm = this.fb.group({
      namePersona : ['', Validators.required],
		lastNamePersona : ['', Validators.required],
		agePersona : ['', Validators.required],
		emailPersona : ['', Validators.required],
		pais : ['', Validators.required],
		ciudad : ['', Validators.required]
    })
  }
}


