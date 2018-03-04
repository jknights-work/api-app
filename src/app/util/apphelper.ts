import { Injectable } from '@angular/core';

@Injectable()
export class AppHelper {

    public isNull (el : any) : Boolean {
        var result = false;
        if (el === null || typeof el === "undefined") {
            result = true;
        }
        return result; 
    }

    public isEmpty (str : string) : Boolean {
        var result = false;
        if (str === null || typeof str === "undefined" || !str || str === "") {
            result = true;
        }
        return result; 
    }
}