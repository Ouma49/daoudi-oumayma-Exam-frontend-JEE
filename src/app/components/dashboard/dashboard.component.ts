import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="dashboard">
      <h2>Tableau de bord</h2>
      
      <div class="row mt-4">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Clients</h5>
              <p class="card-text">Gérez vos clients et leurs informations</p>
              <a routerLink="/customers" class="btn btn-primary">Voir les clients</a>
            </div>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Crédits</h5>
              <p class="card-text">Gérez les demandes de crédit et leur statut</p>
              <a routerLink="/credits" class="btn btn-primary">Voir les crédits</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 20px;
    }
    .card {
      margin-bottom: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .card-title {
      color: #333;
      margin-bottom: 15px;
    }
    .card-text {
      color: #666;
      margin-bottom: 20px;
    }
  `]
})
export class DashboardComponent {
} 