import { Component, computed, Input, input } from '@angular/core';
import mfToHtml from './mf2-parser';

@Component({
    selector: 'lib-tomJaspMF2',
    standalone: true,
    template: `
    <p [innerHTML]="template()"></p>
  `,
})
export class TomJaspMF2 {
    // Input signal
    msg = input<string>();
    locale = input<string>();


    template = computed(() => {

        const message = this.msg();
        const locale = this.locale() || "en";

        const path = `locale/${locale}.json`



        console.log("vars: " + vars);


        if (!message) return '';
        if (!vars) return mfToHtml(message)
        return mfToHtml(message, vars)


    });
}
