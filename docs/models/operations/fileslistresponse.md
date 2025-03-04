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
        path: "/usr/ports",
        mimeType: "<value>",
        size: 199425,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-05-16T08:12:14.322Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-03-13T04:21:14.731Z"),
        sizeReadable: "<value>",
        publicUrl: "https://confused-flint.net/",
      },
    ],
    pagination: {
      totalCount: 376875,
      maxPage: 458967,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceFileRead](../../models/components/listresourcefileread.md) | :heavy_check_mark:                                                                 | N/A                                                                                |