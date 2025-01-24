# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2025-04-15T22:56:43.340Z"),
    modifiedAt: new Date("2023-03-15T16:23:33.604Z"),
    id: "<value>",
    name: "<value>",
    description: "gerbil angelic acquire",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": false,
    },
    prices: [
      {
        createdAt: new Date("2023-06-20T15:33:11.008Z"),
        modifiedAt: new Date("2024-06-06T08:35:22.530Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2025-10-20T05:24:13.548Z"),
        modifiedAt: new Date("2023-01-11T03:14:09.247Z"),
        id: "<value>",
        description:
          "eyeliner dependent likely shocked yahoo however gadzooks pliers drat",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 979665,
            timeframe: "year",
          },
          activations: {
            limit: 483774,
            enableCustomerAdmin: false,
          },
          limitUsage: 165853,
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
        size: 237875,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-03-17T21:26:22.971Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-04-17T12:27:46.530Z"),
        sizeReadable: "<value>",
        publicUrl: "https://primary-hovercraft.org",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-12-20T15:19:35.871Z"),
          modifiedAt: new Date("2025-01-27T16:14:29.110Z"),
          id: "<value>",
          metadata: {
            "key": 881168,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {
            options: [
              {
                value: "<value>",
                label: "<value>",
              },
            ],
          },
        },
        order: 896512,
        required: false,
      },
    ],
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `type`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `data`                                                   | [components.Product](../../models/components/product.md) | :heavy_check_mark:                                       | A product.                                               |