# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components/listresourceproduct.js";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2023-04-04T15:00:02.168Z"),
      modifiedAt: new Date("2023-03-16T12:13:21.445Z"),
      id: "<value>",
      name: "<value>",
      description:
        "properly reconsideration editor who quiet ironclad although even gracefully geez",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2025-11-14T23:46:27.525Z"),
          modifiedAt: new Date("2025-11-26T07:01:03.903Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 797996,
          maximumAmount: 712338,
          presetAmount: 362786,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-06-07T11:46:11.561Z"),
          modifiedAt: new Date("2025-06-29T03:29:33.064Z"),
          id: "<value>",
          description:
            "woot afterwards amid tooth mid given coordinated genuine tensely",
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
          path: "/home",
          mimeType: "<value>",
          size: 742848,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-09-07T12:14:03.053Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-06-28T22:00:04.593Z"),
          sizeReadable: "<value>",
          publicUrl: "https://cruel-cinder.name",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-06-14T21:21:42.344Z"),
            modifiedAt: new Date("2024-02-17T19:07:11.758Z"),
            id: "<value>",
            metadata: {
              "key": 572046,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 342095,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 300235,
    maxPage: 204969,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |