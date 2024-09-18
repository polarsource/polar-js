# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2023-10-06T18:19:12.733Z"),
    modifiedAt: new Date("2022-12-24T14:11:46.817Z"),
    id: "<value>",
    name: "<value>",
    description: "Self-enabling dynamic concept",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    type: "individual",
    isHighlighted: false,
    prices: [],
    benefits: [
      {
        createdAt: new Date("2023-04-20T15:40:09.449Z"),
        modifiedAt: new Date("2022-10-19T23:35:36.777Z"),
        id: "<value>",
        description: "Grass-roots disintermediate synergy",
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
        path: "/var/tmp",
        mimeType: "<value>",
        size: 731744,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-02-20T10:20:27.903Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-03-08T09:23:46.256Z"),
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