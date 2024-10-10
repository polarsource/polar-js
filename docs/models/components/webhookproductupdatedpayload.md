# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductUpdatedPayload = {
  data: {
    createdAt: new Date("2022-04-13T11:45:19.275Z"),
    modifiedAt: new Date("2024-12-13T21:51:57.448Z"),
    id: "<value>",
    name: "<value>",
    description: "promptly yippee soulful",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-05-08T10:41:06.101Z"),
        modifiedAt: new Date("2022-05-01T01:29:19.161Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        priceAmount: 553863,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-10-26T12:43:46.379Z"),
        modifiedAt: new Date("2024-09-14T17:53:29.108Z"),
        id: "<value>",
        description:
          "possession characterization showboat likely usually outflank versus",
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
        path: "/usr/local/src",
        mimeType: "<value>",
        size: 70257,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-09-13T07:02:39.035Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-02-05T06:03:44.421Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.WebhookProductUpdatedPayloadType](../../models/components/webhookproductupdatedpayloadtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | [components.ProductInput](../../models/components/productinput.md)                                         | :heavy_check_mark:                                                                                         | A product.                                                                                                 |