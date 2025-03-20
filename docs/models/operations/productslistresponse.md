# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-09-05T10:50:54.881Z"),
        modifiedAt: new Date("2025-03-29T04:12:45.563Z"),
        id: "<value>",
        name: "<value>",
        description:
          "tender whose forenenst license inquisitively instead rule until judgementally per",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": 345934,
        },
        prices: [
          {
            createdAt: new Date("2023-03-05T08:25:19.328Z"),
            modifiedAt: new Date("2025-05-22T14:58:17.967Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-08-16T10:41:10.454Z"),
            modifiedAt: new Date("2025-07-05T04:07:13.645Z"),
            id: "<value>",
            description: "phew hence brr flood",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              prefix: "<value>",
              expires: {
                ttl: 284430,
                timeframe: "month",
              },
              activations: {
                limit: 492560,
                enableCustomerAdmin: false,
              },
              limitUsage: 618883,
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/Applications",
            mimeType: "<value>",
            size: 364865,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-12-04T03:24:29.291Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-08-16T02:19:13.665Z"),
            sizeReadable: "<value>",
            publicUrl: "https://classic-knickers.info/",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-04-06T23:53:05.015Z"),
              modifiedAt: new Date("2025-02-08T11:53:51.191Z"),
              id: "<value>",
              metadata: {
                "key": 260581,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 493117,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 945689,
      maxPage: 471167,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |