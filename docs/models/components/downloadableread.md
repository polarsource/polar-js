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
    storageVersion: null,
    checksumEtag: "<value>",
    checksumSha256Base64: "<value>",
    checksumSha256Hex: "<value>",
    lastModifiedAt: new Date("2026-01-20T00:04:35.382Z"),
    download: {
      url: "https://paltry-appliance.com",
      expiresAt: new Date("2026-06-23T20:33:37.622Z"),
    },
    version: "<value>",
    isUploaded: true,
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