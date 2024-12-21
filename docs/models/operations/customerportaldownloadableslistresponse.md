# CustomerPortalDownloadablesListResponse

## Example Usage

```typescript
import { CustomerPortalDownloadablesListResponse } from "@polar-sh/sdk/models/operations";

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
          path: "/usr/local/bin",
          mimeType: "<value>",
          size: 473839,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-03-13T13:45:54.118Z"),
          download: {
            url: "https://evil-gloom.biz",
            expiresAt: new Date("2023-12-03T23:06:12.612Z"),
          },
          version: "<value>",
          isUploaded: false,
          service: "organization_avatar",
          sizeReadable: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 858543,
      maxPage: 771809,
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [components.ListResourceDownloadableRead](../../models/components/listresourcedownloadableread.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |