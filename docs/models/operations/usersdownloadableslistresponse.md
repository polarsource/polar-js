# UsersDownloadablesListResponse

## Example Usage

```typescript
import { UsersDownloadablesListResponse } from "@polar-sh/sdk/models/operations";

let value: UsersDownloadablesListResponse = {
    result: {
        items: [
            {
                id: "<value>",
                benefitId: "<value>",
                file: {
                    id: "<value>",
                    organizationId: "<value>",
                    name: "<value>",
                    path: "/opt/lib",
                    mimeType: "<value>",
                    size: 473600,
                    storageVersion: "<value>",
                    checksumEtag: "<value>",
                    checksumSha256Base64: "<value>",
                    checksumSha256Hex: "<value>",
                    lastModifiedAt: new Date("2022-10-17T22:52:14.889Z"),
                    download: {
                        url: "http://soft-reminder.info",
                        expiresAt: new Date("2022-08-26T08:08:26.098Z"),
                    },
                    version: "<value>",
                    isUploaded: false,
                    service: "product_media",
                    sizeReadable: "<value>",
                },
            },
        ],
        pagination: {
            totalCount: 135218,
            maxPage: 18789,
        },
    },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [components.ListResourceDownloadableRead](../../models/components/listresourcedownloadableread.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |