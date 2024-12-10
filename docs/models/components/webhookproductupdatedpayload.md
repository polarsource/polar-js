# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductUpdatedPayload = {
  data: {
    createdAt: new Date("2022-01-09T13:26:23.661Z"),
    modifiedAt: new Date("2023-10-08T13:24:38.931Z"),
    id: "<value>",
    name: "<value>",
    description: "appliance made-up brr carelessly at",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": false,
    },
    prices: [
      {
        createdAt: new Date("2022-02-11T16:01:53.719Z"),
        modifiedAt: new Date("2022-05-21T17:10:05.507Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 55790,
        maximumAmount: 905001,
        presetAmount: 134795,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-01-20T17:37:00.236Z"),
        modifiedAt: new Date("2024-05-27T10:54:59.560Z"),
        id: "<value>",
        description: "oof matter under indolent and",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 200170,
            timeframe: "month",
          },
          activations: {
            limit: 114692,
            enableUserAdmin: false,
          },
          limitUsage: 603348,
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/mnt",
        mimeType: "<value>",
        size: 429467,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-12-12T09:44:42.528Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-03-18T21:50:43.904Z"),
        sizeReadable: "<value>",
        publicUrl: "https://whole-numeric.biz",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-03-03T14:29:48.031Z"),
          modifiedAt: new Date("2024-02-04T11:30:23.298Z"),
          id: "<value>",
          metadata: {
            "key": 952911,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 914603,
        required: false,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.WebhookProductUpdatedPayloadType](../../models/components/webhookproductupdatedpayloadtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | [components.Product](../../models/components/product.md)                                                   | :heavy_check_mark:                                                                                         | A product.                                                                                                 |