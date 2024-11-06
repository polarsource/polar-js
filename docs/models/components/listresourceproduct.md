# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2023-12-03T01:24:28.573Z"),
      modifiedAt: new Date("2024-04-30T15:57:54.017Z"),
      id: "<value>",
      name: "<value>",
      description: "elevator blah boo",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-08-14T22:50:28.709Z"),
          modifiedAt: new Date("2022-04-27T17:18:40.571Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 125701,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-06-12T14:00:52.276Z"),
          modifiedAt: new Date("2024-05-21T01:52:05.438Z"),
          id: "<value>",
          description:
            "phew pro pace provided with inspection boo incidentally alarmed",
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
          path: "/etc/periodic",
          mimeType: "<value>",
          size: 459888,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-11-04T15:15:56.312Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-11-18T12:31:27.009Z"),
          sizeReadable: "<value>",
          publicUrl: "https://assured-airman.org",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2022-02-17T02:28:27.960Z"),
            modifiedAt: new Date("2023-05-18T13:34:30.080Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 881891,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 306065,
    maxPage: 932252,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |