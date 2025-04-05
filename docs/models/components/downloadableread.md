# DownloadableRead

## Example Usage

```typescript
import { DownloadableRead } from "@polar-sh/sdk/models/components/downloadableread.js";

let value: DownloadableRead = {
  id: "<value>",
  benefitId: "<value>",
  file: {
    id: "<value>",
    organizationId: "<value>",
    name: "<value>",
    path: "/Applications",
    mimeType: "<value>",
    size: 883456,
    storageVersion: "<value>",
    checksumEtag: "<value>",
    checksumSha256Base64: "<value>",
    checksumSha256Hex: "<value>",
    lastModifiedAt: new Date("2023-02-08T20:33:24.594Z"),
    download: {
      url: "https://majestic-shark.biz/",
      expiresAt: new Date("2025-01-20T00:04:35.382Z"),
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