# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-05-02T07:36:13.592Z"),
        modifiedAt: new Date("2024-07-11T09:17:17.799Z"),
        id: "<value>",
        name: "<value>",
        description: "roughly seemingly westernise",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": 76399,
        },
        prices: [
          {
            createdAt: new Date("2024-02-06T02:35:21.728Z"),
            modifiedAt: new Date("2023-05-10T21:47:53.800Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
            priceCurrency: "<value>",
            minimumAmount: 77675,
            maximumAmount: 696257,
            presetAmount: 235939,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-05-06T13:29:16.854Z"),
            modifiedAt: new Date("2025-11-18T15:13:10.750Z"),
            id: "<value>",
            description: "neatly gracefully pish aw chairperson consequently",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              archived: {
                "key": false,
              },
              files: [
                "<value>",
              ],
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/home/user",
            mimeType: "<value>",
            size: 415183,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-07-02T22:06:54.503Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-06-20T21:02:58.149Z"),
            sizeReadable: "<value>",
            publicUrl: "https://marvelous-expense.com",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-05-15T02:00:05.722Z"),
              modifiedAt: new Date("2024-11-08T20:12:30.191Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 744937,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 823411,
      maxPage: 490569,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |