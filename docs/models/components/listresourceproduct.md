# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2024-02-17T11:30:44.964Z"),
      modifiedAt: new Date("2024-06-04T18:26:07.487Z"),
      id: "<value>",
      name: "<value>",
      description:
        "incidentally great chromakey gadzooks briefly between than yahoo able",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2024-10-17T17:31:30.443Z"),
          modifiedAt: new Date("2025-01-11T12:38:56.607Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 196242,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-11-16T21:52:10.277Z"),
          modifiedAt: new Date("2023-09-04T15:50:55.136Z"),
          id: "<value>",
          description:
            "fooey save an tempting outside vastly rebuke giggle yahoo about",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 766889,
              timeframe: "month",
            },
            activations: {
              limit: 799929,
              enableCustomerAdmin: false,
            },
            limitUsage: 408868,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/Users",
          mimeType: "<value>",
          size: 198804,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-07-30T06:16:46.899Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-01-08T22:15:44.580Z"),
          sizeReadable: "<value>",
          publicUrl: "https://second-hand-piglet.net",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-09-27T03:10:10.233Z"),
            modifiedAt: new Date("2023-04-30T15:32:52.133Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 683718,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 253772,
    maxPage: 164590,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |