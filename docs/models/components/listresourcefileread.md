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
      path: "/tmp",
      mimeType: "<value>",
      size: 58904,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-11-07T19:29:39.108Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-05-25T23:19:35.845Z"),
      sizeReadable: "<value>",
      publicUrl: "https://unkempt-certification.biz/",
    },
  ],
  pagination: {
    totalCount: 423019,
    maxPage: 60393,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.FileRead*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |