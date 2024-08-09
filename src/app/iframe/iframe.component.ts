import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

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

  constructor(
    private sanitizer : DomSanitizer,
  ) {}

  ngOnInit(): void {

    const login = window.open('http://javier.gonzalez:Temporal01.@89.149.175.221/reports/powerbi/aircraftmodel?rs:embed=true', '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');

    if(login){
      setTimeout(() => {
        login?.close();
        this.iframeSrc =this.sanitizer.bypassSecurityTrustResourceUrl(' http://89.149.175.221/reports/powerbi/aircraftmodel?rs:embed=true')
      }, 3000);
    }
  }
}


