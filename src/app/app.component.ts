import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToAstrPosition } from './services/ui/custom-toastr.service';

declare var $: any


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private toastrService:CustomToastrService){
    toastrService.message("Merhaba","Uğur1",{messageType:ToastrMessageType.Info,position:ToAstrPosition.TopCenter})
    toastrService.message("Merhaba","Uğur2",{messageType:ToastrMessageType.Error,position:ToAstrPosition.TopFullWidth})
    toastrService.message("Merhaba","Uğur3",{messageType:ToastrMessageType.Success,position:ToAstrPosition.BottomFullWidth})
    toastrService.message("Merhaba","Uğur4",{messageType:ToastrMessageType.Warning,position:ToAstrPosition.TopLeft})
  }
}

//$(document).ready(()=>{
 // alert("Hoşgeldiniz")
//})

