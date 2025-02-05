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
          path: "/usr/src",
          mimeType: "<value>",
          size: 391395,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-09-22T23:51:29.754Z"),
          download: {
            url: "https://shameful-consistency.org",
            expiresAt: new Date("2025-05-20T04:09:40.373Z"),
          },
          version: "<value>",
          isUploaded: false,
          service: "downloadable",
          sizeReadable: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 899586,
      maxPage: 545395,
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [components.ListResourceDownloadableRead](../../models/components/listresourcedownloadableread.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |