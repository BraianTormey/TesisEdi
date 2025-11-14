import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Paquete {
  numeroPaquete: string;
  empresa: string;
  provincia: string;
  localidad: string;
  destinatario: string;
  numeroCamion: string;
  chofer: string;
  fechaEnvio: string;
  fechaEstimada: string;
  tipoPaquete: 'Frágil' | 'Normal' | 'Express';
  peso: number;
  estado: 'Pendiente' | 'En Envío' | 'Entregado';
}

@Component({
  selector: 'app-paquetes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paquetes.html',
  styleUrl: './paquetes.scss',
})
export class PaquetesComponent {
  ordenAscendente: boolean = true;

  paquetes: Paquete[] = [
    {
      numeroPaquete: 'PKG-001',
      empresa: 'Logística Express',
      provincia: 'Buenos Aires',
      localidad: 'La Plata',
      destinatario: 'Juan Pérez',
      numeroCamion: 'CAM-123',
      chofer: 'Carlos Rodríguez',
      fechaEnvio: '2024-01-15',
      fechaEstimada: '2024-01-18',
      tipoPaquete: 'Express',
      peso: 2.5,
      estado: 'En Envío'
    },
    {
      numeroPaquete: 'PKG-002',
      empresa: 'Transportes del Sur',
      provincia: 'Córdoba',
      localidad: 'Córdoba Capital',
      destinatario: 'María González',
      numeroCamion: 'CAM-456',
      chofer: 'Luis Martínez',
      fechaEnvio: '2024-01-20',
      fechaEstimada: '2024-01-22',
      tipoPaquete: 'Normal',
      peso: 5.0,
      estado: 'Pendiente'
    },
    {
      numeroPaquete: 'PKG-003',
      empresa: 'Distribuidora Norte',
      provincia: 'Santa Fe',
      localidad: 'Rosario',
      destinatario: 'Pedro Sánchez',
      numeroCamion: 'CAM-789',
      chofer: 'Ana López',
      fechaEnvio: '2024-01-10',
      fechaEstimada: '2024-01-12',
      tipoPaquete: 'Frágil',
      peso: 1.8,
      estado: 'Entregado'
    },
    {
      numeroPaquete: 'PKG-004',
      empresa: 'Logística Express',
      provincia: 'Mendoza',
      localidad: 'Mendoza Capital',
      destinatario: 'Laura Fernández',
      numeroCamion: 'CAM-234',
      chofer: 'Roberto Díaz',
      fechaEnvio: '2024-01-18',
      fechaEstimada: '2024-01-21',
      tipoPaquete: 'Normal',
      peso: 8.3,
      estado: 'En Envío'
    },
    {
      numeroPaquete: 'PKG-005',
      empresa: 'Transportes del Sur',
      provincia: 'Tucumán',
      localidad: 'San Miguel de Tucumán',
      destinatario: 'Diego Torres',
      numeroCamion: 'CAM-567',
      chofer: 'Sofía Ramírez',
      fechaEnvio: '2024-01-22',
      fechaEstimada: '2024-01-25',
      tipoPaquete: 'Express',
      peso: 3.2,
      estado: 'Pendiente'
    },
    {
      numeroPaquete: 'PKG-006',
      empresa: 'Distribuidora Norte',
      provincia: 'Salta',
      localidad: 'Salta Capital',
      destinatario: 'Carmen Ruiz',
      numeroCamion: 'CAM-890',
      chofer: 'Miguel Herrera',
      fechaEnvio: '2024-01-08',
      fechaEstimada: '2024-01-10',
      tipoPaquete: 'Frágil',
      peso: 4.7,
      estado: 'Entregado'
    }
  ];

  ordenarPorFechaEnvio(): void {
    this.ordenAscendente = !this.ordenAscendente;
    this.paquetes.sort((a, b) => {
      const fechaA = new Date(a.fechaEnvio).getTime();
      const fechaB = new Date(b.fechaEnvio).getTime();
      return this.ordenAscendente ? fechaA - fechaB : fechaB - fechaA;
    });
  }
}
