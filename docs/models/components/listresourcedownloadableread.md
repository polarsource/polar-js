# ListResourceDownloadableRead

## Example Usage

```typescript
import { ListResourceDownloadableRead } from "@polar-sh/sdk/models/components/listresourcedownloadableread.js";

let value: ListResourceDownloadableRead = {
  items: [
    {
      id: "<value>",
      benefitId: "<value>",
      file: {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/etc",
        mimeType: "<value>",
        size: 648360,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-12-03T06:25:18.097Z"),
        download: {
          url: "https://authorized-cook.name",
          expiresAt: new Date("2024-08-27T16:46:29.820Z"),
        },
        version: "<value>",
        isUploaded: false,
        service: "product_media",
        sizeReadable: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 26965,
    maxPage: 834020,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.DownloadableRead](../../models/components/downloadableread.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |