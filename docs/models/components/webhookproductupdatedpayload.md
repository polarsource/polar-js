# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductUpdatedPayload = {
  data: {
    createdAt: new Date("2024-01-26T23:42:41.917Z"),
    modifiedAt: new Date("2022-05-03T15:46:09.091Z"),
    id: "<value>",
    name: "<value>",
    description: "square ah inasmuch how yippee remark before pro mockingly",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-10-01T05:09:33.849Z"),
        modifiedAt: new Date("2024-04-24T18:53:44.873Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        priceAmount: 689579,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-12-06T01:28:23.220Z"),
        modifiedAt: new Date("2022-01-04T17:54:52.872Z"),
        id: "<value>",
        type: "ads",
        description: "fully proper after nor vacantly rotating",
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
        path: "/private/tmp",
        mimeType: "<value>",
        size: 383859,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-06-07T21:21:33.285Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-12-18T07:12:19.050Z"),
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