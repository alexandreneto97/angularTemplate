import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';

@Directive({
  selector: '[maiorIdadeValidator]',
  providers: [{
    provide : NG_VALIDATORS,
    useExisting:MaiorIdadeDirective,
    multi: true
  }]
})


export class MaiorIdadeDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const dataNascimento = control.value;
    const anoNascimento = new Date(dataNascimento).getFullYear();
    const anoAtual = new Date().getFullYear();
    const anoNascMaior18 = anoNascimento+18;
    
    const ehMaior = anoNascMaior18 <= anoAtual;    
    
    return ehMaior ? null : {'maiorIdadeValidator' : true}
    
  }


}
