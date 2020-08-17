import {AbstractControl, ValidatorFn, FormGroup, ValidationErrors} from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';


export const validatorEmail =(httpClient : HttpClient ) => (c:FormGroup) => {
    return httpClient 
    .post('http://localhost:8888/API-aden/index.php?action=back!controlEmail', JSON.stringify(c.value))
    .pipe(
        map((result) => {
        return result ? null : {invalidAsync: true}
        })
    )  
}
