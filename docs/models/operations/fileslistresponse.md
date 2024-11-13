# FilesListResponse

## Example Usage

```typescript
import { FilesListResponse } from "@polar-sh/sdk/models/operations";

let value: FilesListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/var",
        mimeType: "<value>",
        size: 409021,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-12-31T03:28:31.793Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-12-20T12:28:04.015Z"),
        sizeReadable: "<value>",
        publicUrl: "https://helpful-brochure.net",
      },
    ],
    pagination: {
      totalCount: 708075,
      maxPage: 921916,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceFileRead](../../models/components/listresourcefileread.md) | :heavy_check_mark:                                                                 | N/A                                                                                |