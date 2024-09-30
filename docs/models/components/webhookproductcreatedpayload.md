# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2023-02-08T14:10:26.713Z"),
    modifiedAt: new Date("2022-03-03T22:35:13.208Z"),
    id: "<value>",
    name: "<value>",
    description: "joyfully oh outside slow mooch woot per across",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-05-29T02:01:29.899Z"),
        modifiedAt: new Date("2023-06-09T02:59:50.162Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        minimumAmount: 184149,
        maximumAmount: 161431,
        presetAmount: 818633,
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-05-07T00:09:58.053Z"),
        modifiedAt: new Date("2024-03-26T23:23:17.727Z"),
        id: "<value>",
        description: "who across provided magnificent stealthily psst emulsify",
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
        path: "/tmp",
        mimeType: "<value>",
        size: 233837,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-04-18T08:09:28.288Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-03-02T10:25:24.644Z"),
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