# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-10-22T04:57:04.113Z"),
        modifiedAt: new Date("2024-02-03T21:16:09.204Z"),
        id: "<value>",
        name: "<value>",
        description: "homeschool absentmindedly versus wherever",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2025-10-17T14:31:38.262Z"),
            modifiedAt: new Date("2023-01-07T20:04:09.783Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 878457,
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-08-30T21:41:43.187Z"),
            modifiedAt: new Date("2023-06-06T00:17:15.191Z"),
            id: "<value>",
            description: "brr finally dispense zealous",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              note: "<value>",
            },
            isTaxApplicable: false,
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/usr/src",
            mimeType: "<value>",
            size: 987408,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-09-21T11:09:19.029Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-06-12T16:09:16.678Z"),
            sizeReadable: "<value>",
            publicUrl: "https://rusty-puppet.info/",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-05-25T08:30:10.056Z"),
              modifiedAt: new Date("2025-04-19T02:14:13.396Z"),
              id: "<value>",
              metadata: {
                "key": 678035,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 823129,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 678280,
      maxPage: 364171,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |