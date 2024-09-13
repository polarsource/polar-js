# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-10-10T14:19:01.765Z"),
        modifiedAt: new Date("2023-08-28T18:58:29.186Z"),
        id: "<value>",
        name: "<value>",
        description: "Organized 4th generation moderator",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        type: "business",
        isHighlighted: false,
        prices: [
          {
            createdAt: new Date("2022-12-18T19:30:41.398Z"),
            modifiedAt: new Date("2023-04-18T20:01:49.802Z"),
            id: "<value>",
            priceAmount: 221262,
            priceCurrency: "<value>",
            isArchived: false,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-02-07T20:20:50.899Z"),
            modifiedAt: new Date("2022-04-17T14:19:30.394Z"),
            id: "<value>",
            type: "discord",
            description: "Visionary tertiary data-warehouse",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/usr/local/src",
            mimeType: "<value>",
            size: 537023,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-02-11T11:05:07.276Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-05-06T22:15:00.261Z"),
            sizeReadable: "<value>",
            publicUrl: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 100226,
      maxPage: 99569,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |