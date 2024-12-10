# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2022-01-25T03:09:39.299Z"),
    modifiedAt: new Date("2024-03-15T13:07:35.858Z"),
    id: "<value>",
    name: "<value>",
    description: "towards yet whoa premise customise gah ew despite separately",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": "<value>",
    },
    prices: [
      {
        createdAt: new Date("2024-02-04T21:57:43.798Z"),
        modifiedAt: new Date("2022-10-28T23:39:35.956Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 861406,
        maximumAmount: 790773,
        presetAmount: 194042,
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-09-25T08:32:22.615Z"),
        modifiedAt: new Date("2022-12-30T10:27:46.222Z"),
        id: "<value>",
        description: "doorpost qua recount serialize likewise",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          archived: {
            "key": false,
          },
          files: [
            "<value>",
          ],
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/etc/defaults",
        mimeType: "<value>",
        size: 247796,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-03-24T12:42:40.886Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-01-26T05:11:25.370Z"),
        sizeReadable: "<value>",
        publicUrl: "https://all-story.name/",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-04-22T13:47:04.399Z"),
          modifiedAt: new Date("2024-11-25T14:43:22.496Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 921548,
        required: false,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.WebhookProductCreatedPayloadType](../../models/components/webhookproductcreatedpayloadtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | [components.Product](../../models/components/product.md)                                                   | :heavy_check_mark:                                                                                         | A product.                                                                                                 |