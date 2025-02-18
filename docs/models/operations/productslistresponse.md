# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-12-14T16:56:37.549Z"),
        modifiedAt: new Date("2025-09-03T05:51:57.092Z"),
        id: "<value>",
        name: "<value>",
        description: "purse positively reward however down doubtfully",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2023-07-11T16:56:54.236Z"),
            modifiedAt: new Date("2025-10-06T15:56:27.135Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            minimumAmount: 103346,
            maximumAmount: 886523,
            presetAmount: 185678,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-07-12T18:48:43.069Z"),
            modifiedAt: new Date("2025-12-18T20:33:13.071Z"),
            id: "<value>",
            description: "between ornery compete shout",
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
            path: "/usr/ports",
            mimeType: "<value>",
            size: 660905,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-03-06T01:05:25.783Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-03-24T04:43:02.877Z"),
            sizeReadable: "<value>",
            publicUrl: "https://honored-pinstripe.net",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2023-02-09T00:12:03.007Z"),
              modifiedAt: new Date("2024-06-12T21:48:44.392Z"),
              id: "<value>",
              metadata: {
                "key": 910594,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 73445,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 985170,
      maxPage: 689946,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |