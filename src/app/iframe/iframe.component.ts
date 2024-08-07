import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { IframeService } from './iframe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css'],
  imports:[CommonModule],
  standalone : true
})
export class IframeComponent implements OnInit {
  iframeSrc: SafeHtml = '';

  constructor(
    private iframeService: IframeService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.iframeService.getIframeSrc().subscribe(
      (src) => {

        this.iframeSrc = this.sanitizer.bypassSecurityTrustHtml(src)
      },
      (error) => {
        console.error('Error al obtener el src del iframe:', error);
      }
    );
  }
}
