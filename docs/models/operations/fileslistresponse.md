# FilesListResponse

## Example Usage

```typescript
import { FilesListResponse } from "@polar-sh/sdk/models/operations/fileslist.js";

let value: FilesListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/var",
        mimeType: "<value>",
        size: 894150,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-10-25T18:33:51.208Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-02-20T03:15:37.523Z"),
        sizeReadable: "<value>",
        publicUrl: "https://enraged-retention.biz",
      },
    ],
    pagination: {
      totalCount: 365629,
      maxPage: 842906,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceFileRead](../../models/components/listresourcefileread.md) | :heavy_check_mark:                                                                 | N/A                                                                                |