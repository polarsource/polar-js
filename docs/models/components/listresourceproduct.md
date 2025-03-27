# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components/listresourceproduct.js";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2024-11-14T05:12:25.110Z"),
      modifiedAt: new Date("2023-09-10T11:11:20.378Z"),
      id: "<value>",
      name: "<value>",
      description: "down whereas team since whereas mmm",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 236034,
      },
      prices: [
        {
          createdAt: new Date("2025-08-20T14:20:30.743Z"),
          modifiedAt: new Date("2024-05-04T04:09:38.309Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
          priceCurrency: "<value>",
          priceAmount: 615511,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-10-07T15:41:56.971Z"),
          modifiedAt: new Date("2024-12-15T23:17:13.004Z"),
          id: "<value>",
          description: "operating duh scar masculinize interestingly",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 550913,
              timeframe: "month",
            },
            activations: {
              limit: 360815,
              enableCustomerAdmin: false,
            },
            limitUsage: 228441,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/Applications",
          mimeType: "<value>",
          size: 183447,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-04-20T16:04:19.195Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-09-23T08:27:28.443Z"),
          sizeReadable: "<value>",
          publicUrl: "https://boiling-haircut.biz/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-02-19T03:41:15.084Z"),
            modifiedAt: new Date("2024-12-02T01:24:28.573Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 84703,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 382479,
    maxPage: 977776,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |