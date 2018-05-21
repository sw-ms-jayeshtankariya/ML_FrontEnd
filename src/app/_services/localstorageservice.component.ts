import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    setItem(key: string, value: string) {
        window.localStorage.setItem(key, value);
    }
    getItem(key: string) {
        return window.localStorage.getItem(key);
    }
}
