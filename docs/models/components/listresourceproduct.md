# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components/listresourceproduct.js";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2025-05-15T18:42:19.653Z"),
      modifiedAt: new Date("2023-04-16T19:21:16.407Z"),
      id: "<value>",
      name: "<value>",
      description:
        "joyous viciously barracks searchingly well-made apricot yum",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2025-10-09T10:00:22.006Z"),
          modifiedAt: new Date("2023-05-16T02:56:07.560Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          priceAmount: 188719,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-07-16T14:38:54.956Z"),
          modifiedAt: new Date("2023-02-04T18:09:15.157Z"),
          id: "<value>",
          description:
            "priesthood technician ha warm recklessly sniveling through pish",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            guildId: "<id>",
            roleId: "<id>",
            guildToken: "<value>",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/dev",
          mimeType: "<value>",
          size: 230285,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-12-04T22:01:21.527Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-08-06T21:19:05.670Z"),
          sizeReadable: "<value>",
          publicUrl: "https://darling-pilot.name",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-05-27T15:49:28.029Z"),
            modifiedAt: new Date("2024-08-04T16:05:30.256Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 612689,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 203255,
    maxPage: 925393,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |