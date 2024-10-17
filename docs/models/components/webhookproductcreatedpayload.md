# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2023-09-20T04:56:13.484Z"),
    modifiedAt: new Date("2023-02-14T14:16:24.671Z"),
    id: "<value>",
    name: "<value>",
    description: "circumnavigate ack ah colorless phew spellcheck fisherman",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-02-16T00:15:32.715Z"),
        modifiedAt: new Date("2024-01-10T10:45:06.401Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 304021,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-09-16T14:31:53.113Z"),
        modifiedAt: new Date("2024-05-31T02:52:11.535Z"),
        id: "<value>",
        description: "fishery really even yum moral gadzooks gee",
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
        path: "/usr/share",
        mimeType: "<value>",
        size: 594028,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-05-01T17:04:34.452Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-12-27T03:00:57.232Z"),
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