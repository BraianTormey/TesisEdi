import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface RutaSeguimiento {
  codigo: string;
  estado: 'En preparación' | 'En tránsito' | 'Demorado' | 'Entregado';
  provincia: string;
  localidad: string;
  direccionMaps: string;
}

@Component({
  selector: 'app-rutas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rutas.html',
  styleUrls: ['./rutas.scss']
})
export class RutasComponent {
  codigoIngresado: string = '';
  paqueteEncontrado: RutaSeguimiento | null = null;
  busquedaRealizada: boolean = false;

  constructor(private sanitizer: DomSanitizer) {}

  rutas: RutaSeguimiento[] = [
    {
      codigo: 'PKG001',
      estado: 'En tránsito',
      provincia: 'Buenos Aires',
      localidad: 'La Plata',
      direccionMaps: 'La Plata, Buenos Aires'
    },
    {
      codigo: 'PKG002',
      estado: 'En preparación',
      provincia: 'Córdoba',
      localidad: 'Córdoba Capital',
      direccionMaps: 'Córdoba Capital, Córdoba'
    },
    {
      codigo: 'PKG003',
      estado: 'Entregado',
      provincia: 'Santa Fe',
      localidad: 'Rosario',
      direccionMaps: 'Rosario, Santa Fe'
    },
    {
      codigo: 'PKG004',
      estado: 'Demorado',
      provincia: 'Mendoza',
      localidad: 'Mendoza Capital',
      direccionMaps: 'Mendoza Capital, Mendoza'
    },
    {
      codigo: 'PKG005',
      estado: 'En tránsito',
      provincia: 'Tucumán',
      localidad: 'San Miguel de Tucumán',
      direccionMaps: 'San Miguel de Tucumán, Tucumán'
    },
    {
      codigo: 'PKG006',
      estado: 'En preparación',
      provincia: 'Salta',
      localidad: 'Salta Capital',
      direccionMaps: 'Salta Capital, Salta'
    }
  ];

  consultarPaquete(): void {
    const codigo = this.codigoIngresado.trim().toUpperCase();
    if (!codigo) {
      this.paqueteEncontrado = null;
      this.busquedaRealizada = false;
      return;
    }

    this.busquedaRealizada = true;
    this.paqueteEncontrado = this.rutas.find(
      ruta => ruta.codigo.toUpperCase() === codigo
    ) || null;
  }

  getMapUrl(): SafeResourceUrl {
    if (!this.paqueteEncontrado) {
      return this.sanitizer.bypassSecurityTrustResourceUrl('');
    }
    const url = `https://www.google.com/maps?q=${encodeURIComponent(this.paqueteEncontrado.direccionMaps)}&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
