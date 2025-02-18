# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components/listresourceproduct.js";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2024-07-02T20:36:53.375Z"),
      modifiedAt: new Date("2025-10-16T02:00:31.918Z"),
      id: "<value>",
      name: "<value>",
      description:
        "scar masculinize interestingly breastplate instead gah besides mortally",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2023-01-11T18:22:31.099Z"),
          modifiedAt: new Date("2025-08-14T22:50:28.709Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-07-02T04:29:02.571Z"),
          modifiedAt: new Date("2023-06-12T14:00:52.276Z"),
          id: "<value>",
          description:
            "alb now urgently yippee joyous viciously barracks searchingly well-made",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            imageHeight: 400,
            imageWidth: 400,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/bin",
          mimeType: "<value>",
          size: 152643,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-05-19T00:54:04.604Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-11-04T15:15:56.312Z"),
          sizeReadable: "<value>",
          publicUrl: "https://worldly-apricot.com/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-06-25T11:00:30.377Z"),
            modifiedAt: new Date("2023-02-17T02:28:27.960Z"),
            id: "<value>",
            metadata: {
              "key": 881891,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 306065,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 932252,
    maxPage: 865277,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |