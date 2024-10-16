# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-10-28T20:52:23.318Z"),
        modifiedAt: new Date("2023-08-01T03:15:58.659Z"),
        id: "<value>",
        name: "<value>",
        description: "soggy onto until oof hateful faithfully steel",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-10-08T04:10:09.540Z"),
            modifiedAt: new Date("2022-02-19T21:06:49.752Z"),
            id: "<value>",
            isArchived: false,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-03-20T15:09:55.930Z"),
            modifiedAt: new Date("2023-10-21T23:59:41.091Z"),
            id: "<value>",
            type: "downloadables",
            description: "nimble whoever mmm boohoo straight innocently",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/var/log",
            mimeType: "<value>",
            size: 960767,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-12-04T01:24:39.845Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-01-25T18:12:19.188Z"),
            sizeReadable: "<value>",
            publicUrl: "https://mild-management.info/",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 68596,
      maxPage: 228907,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |