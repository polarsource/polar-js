# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2022-02-15T18:15:28.299Z"),
    modifiedAt: new Date("2024-04-07T05:26:02.209Z"),
    id: "<value>",
    name: "<value>",
    description: "which notwithstanding following once joyfully fork easily",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": "<value>",
    },
    prices: [
      {
        createdAt: new Date("2023-02-20T08:18:29.065Z"),
        modifiedAt: new Date("2022-04-13T00:01:55.315Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 36508,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-04-15T14:34:09.142Z"),
        modifiedAt: new Date("2023-04-22T15:26:51.405Z"),
        id: "<value>",
        description: "crossly sprinkles when how",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 159620,
            timeframe: "day",
          },
          activations: {
            limit: 820355,
            enableUserAdmin: false,
          },
          limitUsage: 682147,
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/net",
        mimeType: "<value>",
        size: 167783,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-06-13T10:46:10.763Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-10-12T11:41:32.180Z"),
        sizeReadable: "<value>",
        publicUrl: "https://faint-bonnet.name",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-12-11T21:08:23.117Z"),
          modifiedAt: new Date("2024-09-30T19:05:33.452Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
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
        order: 22070,
        required: false,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.WebhookProductCreatedPayloadType](../../models/components/webhookproductcreatedpayloadtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | [components.Product](../../models/components/product.md)                                                   | :heavy_check_mark:                                                                                         | A product.                                                                                                 |