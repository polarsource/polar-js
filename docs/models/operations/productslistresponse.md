# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-01-09T15:37:24.600Z"),
        modifiedAt: new Date("2025-01-29T08:56:13.222Z"),
        id: "<value>",
        name: "<value>",
        description:
          "stormy likewise valiantly french towards square bewail gah provided above",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2024-03-09T18:41:33.269Z"),
            modifiedAt: new Date("2025-04-05T11:02:13.055Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "month",
            priceCurrency: "<value>",
            minimumAmount: 627070,
            maximumAmount: 94239,
            presetAmount: 312103,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-03-24T21:36:20.596Z"),
            modifiedAt: new Date("2023-04-11T13:38:20.751Z"),
            id: "<value>",
            description:
              "because ouch huzzah as athwart linear black-and-white",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              guildId: "<id>",
              roleId: "<id>",
              guildToken: "<value>",
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/lib",
            mimeType: "<value>",
            size: 856828,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-02-24T03:14:59.448Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-11-03T22:36:44.749Z"),
            sizeReadable: "<value>",
            publicUrl: "https://alive-challenge.name",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2023-02-03T06:58:47.877Z"),
              modifiedAt: new Date("2024-07-19T14:01:53.345Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 291064,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 245215,
      maxPage: 75286,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |