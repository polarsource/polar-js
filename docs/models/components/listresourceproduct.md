# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2022-09-28T13:02:06.335Z"),
      modifiedAt: new Date("2023-06-03T00:43:09.210Z"),
      id: "<value>",
      name: "<value>",
      description:
        "boo oxygenate forenenst uproot rewarding brr even hmph joyfully and",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 201417,
      },
      prices: [
        {
          createdAt: new Date("2023-06-05T04:51:45.961Z"),
          modifiedAt: new Date("2023-02-27T02:39:42.244Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 845385,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-06-05T13:12:25.088Z"),
          modifiedAt: new Date("2023-10-16T10:17:17.179Z"),
          id: "<value>",
          description: "a overstay shinny before",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            repositoryOwner: "polarsource",
            repositoryName: "private_repo",
            permission: "pull",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/proc",
          mimeType: "<value>",
          size: 299592,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-12-15T00:04:42.925Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-02-13T16:01:02.803Z"),
          sizeReadable: "<value>",
          publicUrl: "https://slight-governance.name/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-01-01T21:10:10.994Z"),
            modifiedAt: new Date("2023-10-24T11:48:21.731Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 64244,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 97799,
    maxPage: 607549,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |