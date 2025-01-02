# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2024-12-06T19:21:30.268Z"),
      modifiedAt: new Date("2024-09-19T16:28:52.728Z"),
      id: "<value>",
      name: "<value>",
      description: "of editor ack including angrily venom",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2024-10-13T16:24:24.825Z"),
          modifiedAt: new Date("2025-10-12T17:44:21.842Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 238015,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-02-15T06:40:47.027Z"),
          modifiedAt: new Date("2024-08-02T00:03:08.625Z"),
          id: "<value>",
          description:
            "behold pace blank waft tabletop jealously liberalize monthly",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 711557,
              timeframe: "month",
            },
            activations: {
              limit: 459197,
              enableCustomerAdmin: false,
            },
            limitUsage: 940490,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/opt",
          mimeType: "<value>",
          size: 172985,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-06-01T09:57:43.473Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-12-16T05:46:11.787Z"),
          sizeReadable: "<value>",
          publicUrl: "https://clumsy-event.org/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-09-01T05:45:21.778Z"),
            modifiedAt: new Date("2024-10-23T10:08:12.461Z"),
            id: "<value>",
            metadata: {
              "key": 523055,
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
          order: 759383,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 24739,
    maxPage: 191117,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |