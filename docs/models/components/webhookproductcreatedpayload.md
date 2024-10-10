# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2024-11-19T12:36:32.087Z"),
    modifiedAt: new Date("2023-05-27T00:12:10.957Z"),
    id: "<value>",
    name: "<value>",
    description: "so loudly fully proper after nor",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-07-21T21:38:04.131Z"),
        modifiedAt: new Date("2024-11-03T20:41:32.976Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        minimumAmount: 310389,
        maximumAmount: 175010,
        presetAmount: 907566,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-06-29T00:09:50.341Z"),
        modifiedAt: new Date("2024-11-11T02:30:37.629Z"),
        id: "<value>",
        type: "articles",
        description:
          "pro stealthily liquid or schedule famously inside technician brr",
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
        path: "/var/spool",
        mimeType: "<value>",
        size: 699519,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-02-03T07:13:27.840Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-03-28T22:50:15.785Z"),
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