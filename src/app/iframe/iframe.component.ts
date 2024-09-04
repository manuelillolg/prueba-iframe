import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IframeService } from './iframe.service';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css'],
  imports:[CommonModule],
  standalone : true
})
export class IframeComponent implements OnInit {
  iframeSrc: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl("")
  authenticated = false;
  cookies : any

  constructor(
    private sanitizer : DomSanitizer,
    private http : HttpClient,
    private iframeService : IframeService
  ) {}

  ngOnInit(): void {

    // try{
    //   this.iframeService.initService()

    // }catch(error){
    //   console.log(error)
    // }

    const login = window.open('http://javier.gonzalez:Temporal01.@89.149.175.221/reports/powerbi/aircraftmodel?rs:embed=true', '_blank', 'width=1,height=1,scrollbars=yes,resizable=yes');

    if(login){
      setTimeout(() => {
        login?.close();
        this.iframeSrc =this.sanitizer.bypassSecurityTrustResourceUrl(' http://89.149.175.221/reports/powerbi/aircraftmodel?rs:embed=true')
        // setTimeout(() => {
        //   this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('');
        // }, 100);
      }, 1100);
    }

    // if(login){
    //   const intervalId = setInterval(() => {
    //         try {
    //           // Comprobamos si la ventana está lista
    //           if (login.document.readyState === 'complete') {
    //             // Una vez la ventana esté completamente cargada, cerramos la ventana
    //             clearInterval(intervalId); // Detenemos el interval
    //             login.close(); // Cerramos la ventana
    //             this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('http://89.149.175.221/reports/powerbi/aircraftmodel?rs:embed=true');
    //           }
    //         } catch (e) {
    //           // Ignoramos errores de cross-origin mientras la ventana está cargando
    //         }
    //       }, 100);
    // }

    // if (login) {
    //   const intervalId = setInterval(() => {
    //     try {
    //       // Comprobamos si la ventana está lista
    //       if (login.document.readyState === 'complete') {
    //         // Una vez la ventana esté completamente cargada, cerramos la ventana
    //         clearInterval(intervalId); // Detenemos el interval
    //         login.close(); // Cerramos la ventana
    //         this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('http://89.149.175.221/reports/powerbi/aircraftmodel?rs:embed=true');
    //       }
    //     } catch (e) {
    //       // Ignoramos errores de cross-origin mientras la ventana está cargando
    //     }
    //   }, 100);


  //   this.iframeService.getCookies().subscribe(
  //     (data) => {
  //       this.cookies = data.cookies;
  //       console.log(this.cookies);
  //      // this.setCookiesInBrowser(this.cookies);
  //       this.iframeSrc =this.sanitizer.bypassSecurityTrustResourceUrl(' http://89.149.175.221/reports/powerbi/aircraftmodel?rs:embed=true')

  //     },
  //     (error) => {
  //       console.error('Error fetching cookies', error);
  //     }
  //   );
  //   //this.iframeSrc =this.sanitizer.bypassSecurityTrustResourceUrl(' http://89.149.175.221/reports/powerbi/aircraftmodel?rs:embed=true')
  }

  // setCookiesInBrowser(cookies: any): void {

  //   cookies.forEach((cookie:any) => {
  //     document.cookie = `${cookie.name}=${cookie.value}; Domain=${cookie.domain}; Path=/; SameSite=None; Secure`;
  //     console.log(`${cookie.name}=${cookie.value}; domain=${cookie.domain}; `)
  //   });

  //   console.log(document.cookie)
  // }
}


