import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { place } from 'src/app/modals/users';
import { locationsService } from 'src/app/services/location.service';

@Component({
  selector: 'app-qr-generation',
  templateUrl: './qr-generation.component.html',
  styleUrls: ['./qr-generation.component.css']
})
export class QrGenerationComponent implements OnInit {

  value

  constructor(private location: locationsService, private router: Router, public dialogRef: MatDialogRef<QrGenerationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: place){ }

  ngOnInit(): void {
    console.log(this.data.uid);
  }

  close(){
    this.location.createlocation(this.data);
    this.dialogRef.close();
    this.router.navigateByUrl("/places");
  }

  saveAsImage(parent) {
    console.log(parent);
    const parentElement =  parent.el.nativeElement.querySelector("img").src;

    let blobData = this.convertBase64ToBlob(parentElement);

    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blobData, 'Qrcode');
    } else {
      const blob = new Blob([blobData], { type: "image/png" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Qrcode';
      link.click();
    }
  }

  private convertBase64ToBlob(Base64Image: any) {
    const parts = Base64Image.split(';base64,');
    let link = parts[1]
    const imageType = parts[0].split(':')[1];
    const decodedData = window.atob(parts[1]);
    const uInt8Array = new Uint8Array(decodedData.length);
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: imageType });
  }
}
