# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components/listresourceproduct.js";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2025-03-03T02:39:25.766Z"),
      modifiedAt: new Date("2024-12-28T15:28:03.893Z"),
      id: "<value>",
      name: "<value>",
      description:
        "until eek suspiciously preheat lanky politely feminize deduction sometimes",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2025-10-03T14:15:25.440Z"),
          modifiedAt: new Date("2025-12-29T11:39:30.330Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-10-17T22:57:23.432Z"),
          modifiedAt: new Date("2025-01-24T06:51:24.305Z"),
          id: "<value>",
          description:
            "rundown more clearly afore uproot wide-eyed shrill where",
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
          path: "/boot",
          mimeType: "<value>",
          size: 425408,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-05-03T07:58:46.256Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-03-30T07:01:36.026Z"),
          sizeReadable: "<value>",
          publicUrl: "https://enraged-cauliflower.biz",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-11-21T12:06:42.367Z"),
            modifiedAt: new Date("2023-12-31T20:50:06.920Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 97839,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 894885,
    maxPage: 497958,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |