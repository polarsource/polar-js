# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components/listresourceproduct.js";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2023-03-08T19:15:27.321Z"),
      modifiedAt: new Date("2024-07-26T07:33:30.803Z"),
      id: "<value>",
      name: "<value>",
      description: "before for oh eek",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 574923,
      },
      prices: [
        {
          createdAt: new Date("2024-08-28T05:23:30.237Z"),
          modifiedAt: new Date("2024-03-15T18:44:17.437Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 231322,
          maximumAmount: 470724,
          presetAmount: 821046,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-09-07T20:11:01.826Z"),
          modifiedAt: new Date("2024-05-05T04:21:20.735Z"),
          id: "<value>",
          description:
            "youthfully neglect wherever wonderfully hammock provided",
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
          path: "/etc/periodic",
          mimeType: "<value>",
          size: 790109,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-12-12T05:49:53.787Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-04-28T19:28:15.954Z"),
          sizeReadable: "<value>",
          publicUrl: "https://lumpy-atrium.name",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-09-03T23:43:39.465Z"),
            modifiedAt: new Date("2024-01-09T01:39:56.054Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 132306,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 388503,
    maxPage: 539359,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |