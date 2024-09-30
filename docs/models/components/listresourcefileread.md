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
      path: "/usr/obj",
      mimeType: "<value>",
      size: 925137,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-06-12T00:25:28.075Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-11-20T15:44:57.582Z"),
      sizeReadable: "<value>",
      publicUrl: "https://glittering-grandson.name",
    },
  ],
  pagination: {
    totalCount: 690546,
    maxPage: 464706,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.FileRead*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |