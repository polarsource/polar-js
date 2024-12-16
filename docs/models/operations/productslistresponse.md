# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-08-28T04:32:02.162Z"),
        modifiedAt: new Date("2023-02-20T03:49:17.809Z"),
        id: "<value>",
        name: "<value>",
        description: "likewise cute pure badly meanwhile disclosure mount",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": 779581,
        },
        prices: [
          {
            createdAt: new Date("2022-06-22T15:02:43.515Z"),
            modifiedAt: new Date("2024-09-17T15:39:07.023Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 825635,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-01-26T16:13:32.465Z"),
            modifiedAt: new Date("2023-06-20T18:06:49.644Z"),
            id: "<value>",
            description:
              "but whereas hence ack oval anenst petty which unlined",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {},
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/private",
            mimeType: "<value>",
            size: 682564,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-01-13T21:02:35.378Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-11-21T21:55:40.029Z"),
            sizeReadable: "<value>",
            publicUrl: "https://oddball-analogy.net/",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-02-16T21:07:47.311Z"),
              modifiedAt: new Date("2024-10-14T06:11:05.299Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {
                options: [
                  {
                    value: "<value>",
                    label: "<value>",
                  },
                ],
              },
            },
            order: 467216,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 674818,
      maxPage: 974576,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |