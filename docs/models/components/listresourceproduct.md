# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2023-08-03T17:02:27.717Z"),
      modifiedAt: new Date("2022-12-01T01:22:38.683Z"),
      id: "<value>",
      name: "<value>",
      description: "mmm huzzah since birdbath but beneath",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2022-03-03T10:09:31.552Z"),
          modifiedAt: new Date("2023-01-11T10:22:56.932Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 608055,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-04-30T03:55:25.651Z"),
          modifiedAt: new Date("2023-06-02T06:33:39.509Z"),
          id: "<value>",
          description: "oh outside made-up underneath husband tenderly up",
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
          path: "/opt/sbin",
          mimeType: "<value>",
          size: 66963,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-05-17T22:14:01.048Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-03-27T11:10:30.169Z"),
          sizeReadable: "<value>",
          publicUrl: "https://productive-backburn.name",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-04-19T06:24:50.359Z"),
            modifiedAt: new Date("2024-09-04T23:51:10.342Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 208759,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 423019,
    maxPage: 60393,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |