import { Component, computed, input } from '@angular/core';
import { Mf2Parser } from './mf2-parser';
import { MessageFormat } from 'messageformat';

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

  template = computed(() => {
    const message = this.msg();
    if (!message) return '';

    const mf = new MessageFormat('en', message);
    const parser = new Mf2Parser(mf);

    return parser.getHtml()
  });
}
