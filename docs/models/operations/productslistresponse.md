# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-09-19T17:41:08.939Z"),
        modifiedAt: new Date("2024-04-08T02:10:23.808Z"),
        id: "<value>",
        name: "<value>",
        description:
          "hearten unlined why alongside beyond sandy softly classic disrespect inside",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2024-06-28T06:21:21.363Z"),
            modifiedAt: new Date("2025-01-12T14:19:43.376Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "year",
            priceCurrency: "<value>",
            minimumAmount: 833109,
            maximumAmount: 232432,
            presetAmount: 822781,
          },
        ],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2025-04-26T03:20:59.765Z"),
            modifiedAt: new Date("2023-01-20T00:33:54.779Z"),
            metadata: {
              "key": 596421,
            },
            description:
              "esteemed aw awesome kissingly garrote now though kissingly woot fooey",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              units: 993115,
              meterId: "<value>",
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/Users",
            mimeType: "<value>",
            size: 632980,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-10-28T17:19:20.923Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-01-04T20:15:14.989Z"),
            sizeReadable: "<value>",
            publicUrl: "https://dependent-violin.org/",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-01-11T01:25:24.862Z"),
              modifiedAt: new Date("2025-11-30T23:00:52.959Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 144254,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 476352,
      maxPage: 423394,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |