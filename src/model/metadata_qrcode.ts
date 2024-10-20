export type QrCodeType = 'email' | 'text' | 'url' | 'phone'

export class MetadataQrCodeDTO {
    constructor(
        public createdAt: Date,
        public authorName: string,
        public type: QrCodeType,
        public value: string,
    ) { }

    static fromString(value: string): MetadataQrCodeDTO {
        const keys = ['createdAt', 'authorName', 'type', 'value'];
        const json = JSON.parse(value);
        for (const key of keys) {
            if (!json[key]) {
                throw Error('QrCode is not valid');
            }
        }
        return new MetadataQrCodeDTO(
            json.createdAt,
            json.authorName,
            json.type,
            json.value,
        );
    }
}
