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
        path: "/tmp",
        mimeType: "<value>",
        size: 189614,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-08-17T07:24:06.006Z"),
        download: {
          url: "https://shameless-kit.net/",
          expiresAt: new Date("2024-05-26T02:27:18.532Z"),
        },
        version: "<value>",
        isUploaded: false,
        service: "product_media",
        sizeReadable: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 471141,
    maxPage: 402515,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.DownloadableRead](../../models/components/downloadableread.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |