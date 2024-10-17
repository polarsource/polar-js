# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductUpdatedPayload = {
  data: {
    createdAt: new Date("2024-11-29T05:19:54.648Z"),
    modifiedAt: new Date("2023-06-09T03:51:14.602Z"),
    id: "<value>",
    name: "<value>",
    description: "duh politely amongst next explode",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-07-16T21:37:42.229Z"),
        modifiedAt: new Date("2024-09-18T10:12:41.084Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 197633,
        maximumAmount: 397731,
        presetAmount: 60969,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-10-06T20:42:43.162Z"),
        modifiedAt: new Date("2023-07-21T18:40:18.501Z"),
        id: "<value>",
        type: "discord",
        description: "juvenile dispense crest yum versus wedge lock to",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/dev",
        mimeType: "<value>",
        size: 313386,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-03-24T22:43:16.000Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-02-08T14:10:26.713Z"),
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