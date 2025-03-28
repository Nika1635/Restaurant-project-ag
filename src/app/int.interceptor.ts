import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ApiService } from './api.service';
import { finalize } from 'rxjs';
 
 export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
   const loader = inject(ApiService)
   loader.startLoading()
   return next(req).pipe(
     finalize( () => {
       loader.stopLoading()
     } )
   );
 };