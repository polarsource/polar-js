# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2024-08-14T22:50:28.709Z"),
      modifiedAt: new Date("2022-04-27T17:18:40.571Z"),
      id: "<value>",
      name: "<value>",
      description: "outnumber decriminalize psst expatiate",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2023-08-09T10:13:51.600Z"),
          modifiedAt: new Date("2023-04-18T14:04:46.675Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 209169,
          maximumAmount: 427526,
          presetAmount: 844283,
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-11-26T11:27:09.590Z"),
          modifiedAt: new Date("2024-05-10T16:19:06.783Z"),
          id: "<value>",
          description: "meanwhile once uh-huh",
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
          path: "/usr/local/bin",
          mimeType: "<value>",
          size: 744991,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-11-19T21:03:32.194Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-11-12T00:40:22.457Z"),
          sizeReadable: "<value>",
          publicUrl: "https://crooked-in-joke.biz/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-12-10T09:42:46.729Z"),
            modifiedAt: new Date("2022-02-18T11:10:32.278Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 935145,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 160090,
    maxPage: 42977,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |