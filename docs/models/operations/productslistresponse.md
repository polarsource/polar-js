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
            priceAmount: 833109,
          },
        ],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2025-06-20T18:25:36.529Z"),
            modifiedAt: new Date("2025-12-23T20:05:42.931Z"),
            description:
              "garrote truly meh psst that wedding elliptical for consequently",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            metadata: {
              "key": 2967.29,
            },
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
            path: "/usr/bin",
            mimeType: "<value>",
            size: 425618,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-09-27T22:14:59.940Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-12-08T05:49:15.015Z"),
            sizeReadable: "<value>",
            publicUrl: "https://shadowy-compromise.net/",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-12-24T10:52:38.861Z"),
              modifiedAt: new Date("2024-12-26T15:21:45.495Z"),
              id: "<value>",
              metadata: {
                "key": 2743.81,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 336536,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 295394,
      maxPage: 185880,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |