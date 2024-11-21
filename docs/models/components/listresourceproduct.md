# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2023-03-23T07:13:23.038Z"),
      modifiedAt: new Date("2024-04-26T21:45:53.740Z"),
      id: "<value>",
      name: "<value>",
      description: "warmly embarrassment blah besides unique waver even",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2023-06-02T04:43:32.549Z"),
          modifiedAt: new Date("2023-11-05T12:08:37.220Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 939103,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-10-28T18:33:39.178Z"),
          modifiedAt: new Date("2023-07-05T23:21:00.370Z"),
          id: "<value>",
          description:
            "tenderly noisily phew t-shirt or mindless including while",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 613334,
              timeframe: "month",
            },
            activations: {
              limit: 915692,
              enableUserAdmin: false,
            },
            limitUsage: 361284,
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
          size: 146265,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-02-04T02:05:19.101Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-06-23T14:49:51.984Z"),
          sizeReadable: "<value>",
          publicUrl: "https://enraged-willow.com/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-02-18T15:25:39.111Z"),
            modifiedAt: new Date("2022-05-24T16:59:25.156Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 910382,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 438193,
    maxPage: 492401,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |