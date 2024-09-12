import {HttpInterceptorFn, HttpRequest} from "@angular/common/http";
import {inject} from "@angular/core";
import {BehaviorSubject, catchError, throwError} from "rxjs";
import {AuthServiceService} from "./auth-service.service";

let isRefreshing$ = new BehaviorSubject<boolean>(false)


export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req)

  const authService = inject(AuthServiceService)
  const token = authService.token

  if (!token) return next(req)


  return next(addToken(req, token))
    .pipe(catchError(error => {
      return throwError(error)
    }))
}


const addToken = (req: HttpRequest<any>, token: string) => {
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })

}
