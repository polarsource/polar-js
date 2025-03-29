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
          path: "/sys",
          mimeType: "<value>",
          size: 126682,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-06-13T01:07:51.083Z"),
          download: {
            url: "https://reasonable-chainstay.name",
            expiresAt: new Date("2024-02-16T06:49:59.233Z"),
          },
          version: "<value>",
          isUploaded: false,
          service: "product_media",
          sizeReadable: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 418580,
      maxPage: 736037,
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [components.ListResourceDownloadableRead](../../models/components/listresourcedownloadableread.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |