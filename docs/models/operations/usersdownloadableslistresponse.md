# UsersDownloadablesListResponse

## Example Usage

```typescript
import { UsersDownloadablesListResponse } from "@polar-sh/sdk/models/operations";

let value: UsersDownloadablesListResponse = {
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
          size: 574325,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-12-17T21:47:39.716Z"),
          download: {
            url: "https://intrepid-technician.info",
            expiresAt: new Date("2023-04-23T16:59:27.579Z"),
          },
          version: "<value>",
          isUploaded: false,
          service: "organization_avatar",
          sizeReadable: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 806194,
      maxPage: 703889,
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [components.ListResourceDownloadableRead](../../models/components/listresourcedownloadableread.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |