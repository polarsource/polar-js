# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components/listresourceproduct.js";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2023-09-17T18:54:14.686Z"),
      modifiedAt: new Date("2024-07-10T22:33:01.695Z"),
      id: "<value>",
      name: "<value>",
      description:
        "exactly terrorise aboard why fooey save an tempting outside vastly",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 216998,
      },
      prices: [
        {
          createdAt: new Date("2024-11-29T23:53:33.954Z"),
          modifiedAt: new Date("2024-03-01T14:51:30.829Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-01-18T01:14:03.818Z"),
          modifiedAt: new Date("2023-06-08T14:30:43.169Z"),
          id: "<value>",
          description: "aha underneath the plus roughly",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            archived: {
              "key": false,
            },
            files: [
              "<value>",
            ],
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
          size: 164590,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-08-29T14:19:53.281Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-03-16T23:12:57.117Z"),
          sizeReadable: "<value>",
          publicUrl: "https://tough-summary.name",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-05-24T17:00:00.920Z"),
            modifiedAt: new Date("2023-02-28T23:10:12.238Z"),
            id: "<value>",
            metadata: {
              "key": 439160,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 750407,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 23768,
    maxPage: 386785,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |