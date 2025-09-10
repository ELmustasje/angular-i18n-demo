// mf2-parser.ts
import { input } from '@angular/core';
import { MessageFormat } from 'messageformat';

export class Mf2Parser {
  private mf: MessageFormat;

  constructor(msg: MessageFormat) {
    this.mf = msg;
  };

  getHtml() {
    const parts = this.mf.formatToParts();

    let result = '';
    for (const part of parts) {
      if (part.type == "text") {
        result += part.value
      }
      if (part.type == "markup") {
        if (part.kind == "open") {
          switch (part.name) {
            case "bold": {
              result += "<b>"
            }
          }
        }
        if (part.kind == "close") {
          switch (part.name) {
            case "bold": {
              result += "</b>"
            }
          }
        }
      }
    }

    console.log(result);

    return result;
  }
}
