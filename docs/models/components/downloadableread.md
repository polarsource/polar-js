# DownloadableRead

## Example Usage

```typescript
import { DownloadableRead } from "@polar-sh/sdk/models/components";

let value: DownloadableRead = {
  id: "<value>",
  benefitId: "<value>",
  file: {
    id: "<value>",
    organizationId: "<value>",
    name: "<value>",
    path: "/opt/lib",
    mimeType: "<value>",
    size: 545503,
    storageVersion: "<value>",
    checksumEtag: "<value>",
    checksumSha256Base64: "<value>",
    checksumSha256Hex: "<value>",
    lastModifiedAt: new Date("2022-07-09T11:32:01.340Z"),
    download: {
      url: "https://inborn-consistency.name",
      expiresAt: new Date("2023-12-02T20:03:30.175Z"),
    },
    version: "<value>",
    isUploaded: false,
    service: "product_media",
    sizeReadable: "<value>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `benefitId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `file`                                                             | [components.FileDownload](../../models/components/filedownload.md) | :heavy_check_mark:                                                 | N/A                                                                |