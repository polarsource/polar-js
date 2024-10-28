# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductUpdatedPayload = {
  data: {
    createdAt: new Date("2023-04-02T04:28:31.052Z"),
    modifiedAt: new Date("2024-12-08T19:52:42.080Z"),
    id: "<value>",
    name: "<value>",
    description: "print athletic factorize",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-11-06T11:27:28.293Z"),
        modifiedAt: new Date("2022-06-17T20:01:38.959Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 827452,
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-07-18T02:33:02.859Z"),
        modifiedAt: new Date("2024-04-13T16:34:33.011Z"),
        id: "<value>",
        type: "ads",
        description:
          "across against absent since outdo madly hard-to-find gee ouch",
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
        path: "/boot/defaults",
        mimeType: "<value>",
        size: 827370,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-08-31T19:50:37.625Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-07-23T17:17:02.467Z"),
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