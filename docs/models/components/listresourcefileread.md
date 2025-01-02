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
      path: "/var/tmp",
      mimeType: "<value>",
      size: 133813,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-08-04T16:05:30.256Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-12-08T15:35:06.694Z"),
      sizeReadable: "<value>",
      publicUrl: "https://doting-translation.info",
    },
  ],
  pagination: {
    totalCount: 431771,
    maxPage: 786325,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.FileRead*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |