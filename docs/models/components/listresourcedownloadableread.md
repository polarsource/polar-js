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
        path: "/mnt",
        mimeType: "<value>",
        size: 829836,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-10-29T02:00:43.553Z"),
        download: {
          url: "https://unsung-fisherman.biz/",
          expiresAt: new Date("2024-12-27T07:45:07.954Z"),
        },
        version: "<value>",
        isUploaded: false,
        service: "organization_avatar",
        sizeReadable: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 228618,
    maxPage: 837202,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.DownloadableRead](../../models/components/downloadableread.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |