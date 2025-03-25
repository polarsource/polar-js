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
        path: "/home/user/dir",
        mimeType: "<value>",
        size: 820306,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-05-24T16:25:23.576Z"),
        download: {
          url: "https://aged-hornet.name/",
          expiresAt: new Date("2025-04-13T03:06:07.719Z"),
        },
        version: "<value>",
        isUploaded: false,
        service: "product_media",
        sizeReadable: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 672127,
    maxPage: 803381,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.DownloadableRead](../../models/components/downloadableread.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |