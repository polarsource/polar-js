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
        path: "/usr/lib",
        mimeType: "<value>",
        size: 766757,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-04-12T12:48:01.288Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-03-15T08:15:52.537Z"),
        sizeReadable: "<value>",
        publicUrl: "https://brave-slipper.biz",
      },
    ],
    pagination: {
      totalCount: 212124,
      maxPage: 195906,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceFileRead](../../models/components/listresourcefileread.md) | :heavy_check_mark:                                                                 | N/A                                                                                |