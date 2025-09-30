
import { Component } from '@angular/core';
import {
    I18nPipe, I18nStore
} from 'mf2-i18n';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './app.html',
    imports: [I18nPipe]
})
export class App {
    constructor(private i18n: I18nStore) { }
    setEN() { this.i18n.setLocale('en'); }
    setNO() { this.i18n.setLocale('no'); }
}
