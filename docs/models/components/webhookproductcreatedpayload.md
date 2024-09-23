# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2024-12-27T17:25:33.535Z"),
    modifiedAt: new Date("2022-09-12T12:02:43.439Z"),
    id: "<value>",
    name: "<value>",
    description: "Grass-roots demand-driven focus group",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-08-31T02:24:06.436Z"),
        modifiedAt: new Date("2022-11-24T06:06:26.488Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        priceAmount: 371935,
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-07-21T08:17:42.556Z"),
        modifiedAt: new Date("2024-05-01T19:16:39.101Z"),
        id: "<value>",
        description: "Cross-platform high-level array",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          paidArticles: false,
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
        size: 141867,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-02-01T12:49:11.262Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-02-23T06:38:26.461Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.WebhookProductCreatedPayloadType](../../models/components/webhookproductcreatedpayloadtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | [components.ProductInput](../../models/components/productinput.md)                                         | :heavy_check_mark:                                                                                         | A product.                                                                                                 |