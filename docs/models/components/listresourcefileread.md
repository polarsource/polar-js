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
      path: "/proc",
      mimeType: "<value>",
      size: 660728,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-07-02T06:21:44.983Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-01-10T13:58:51.311Z"),
      sizeReadable: "<value>",
      publicUrl: "https://legal-ghost.net/",
    },
  ],
  pagination: {
    totalCount: 15297,
    maxPage: 570398,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.FileRead*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |