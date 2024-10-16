# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2022-12-28T14:16:16.603Z"),
    modifiedAt: new Date("2024-10-04T14:30:45.103Z"),
    id: "<value>",
    name: "<value>",
    description: "seldom kindheartedly smug furthermore",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-07-08T15:03:29.279Z"),
        modifiedAt: new Date("2022-03-09T15:07:56.359Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        minimumAmount: 933771,
        maximumAmount: 148478,
        presetAmount: 520049,
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-12-11T12:45:41.520Z"),
        modifiedAt: new Date("2023-01-20T02:46:22.982Z"),
        id: "<value>",
        type: "discord",
        description: "minus oh juicy oval reschedule drat when lovingly",
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
        path: "/Network",
        mimeType: "<value>",
        size: 783061,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-01-11T02:22:51.707Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-12-08T08:55:00.413Z"),
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