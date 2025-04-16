# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components/listresourceproduct.js";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2023-01-08T19:39:39.118Z"),
      modifiedAt: new Date("2024-01-19T09:15:19.424Z"),
      id: "<value>",
      name: "<value>",
      description:
        "lady stranger governance underneath polarisation often seldom gosh immaculate bah",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 4239.75,
      },
      prices: [
        {
          createdAt: new Date("2024-11-15T10:01:13.158Z"),
          modifiedAt: new Date("2025-04-24T08:13:15.944Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2024-11-15T02:23:34.961Z"),
          modifiedAt: new Date("2025-03-02T04:20:16.572Z"),
          metadata: {
            "key": false,
          },
          description: "immense garrote antelope yippee",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 397652,
              timeframe: "month",
            },
            activations: {
              limit: 84186,
              enableCustomerAdmin: false,
            },
            limitUsage: 586485,
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
          size: 611170,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-04-09T07:04:05.486Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-05-17T10:37:15.701Z"),
          sizeReadable: "<value>",
          publicUrl: "https://slight-tomb.com/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-04-05T14:57:11.869Z"),
            modifiedAt: new Date("2024-06-19T19:14:34.920Z"),
            id: "<value>",
            metadata: {
              "key": 2138.74,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 627785,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 55845,
    maxPage: 900132,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |