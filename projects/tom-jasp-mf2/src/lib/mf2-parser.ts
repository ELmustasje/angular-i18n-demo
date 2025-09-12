import { MessageFormat } from 'messageformat';

export default mf2ToHtml;

function mf2ToHtml(s: string, vars?: Record<string, any>): string {
    const mf = new MessageFormat('en', s);
    const parts = mf.formatToParts(vars);
    const result = [];

    for (const part of parts) {
        switch (part.type) {
            case 'text':
                result.push(part.value);
                break;

            case 'markup':
                result.push(markupToHtml(part.name, part.kind));
                break;
        }
    }

    return result.join('');
}

function markupToHtml(name: string, kind: string): string {
    switch (name) {
        case 'bold':
            return kind === 'open' ? '<b>' : '</b>';
    }

    return '';
}
