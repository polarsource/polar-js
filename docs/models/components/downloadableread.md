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
        path: "/usr/bin",
        mimeType: "<value>",
        size: 799796,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-06-22T22:29:34.417Z"),
        download: {
            url: "http://knobby-liver.org",
            expiresAt: new Date("2022-12-03T06:19:58.364Z"),
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