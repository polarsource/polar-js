# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2022-06-18T23:13:24.033Z"),
    modifiedAt: new Date("2023-04-07T11:06:58.417Z"),
    id: "<value>",
    name: "<value>",
    description: "censor but wonderfully qua before queasily",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-06-04T17:46:37.810Z"),
        modifiedAt: new Date("2023-08-12T07:32:23.323Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        minimumAmount: 603216,
        maximumAmount: 989406,
        presetAmount: 966803,
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-08-29T02:59:50.071Z"),
        modifiedAt: new Date("2023-01-24T23:45:29.745Z"),
        id: "<value>",
        description: "versus markup some self-assured",
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
        path: "/etc/ppp",
        mimeType: "<value>",
        size: 743991,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-05-07T03:52:19.100Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-10-02T20:36:49.150Z"),
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