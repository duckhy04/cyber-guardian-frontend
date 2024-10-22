export interface Comment {
    id: number;
    text: string;
    userName: string;
    byteImage?: Uint8Array;
    processedImg?: any;
    createdAt?: string;
    updatedAt?: string;
}
