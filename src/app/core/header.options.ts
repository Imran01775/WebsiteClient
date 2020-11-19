import { HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../services/common/local-storage-service.service';
import { environment } from 'src/environments/environment';

export const httpContentTypeHeader = {
    headers: new HttpHeaders({
        'Content-type': 'application/json'
    })
}



export const httpContentTypeHeaderWithToken = () => {
   const localStorageService = new LocalStorageService(environment.tokenKeyName);
   var token = localStorageService.getItemFromStorage();
   return {
        headers: new HttpHeaders({
            'Content-type': 'application/json',
            'Authorization': 'Bearer '+ token.value
        })
    }
}

export const httpHeaderWithToken = () => {
   const localStorageService = new LocalStorageService(environment.tokenKeyName);
   var token = localStorageService.getItemFromStorage();
   return {
        headers: new HttpHeaders({
            'Authorization': 'Bearer '+ token.value
        })
    }
}
export const httpHeaderWithTokenNew = (params) => {
    const localStorageService = new LocalStorageService(environment.tokenKeyName);
    var token = localStorageService.getItemFromStorage();
    return {
         headers: new HttpHeaders({
             'Authorization': 'Bearer '+ token.value
         }),
         params:params
     }
 }
