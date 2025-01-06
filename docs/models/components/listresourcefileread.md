# ListResourceFileRead

## Example Usage

```typescript
import { ListResourceFileRead } from "@polar-sh/sdk/models/components";

let value: ListResourceFileRead = {
  items: [
    {
      id: "<value>",
      organizationId: "<value>",
      name: "<value>",
      path: "/opt/sbin",
      mimeType: "<value>",
      size: 664193,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-03-03T08:45:54.051Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-09-09T18:27:38.526Z"),
      sizeReadable: "<value>",
      publicUrl: "https://old-daddy.info/",
    },
  ],
  pagination: {
    totalCount: 17530,
    maxPage: 249042,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.FileRead*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |