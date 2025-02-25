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
        path: "/Library",
        mimeType: "<value>",
        size: 50402,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-01-24T19:19:35.600Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-01-03T22:09:25.037Z"),
        sizeReadable: "<value>",
        publicUrl: "https://silver-fold.com",
      },
    ],
    pagination: {
      totalCount: 476139,
      maxPage: 640884,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceFileRead](../../models/components/listresourcefileread.md) | :heavy_check_mark:                                                                 | N/A                                                                                |