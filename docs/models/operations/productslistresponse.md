# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-03-23T05:36:23.892Z"),
        modifiedAt: new Date("2025-05-21T02:16:12.635Z"),
        id: "<value>",
        name: "<value>",
        description:
          "speedily ack who incidentally supposing generously happy-go-lucky strange",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2023-11-07T09:51:48.285Z"),
            modifiedAt: new Date("2024-08-01T06:15:48.559Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "month",
            priceCurrency: "<value>",
            minimumAmount: 458511,
            maximumAmount: 339624,
            presetAmount: 914677,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-10-25T18:33:51.208Z"),
            modifiedAt: new Date("2025-02-20T03:15:37.523Z"),
            id: "<value>",
            description: "phooey fervently ugh foolish whenever wavy austere",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              prefix: "<value>",
              expires: {
                ttl: 546829,
                timeframe: "month",
              },
              activations: {
                limit: 929452,
                enableCustomerAdmin: false,
              },
              limitUsage: 154916,
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/usr/obj",
            mimeType: "<value>",
            size: 130418,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-04-27T01:14:33.844Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-09-05T10:50:54.881Z"),
            sizeReadable: "<value>",
            publicUrl: "https://weighty-nerve.biz",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-04-01T16:45:09.403Z"),
              modifiedAt: new Date("2025-07-07T22:11:11.258Z"),
              id: "<value>",
              metadata: {
                "key": 842289,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 115175,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 919637,
      maxPage: 225921,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |