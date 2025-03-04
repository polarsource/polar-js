# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components/listresourceproduct.js";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2024-03-13T16:44:57.446Z"),
      modifiedAt: new Date("2024-10-05T20:31:01.607Z"),
      id: "<value>",
      name: "<value>",
      description: "phooey quickly whereas barring frizzy entire",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 494136,
      },
      prices: [
        {
          createdAt: new Date("2024-04-02T20:16:14.287Z"),
          modifiedAt: new Date("2024-09-23T17:05:30.336Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 333118,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-08-15T08:16:03.323Z"),
          modifiedAt: new Date("2023-12-02T23:09:02.777Z"),
          id: "<value>",
          description:
            "what embossing than glittering sauerkraut off splurge emulsify gee",
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
          path: "/home/user/dir",
          mimeType: "<value>",
          size: 432356,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-02-15T09:45:02.580Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-02-14T02:54:42.879Z"),
          sizeReadable: "<value>",
          publicUrl: "https://lumpy-poppy.net/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-04-08T03:28:16.729Z"),
            modifiedAt: new Date("2025-03-08T10:53:45.227Z"),
            id: "<value>",
            metadata: {
              "key": 141629,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 287244,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 533877,
    maxPage: 813932,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |