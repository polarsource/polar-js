# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-03-26T12:43:43.871Z"),
        modifiedAt: new Date("2025-07-16T06:38:50.927Z"),
        id: "<value>",
        name: "<value>",
        description: "amnesty swath likewise zowie",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2023-10-31T16:41:22.925Z"),
            modifiedAt: new Date("2023-07-14T23:16:31.297Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 605091,
            maximumAmount: 456372,
            presetAmount: 157070,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-01-30T09:06:03.992Z"),
            modifiedAt: new Date("2023-10-04T08:23:30.297Z"),
            id: "<value>",
            description:
              "unlined infinite remorseful unused lobotomise for down",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              archived: {
                "key": false,
              },
              files: [
                "<value>",
              ],
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/usr/lib",
            mimeType: "<value>",
            size: 974257,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-07-01T20:45:28.973Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-10-09T19:48:17.819Z"),
            sizeReadable: "<value>",
            publicUrl: "https://courageous-tray.net",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2023-04-18T01:10:45.728Z"),
              modifiedAt: new Date("2025-10-12T04:57:23.597Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 251343,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 171866,
      maxPage: 689614,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |