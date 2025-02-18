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
        path: "/usr/sbin",
        mimeType: "<value>",
        size: 825390,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-03-02T07:36:35.852Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-09-30T10:00:07.369Z"),
        sizeReadable: "<value>",
        publicUrl: "https://sizzling-whack.com",
      },
    ],
    pagination: {
      totalCount: 789569,
      maxPage: 417831,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceFileRead](../../models/components/listresourcefileread.md) | :heavy_check_mark:                                                                 | N/A                                                                                |