import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface KPI {
  titulo: string;
  valor: number;
}

interface EstadoDistribucion {
  estado: string;
  cantidad: number;
  porcentaje: number;
  color: string;
}

interface UltimoPaquete {
  codigo: string;
  destinatario: string;
  estado: string;
  fecha: string;
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
    { titulo: 'Demorados', valor: 9 },
    { titulo: 'Reclamos abiertos', valor: 6 }
  ];

  distribucionEstados: EstadoDistribucion[] = [
    { estado: 'En tránsito', cantidad: 124, porcentaje: 45, color: 'var(--color-primary)' },
    { estado: 'Entregado', cantidad: 98, porcentaje: 36, color: 'var(--color-accent)' },
    { estado: 'Pendiente', cantidad: 35, porcentaje: 13, color: 'var(--color-secondary)' },
    { estado: 'Demorado', cantidad: 18, porcentaje: 6, color: '#F59E0B' }
  ];

  ultimosPaquetes: UltimoPaquete[] = [
    { codigo: 'PKG-001', destinatario: 'Juan Pérez', estado: 'En tránsito', fecha: '2024-01-15' },
    { codigo: 'PKG-002', destinatario: 'María González', estado: 'Entregado', fecha: '2024-01-14' },
    { codigo: 'PKG-003', destinatario: 'Pedro Sánchez', estado: 'Pendiente', fecha: '2024-01-16' },
    { codigo: 'PKG-004', destinatario: 'Laura Fernández', estado: 'En tránsito', fecha: '2024-01-15' },
    { codigo: 'PKG-005', destinatario: 'Diego Torres', estado: 'Demorado', fecha: '2024-01-13' }
  ];

  accesosRapidos: AccesoRapido[] = [
    { nombre: 'Paquetes', ruta: '/paquetes' },
    { nombre: 'Rutas', ruta: '/rutas' },
    { nombre: 'Reclamos', ruta: '/reclamos' }
  ];

  getEstadoClass(estado: string): string {
    const estadoMap: { [key: string]: string } = {
      'En tránsito': 'estado-transito',
      'Entregado': 'estado-entregado',
      'Pendiente': 'estado-pendiente',
      'Demorado': 'estado-demorado'
    };
    return estadoMap[estado] || '';
  }
}
