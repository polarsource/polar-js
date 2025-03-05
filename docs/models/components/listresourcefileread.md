# ListResourceFileRead

## Example Usage

```typescript
import { ListResourceFileRead } from "@polar-sh/sdk/models/components/listresourcefileread.js";

let value: ListResourceFileRead = {
  items: [
    {
      id: "<value>",
      organizationId: "<value>",
      name: "<value>",
      path: "/var",
      mimeType: "<value>",
      size: 692115,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-01-22T03:23:41.299Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-11-02T02:49:44.228Z"),
      sizeReadable: "<value>",
      publicUrl: "https://stable-accountability.name/",
    },
  ],
  pagination: {
    totalCount: 23491,
    maxPage: 979335,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.FileRead*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |