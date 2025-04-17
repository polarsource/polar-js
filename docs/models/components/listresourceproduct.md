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
          description: "ack zowie ugh supposing gee fat synthesise yet atop",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          metadata: {
            "key": false,
          },
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 510586,
              timeframe: "month",
            },
            activations: {
              limit: 693563,
              enableCustomerAdmin: false,
            },
            limitUsage: 569280,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/home/user",
          mimeType: "<value>",
          size: 394915,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-10-15T07:03:48.321Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-08-23T01:25:49.240Z"),
          sizeReadable: "<value>",
          publicUrl: "https://old-fashioned-pine.name",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-09-27T01:46:27.660Z"),
            modifiedAt: new Date("2025-09-12T04:55:49.478Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 361504,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 804914,
    maxPage: 686507,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |