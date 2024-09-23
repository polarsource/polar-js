# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductUpdatedPayload = {
  data: {
    createdAt: new Date("2024-11-04T06:00:17.772Z"),
    modifiedAt: new Date("2022-10-17T11:33:47.639Z"),
    id: "<value>",
    name: "<value>",
    description: "Multi-layered scalable protocol",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-06-27T11:44:00.517Z"),
        modifiedAt: new Date("2022-07-24T02:06:35.279Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        priceAmount: 188399,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-03-20T11:55:47.236Z"),
        modifiedAt: new Date("2023-08-01T03:16:20.550Z"),
        id: "<value>",
        type: "license_keys",
        description: "Streamlined 4th generation leverage",
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
        path: "/sys",
        mimeType: "<value>",
        size: 961576,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-01-26T11:12:58.424Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-08-06T02:09:12.930Z"),
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