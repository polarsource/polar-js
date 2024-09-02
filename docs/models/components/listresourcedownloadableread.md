# ListResourceDownloadableRead

## Example Usage

```typescript
import { ListResourceDownloadableRead } from "@polar-sh/sdk/models/components";

let value: ListResourceDownloadableRead = {
    items: [
        {
            id: "<value>",
            benefitId: "<value>",
            file: {
                id: "<value>",
                organizationId: "<value>",
                name: "<value>",
                path: "/srv",
                mimeType: "<value>",
                size: 9688,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2022-10-27T00:18:25.838Z"),
                download: {
                    url: "https://hard-to-find-carrot.biz",
                    expiresAt: new Date("2024-05-03T23:51:56.162Z"),
                },
                version: "<value>",
                isUploaded: false,
                service: "product_media",
                sizeReadable: "<value>",
            },
        },
    ],
    pagination: {
        totalCount: 925164,
        maxPage: 44612,
    },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.DownloadableRead](../../models/components/downloadableread.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |