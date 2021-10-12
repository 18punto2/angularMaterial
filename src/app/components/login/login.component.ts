import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loading=false;
form:FormGroup;
  constructor(private fb:FormBuilder,private _snackBar: MatSnackBar,private router:Router) {
    
    this.form=this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    });
   }

  ngOnInit(): void {
  }

  login(){
    const usuario=this.form.value.usuario;
    const password=this.form.value.password;
    
    if(usuario=='admin' && password=='123' ){
    this.load();
    }else{
      //no valida login
      this.error();
      this.form.reset();//limpia campos
    }
  }

  error(){
    this._snackBar.open('Usuario o contraseña incorrecta','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    });
  }
  load(){
    this.loading=true;
    setTimeout(() => {
      //redirect dashboard //rutas hijas
      this.router.navigate(['dashboard']);
    this.loading=false;  
    }, 1000);
  }
}
