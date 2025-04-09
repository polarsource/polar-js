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
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2025-02-19T07:54:21.964Z"),
          modifiedAt: new Date("2024-11-15T10:01:13.158Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 27611,
          maximumAmount: 715909,
          presetAmount: 624179,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-04-28T18:16:31.930Z"),
          modifiedAt: new Date("2023-06-08T02:51:24.923Z"),
          id: "<value>",
          description:
            "amid degenerate why grouper jell machine nauseate premium",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 11054,
              timeframe: "month",
            },
            activations: {
              limit: 743809,
              enableCustomerAdmin: false,
            },
            limitUsage: 519336,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/Library",
          mimeType: "<value>",
          size: 913428,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-07-13T14:27:22.058Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-04-11T21:40:20.184Z"),
          sizeReadable: "<value>",
          publicUrl: "https://official-custom.info",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-08-23T01:25:49.240Z"),
            modifiedAt: new Date("2025-07-25T04:08:49.985Z"),
            id: "<value>",
            metadata: {
              "key": 673876,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 519429,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 883419,
    maxPage: 245505,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |