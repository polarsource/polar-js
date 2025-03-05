# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components/listresourceproduct.js";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2023-09-04T10:36:13.688Z"),
      modifiedAt: new Date("2025-05-24T17:00:00.920Z"),
      id: "<value>",
      name: "<value>",
      description: "an emergent see",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 489970,
      },
      prices: [
        {
          createdAt: new Date("2025-07-11T03:37:36.877Z"),
          modifiedAt: new Date("2023-01-05T21:26:12.181Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-12-14T14:02:07.542Z"),
          modifiedAt: new Date("2024-03-19T08:42:04.738Z"),
          id: "<value>",
          description: "factorise meh elegantly excepting",
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
          path: "/usr/local/src",
          mimeType: "<value>",
          size: 196884,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-10-25T18:18:23.199Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-12-02T03:22:48.570Z"),
          sizeReadable: "<value>",
          publicUrl: "https://frozen-disclosure.info/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-06-01T15:17:38.399Z"),
            modifiedAt: new Date("2025-05-16T11:08:43.465Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {
              options: [
                {
                  value: "<value>",
                  label: "<value>",
                },
              ],
            },
          },
          order: 50741,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 982217,
    maxPage: 426461,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |