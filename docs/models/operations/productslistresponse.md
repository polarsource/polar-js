# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-08-08T13:10:49.877Z"),
        modifiedAt: new Date("2024-10-27T11:16:32.408Z"),
        id: "<value>",
        name: "<value>",
        description: "Reverse-engineered neutral toolset",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2022-03-19T16:09:31.123Z"),
            modifiedAt: new Date("2022-11-17T21:39:15.131Z"),
            id: "<value>",
            isArchived: false,
            priceCurrency: "<value>",
            minimumAmount: 152354,
            maximumAmount: 417486,
            presetAmount: 131289,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-02-24T13:22:59.477Z"),
            modifiedAt: new Date("2024-09-08T08:13:49.082Z"),
            id: "<value>",
            description: "Versatile intermediate data-warehouse",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              paidArticles: false,
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/srv",
            mimeType: "<value>",
            size: 896762,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-03-22T18:42:50.144Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-08-29T01:52:01.164Z"),
            sizeReadable: "<value>",
            publicUrl: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 271653,
      maxPage: 455444,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |