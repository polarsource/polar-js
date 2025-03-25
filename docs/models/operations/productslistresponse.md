# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-03-27T10:49:34.599Z"),
        modifiedAt: new Date("2025-06-21T10:59:20.844Z"),
        id: "<value>",
        name: "<value>",
        description: "jeopardise to ew cow plain gently",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": 346049,
        },
        prices: [
          {
            createdAt: new Date("2023-11-22T18:34:29.972Z"),
            modifiedAt: new Date("2025-07-18T16:24:18.986Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "month",
            priceCurrency: "<value>",
            priceAmount: 535130,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-11-20T10:48:09.719Z"),
            modifiedAt: new Date("2023-03-28T21:20:40.864Z"),
            id: "<value>",
            description:
              "pfft rigidly rebuff graceful yet brr retention mmm what finished",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              prefix: "<value>",
              expires: {
                ttl: 370975,
                timeframe: "day",
              },
              activations: {
                limit: 658321,
                enableCustomerAdmin: false,
              },
              limitUsage: 864215,
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/media",
            mimeType: "<value>",
            size: 73370,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-05-29T03:09:24.790Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-10-11T02:48:00.542Z"),
            sizeReadable: "<value>",
            publicUrl: "https://difficult-plastic.net/",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-03-08T16:57:16.983Z"),
              modifiedAt: new Date("2024-09-16T22:09:09.239Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {
                options: [
                  {
                    value: "<value>",
                    label: "<value>",
                  },
                ],
              },
            },
            order: 884779,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 639041,
      maxPage: 943392,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |