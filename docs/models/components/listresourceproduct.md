# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2024-06-05T12:53:58.133Z"),
      modifiedAt: new Date("2024-12-17T12:16:52.238Z"),
      id: "<value>",
      name: "<value>",
      description: "yahoo deer weary out ape solemnly",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 611548,
      },
      prices: [
        {
          createdAt: new Date("2022-01-28T05:14:01.831Z"),
          modifiedAt: new Date("2022-08-18T16:18:53.836Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 194717,
          maximumAmount: 970927,
          presetAmount: 302413,
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-08-02T21:26:59.664Z"),
          modifiedAt: new Date("2023-12-28T09:57:19.018Z"),
          id: "<value>",
          description: "pfft drat whenever",
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
          path: "/lib",
          mimeType: "<value>",
          size: 246846,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-06-03T00:43:09.210Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-10-31T04:31:16.287Z"),
          sizeReadable: "<value>",
          publicUrl: "https://talkative-suitcase.com",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-12-17T16:29:24.726Z"),
            modifiedAt: new Date("2022-04-15T19:51:11.119Z"),
            id: "<value>",
            metadata: {
              "key": 764854,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 989578,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 119716,
    maxPage: 404439,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |