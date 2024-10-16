# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductUpdatedPayload = {
  data: {
    createdAt: new Date("2024-11-08T09:27:04.733Z"),
    modifiedAt: new Date("2023-12-08T02:08:23.563Z"),
    id: "<value>",
    name: "<value>",
    description: "or responsible pish round whoa past amendment entry twine",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-03-31T05:08:04.982Z"),
        modifiedAt: new Date("2022-12-10T11:19:22.816Z"),
        id: "<value>",
        isArchived: false,
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-03-03T22:35:13.208Z"),
        modifiedAt: new Date("2024-03-25T14:19:00.405Z"),
        id: "<value>",
        type: "discord",
        description: "dally gym yahoo neat although an",
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
        path: "/usr/ports",
        mimeType: "<value>",
        size: 621066,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-01-22T04:38:29.238Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-07-27T11:49:44.190Z"),
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