import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TesisEdi');
  mostrarNotificaciones: boolean = false;

  notificaciones: string[] = [
    '3 paquetes están demorados',
    'Nuevo reclamo registrado',
    'Paquete #PKG001 fue entregado',
    '5 paquetes en tránsito requieren atención',
    'Reclamo #RCL-002 resuelto'
  ];

  toggleNotificaciones(): void {
    this.mostrarNotificaciones = !this.mostrarNotificaciones;
  }
}
