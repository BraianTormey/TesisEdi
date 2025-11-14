import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reclamos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reclamos.html',
  styleUrl: './reclamos.scss',
})
export class ReclamosComponent {
  codigoPaquete: string = '';
  tipoReclamo: string = '';
  descripcion: string = '';
  nombreUsuario: string = '';
  email: string = '';
  telefono: string = '';
  archivoAdjunto: File | null = null;
  enviado: boolean = false;
  mostrarErrores: boolean = false;

  tiposReclamo: string[] = [
    'Paquete no llegó',
    'Paquete dañado',
    'Demora en la entrega',
    'Dirección incorrecta',
    'Error en el seguimiento',
    'Otro'
  ];

  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validarFormulario(): boolean {
    return !!(
      this.codigoPaquete.trim() &&
      this.tipoReclamo &&
      this.descripcion.trim() &&
      this.nombreUsuario.trim() &&
      this.email.trim() &&
      this.validarEmail(this.email)
    );
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.archivoAdjunto = file;
    }
  }

  enviarReclamo(): void {
    this.mostrarErrores = true;

    if (this.validarFormulario()) {
      // Simulación de envío
      this.enviado = true;
      this.mostrarErrores = false;
      
      // Resetear formulario después de 3 segundos
      setTimeout(() => {
        this.resetearFormulario();
      }, 3000);
    }
  }

  resetearFormulario(): void {
    this.codigoPaquete = '';
    this.tipoReclamo = '';
    this.descripcion = '';
    this.nombreUsuario = '';
    this.email = '';
    this.telefono = '';
    this.archivoAdjunto = null;
    this.enviado = false;
    this.mostrarErrores = false;
  }

  getErrorCodigo(): string {
    if (this.mostrarErrores && !this.codigoPaquete.trim()) {
      return 'El código del paquete es obligatorio';
    }
    return '';
  }

  getErrorTipoReclamo(): string {
    if (this.mostrarErrores && !this.tipoReclamo) {
      return 'Debe seleccionar un tipo de reclamo';
    }
    return '';
  }

  getErrorDescripcion(): string {
    if (this.mostrarErrores && !this.descripcion.trim()) {
      return 'La descripción es obligatoria';
    }
    return '';
  }

  getErrorNombre(): string {
    if (this.mostrarErrores && !this.nombreUsuario.trim()) {
      return 'El nombre es obligatorio';
    }
    return '';
  }

  getErrorEmail(): string {
    if (this.mostrarErrores && !this.email.trim()) {
      return 'El email es obligatorio';
    }
    if (this.mostrarErrores && this.email.trim() && !this.validarEmail(this.email)) {
      return 'El email no tiene un formato válido';
    }
    return '';
  }
}
