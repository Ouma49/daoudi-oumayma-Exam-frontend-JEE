import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="login-container">
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="login-form">
        <h2>Connexion</h2>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            formControlName="email"
            class="form-control"
            [ngClass]="{'is-invalid': submitted && f['email'].errors}"
          />
          <div *ngIf="submitted && f['email'].errors" class="invalid-feedback">
            <div *ngIf="f['email'].errors['required']">Email requis</div>
            <div *ngIf="f['email'].errors['email']">Email invalide</div>
          </div>
        </div>

        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            formControlName="password"
            class="form-control"
            [ngClass]="{'is-invalid': submitted && f['password'].errors}"
          />
          <div *ngIf="submitted && f['password'].errors" class="invalid-feedback">
            <div *ngIf="f['password'].errors['required']">Mot de passe requis</div>
          </div>
        </div>

        <div class="form-group">
          <button [disabled]="loading" class="btn btn-primary">
            <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>
            Se connecter
          </button>
        </div>

        <div *ngIf="error" class="alert alert-danger mt-3">{{error}}</div>
      </form>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: calc(100vh - 76px);
      background-color: #f5f5f5;
    }
    .login-form {
      width: 100%;
      max-width: 400px;
      padding: 30px;
      background: white;
      border-radius: 5px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .form-group {
      margin-bottom: 20px;
    }
    .form-control {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .btn-primary {
      width: 100%;
      padding: 10px;
    }
    .is-invalid {
      border-color: #dc3545;
    }
    .invalid-feedback {
      color: #dc3545;
      font-size: 0.875em;
      margin-top: 5px;
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.f['email'].value, this.f['password'].value)
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: error => {
          this.error = error.error.message || 'Une erreur est survenue';
          this.loading = false;
        }
      });
  }
} 