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
        path: "/usr/X11R6",
        mimeType: "<value>",
        size: 245804,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-06-22T15:02:43.515Z"),
        download: {
          url: "https://superior-accountability.com",
          expiresAt: new Date("2024-06-19T18:06:49.644Z"),
        },
        version: "<value>",
        isUploaded: false,
        service: "organization_avatar",
        sizeReadable: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 925340,
    maxPage: 193960,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.DownloadableRead](../../models/components/downloadableread.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |