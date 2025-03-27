# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-06-05T07:11:09.514Z"),
        modifiedAt: new Date("2025-06-18T14:19:42.669Z"),
        id: "<value>",
        name: "<value>",
        description:
          "how an negotiation after accomplished highlight underneath",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2024-01-09T04:15:12.510Z"),
            modifiedAt: new Date("2023-01-25T04:31:06.956Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "month",
            priceCurrency: "<value>",
            unitAmount: 547740,
            includedUnits: 784638,
            capAmount: 476798,
            meterId: "<value>",
            meter: {
              id: "<value>",
              name: "<value>",
            },
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-07-27T20:42:35.660Z"),
            modifiedAt: new Date("2025-10-08T16:43:45.654Z"),
            id: "<value>",
            description:
              "tomography consistency supposing approach speedily hyena shoot powerfully",
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
            path: "/usr/src",
            mimeType: "<value>",
            size: 262232,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-01-08T08:40:15.114Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-09-03T02:34:59.893Z"),
            sizeReadable: "<value>",
            publicUrl: "https://warlike-fort.com",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2023-01-07T17:23:15.071Z"),
              modifiedAt: new Date("2025-06-20T14:12:24.330Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 812791,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 793813,
      maxPage: 645225,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |