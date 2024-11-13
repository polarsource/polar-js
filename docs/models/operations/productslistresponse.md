# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-01-08T04:47:03.376Z"),
        modifiedAt: new Date("2024-06-27T00:21:02.962Z"),
        id: "<value>",
        name: "<value>",
        description:
          "psst before anguished emergent upward rival inasmuch uh-huh the",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2022-10-24T10:38:09.514Z"),
            modifiedAt: new Date("2023-11-07T08:04:38.587Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 384273,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-06-19T06:00:22.932Z"),
            modifiedAt: new Date("2022-12-09T16:59:37.115Z"),
            id: "<value>",
            description:
              "pick than heavily speedily out snow fencing vice yet sushi",
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
            path: "/sbin",
            mimeType: "<value>",
            size: 101284,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-06-14T22:00:04.745Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-12-10T19:26:04.923Z"),
            sizeReadable: "<value>",
            publicUrl: "https://frizzy-straw.org",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2023-10-20T03:23:15.846Z"),
              modifiedAt: new Date("2023-04-17T11:28:38.206Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 187361,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 697729,
      maxPage: 970376,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |