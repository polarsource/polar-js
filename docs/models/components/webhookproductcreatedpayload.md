# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2022-01-16T15:16:57.052Z"),
    modifiedAt: new Date("2024-01-16T00:30:32.668Z"),
    id: "<value>",
    name: "<value>",
    description:
      "galoshes kinase considering although foretell upbeat gift wherever than",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-07-21T20:59:47.090Z"),
        modifiedAt: new Date("2024-07-02T16:51:39.984Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 610598,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-10-05T21:44:59.619Z"),
        modifiedAt: new Date("2024-01-21T01:04:50.326Z"),
        id: "<value>",
        type: "github_repository",
        description:
          "brr because promptly yippee soulful ick vastly than mmm next",
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
        path: "/usr/lib",
        mimeType: "<value>",
        size: 468314,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-04-12T18:14:54.281Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-11-30T01:48:48.230Z"),
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