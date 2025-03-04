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
          path: "/srv",
          mimeType: "<value>",
          size: 555275,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-03-24T13:54:51.732Z"),
          download: {
            url: "https://total-masterpiece.com/",
            expiresAt: new Date("2023-09-10T16:25:27.805Z"),
          },
          version: "<value>",
          isUploaded: false,
          service: "downloadable",
          sizeReadable: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 324073,
      maxPage: 248751,
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [components.ListResourceDownloadableRead](../../models/components/listresourcedownloadableread.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |