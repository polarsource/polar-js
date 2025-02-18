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
    path: "/usr/lib",
    mimeType: "<value>",
    size: 659114,
    storageVersion: "<value>",
    checksumEtag: "<value>",
    checksumSha256Base64: "<value>",
    checksumSha256Hex: "<value>",
    lastModifiedAt: new Date("2024-12-06T11:34:56.016Z"),
    download: {
      url: "https://ajar-venom.info",
      expiresAt: new Date("2023-11-08T16:45:59.461Z"),
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