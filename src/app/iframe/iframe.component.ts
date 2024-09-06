import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

/**
 * Para añadirlo al proyecto en el login bastaría con hacer la parte del ngOnInit sin la línea
 * 'this.iframeSrc =this.sanitizer.bypassSecurityTrustResourceUrl(' http://89.149.175.221/reports/powerbi/aircraftmodel?rs:embed=true')'
 *
 * TODO: Comprobar si se ha hecho la autenticación para que en caso negativo no aparezca el popup de login
 *
 */

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  imports:[CommonModule],
  standalone : true
})
export class IframeComponent implements OnInit {
  iframeSrc: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl("")


  constructor(
    private sanitizer : DomSanitizer,
    private http: HttpClient
  ) {}

  ngOnInit(): void {

    const login = window.open('http://javier.gonzalez:Temporal01.@89.149.175.221/reports/powerbi/aircraftmodel?rs:embed=true', '_blank', 'width=10,height=10,scrollbars=yes,resizable=yes');

    if(login){
      setTimeout(() => {
        login?.close();
        this.iframeSrc =this.sanitizer.bypassSecurityTrustResourceUrl(' http://89.149.175.221/reports/powerbi/aircraftmodel?rs:embed=true')
      }, 1200);
    }

    /**
     * La idea de esta parte es que se compruebe si la autenticacion está hecha haciendo
     * una petición y comprobando si el status es OK, si el estado es distinto de OK entonces
     * no está la autenticación hecha y por tanto para no que salga el popup con el login habría
     * que quitar el src del iframe.
     *
     * Poner un botón de refrescar para intentar hacer el login de nuevo con el código que hay antes
     * de este comentario.
     */


    // this.http.get('http://89.149.175.221/reports/powerbi/aircraftmodel?rs:embed=true', { observe: 'response' }).subscribe(
    //   response => {
    //     // Muestra el estado de la respuesta en consola
    //     console.log('Estado de la respuesta:', response.status);
    //     console.log('Datos obtenidos:', response.body);
    //   },
    //   error => {
    //     // Muestra cualquier error en la consola
    //     console.error('Error en la petición:', error);
    //   }
    // );
  }
}


