
export type Locale = string;
export type MessageId = string;
export type Messages = Record<MessageId, string>;
export type MessageBundle = Record<MessageId, (args?: any) => string>;
