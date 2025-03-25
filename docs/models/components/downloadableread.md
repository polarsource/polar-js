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
    path: "/etc/defaults",
    mimeType: "<value>",
    size: 814336,
    storageVersion: "<value>",
    checksumEtag: "<value>",
    checksumSha256Base64: "<value>",
    checksumSha256Hex: "<value>",
    lastModifiedAt: new Date("2024-10-21T13:03:47.869Z"),
    download: {
      url: "https://spotless-granny.biz/",
      expiresAt: new Date("2024-07-18T11:49:54.814Z"),
    },
    version: "<value>",
    isUploaded: false,
    service: "organization_avatar",
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