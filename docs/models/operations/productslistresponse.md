# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-03-13T12:34:38.744Z"),
        modifiedAt: new Date("2024-06-29T12:39:44.029Z"),
        id: "<value>",
        name: "<value>",
        description: "blossom drat whenever",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": 892594,
        },
        prices: [
          {
            createdAt: new Date("2025-04-19T19:23:02.816Z"),
            modifiedAt: new Date("2024-01-04T05:16:59.047Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 69476,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-05-11T15:16:30.860Z"),
            modifiedAt: new Date("2024-07-05T02:56:26.157Z"),
            id: "<value>",
            description: "optimal controvert innocent venture seldom yahoo",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {},
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/selinux",
            mimeType: "<value>",
            size: 224738,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-01-12T09:52:23.650Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-09-16T06:41:00.610Z"),
            sizeReadable: "<value>",
            publicUrl: "https://best-turret.name/",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-11-03T00:52:46.065Z"),
              modifiedAt: new Date("2025-08-16T20:34:49.918Z"),
              id: "<value>",
              metadata: {
                "key": 977311,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 437750,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 249728,
      maxPage: 868229,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |