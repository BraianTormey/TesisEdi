import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface KPI {
  titulo: string;
  valor: number;
}

interface AccesoRapido {
  nombre: string;
  ruta: string;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.scss']
})
export class InicioComponent {
  kpis: KPI[] = [
    { titulo: 'Paquetes en tránsito', valor: 124 },
    { titulo: 'Entregados hoy', valor: 58 },
    { titulo: 'Reclamos pendientes', valor: 6 },
    { titulo: 'Operadores activos', valor: 3 }
  ];

  accesosRapidos: AccesoRapido[] = [
    { nombre: 'Paquetes', ruta: '/paquetes' },
    { nombre: 'Rutas', ruta: '/rutas' },
    { nombre: 'Reclamos', ruta: '/reclamos' }
  ];
}
