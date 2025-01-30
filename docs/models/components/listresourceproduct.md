# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components/listresourceproduct.js";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2025-08-17T05:40:50.868Z"),
      modifiedAt: new Date("2025-07-11T02:45:47.122Z"),
      id: "<value>",
      name: "<value>",
      description: "plait indeed aggravating pfft flint whenever hourly",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 716527,
      },
      prices: [
        {
          createdAt: new Date("2024-04-12T07:56:40.102Z"),
          modifiedAt: new Date("2025-09-27T03:10:10.233Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-07-25T04:11:45.005Z"),
          modifiedAt: new Date("2025-01-19T08:30:25.562Z"),
          id: "<value>",
          description: "ostrich aboard pfft so finally",
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
          path: "/usr/bin",
          mimeType: "<value>",
          size: 841379,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-01-05T21:26:12.181Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-05-27T00:18:28.805Z"),
          sizeReadable: "<value>",
          publicUrl: "https://worthwhile-habit.biz/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-09-14T21:16:21.107Z"),
            modifiedAt: new Date("2025-06-07T00:39:37.430Z"),
            id: "<value>",
            metadata: {
              "key": 539696,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 777154,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 318150,
    maxPage: 639855,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |