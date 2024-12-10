# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-11-19T02:09:16.945Z"),
        modifiedAt: new Date("2022-02-26T04:08:50.752Z"),
        id: "<value>",
        name: "<value>",
        description: "untimely at whose dream after mesh",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2023-11-01T13:24:54.291Z"),
            modifiedAt: new Date("2024-07-12T10:46:30.365Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 278654,
            maximumAmount: 327374,
            presetAmount: 644675,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-08-30T23:13:41.963Z"),
            modifiedAt: new Date("2024-06-18T01:18:49.622Z"),
            id: "<value>",
            description: "outside oh altruistic bah mmm luck oh fussy graft",
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
            path: "/rescue",
            mimeType: "<value>",
            size: 569496,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-11-18T16:55:51.845Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-02-15T14:51:16.265Z"),
            sizeReadable: "<value>",
            publicUrl: "https://big-deck.com",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-12-21T22:27:46.574Z"),
              modifiedAt: new Date("2024-07-06T23:01:51.786Z"),
              id: "<value>",
              metadata: {
                "key": 514393,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 41309,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 835289,
      maxPage: 381831,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |