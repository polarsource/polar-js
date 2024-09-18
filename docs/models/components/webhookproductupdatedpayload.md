# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductUpdatedPayload = {
  data: {
    createdAt: new Date("2022-07-27T23:16:45.079Z"),
    modifiedAt: new Date("2022-11-14T17:53:00.058Z"),
    id: "<value>",
    name: "<value>",
    description: "Open-source logistical function",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    type: "business",
    isHighlighted: false,
    prices: [],
    benefits: [
      {
        createdAt: new Date("2024-05-21T23:12:32.333Z"),
        modifiedAt: new Date("2024-01-21T06:28:30.659Z"),
        id: "<value>",
        type: "ads",
        description: "Programmable real-time toolset",
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
        size: 878601,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-06-05T02:11:11.335Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-12-29T04:33:35.446Z"),
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