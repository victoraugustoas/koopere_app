

export class MetadataQrCodeDTO {
    constructor(
        public createdAt: Date,
        public name: string,
        public value: string,
    ) { }

    static fromString(value: string): MetadataQrCodeDTO {
        const keys = ['name', 'createdAt', 'value'];
        const json = JSON.parse(value);
        for (const key of keys) {
            if (!json[key]) {
                throw Error('QrCode is not valid');
            }
        }
        return new MetadataQrCodeDTO(
            json.createdAt,
            json.name,
            json.value,
        );
    }

    toString() {
        return JSON.stringify({
            createdAt: this.createdAt,
            name: this.name,
            value: this.value
        })
    }
}
