# CustomerPortalDownloadablesListResponse

## Example Usage

```typescript
import { CustomerPortalDownloadablesListResponse } from "@polar-sh/sdk/models/operations/customerportaldownloadableslist.js";

let value: CustomerPortalDownloadablesListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        benefitId: "<value>",
        file: {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/etc/periodic",
          mimeType: "<value>",
          size: 41962,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-11-10T17:03:04.575Z"),
          download: {
            url: "https://flustered-hygienic.com/",
            expiresAt: new Date("2024-02-28T01:23:53.379Z"),
          },
          version: "<value>",
          isUploaded: false,
          service: "product_media",
          sizeReadable: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 931141,
      maxPage: 498289,
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [components.ListResourceDownloadableRead](../../models/components/listresourcedownloadableread.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |