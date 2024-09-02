# ListResourceFileRead

## Example Usage

```typescript
import { ListResourceFileRead } from "@polar-sh/sdk/models/components";

let value: ListResourceFileRead = {
    items: [
        {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/rescue",
            mimeType: "<value>",
            size: 770675,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-07-12T16:24:09.257Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-02-29T16:45:21.184Z"),
            sizeReadable: "<value>",
            publicUrl: "<value>",
        },
    ],
    pagination: {
        totalCount: 373216,
        maxPage: 633415,
    },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.FileRead*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |