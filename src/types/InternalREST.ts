export const enum RESTManagerEvents {
	Debug = 'debug',
	Ratelimited = 'ratelimited',

	ClientRESTDebug = 'restDebug',
}

export type ImageExtension = 'png' | 'gif' | 'webp' | 'jpg' | 'jpeg';
export type EmojiExtension = 'png' | 'gif';

export interface ImageURLOptions {
	extension?: ImageExtension;
	size?: 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096;
	dynamic?: boolean;
}
