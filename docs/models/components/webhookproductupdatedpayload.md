# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductUpdatedPayload = {
  data: {
    createdAt: new Date("2023-11-10T06:40:42.932Z"),
    modifiedAt: new Date("2022-09-24T23:08:07.624Z"),
    id: "<value>",
    name: "<value>",
    description: "confirm mid individual reboot",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": false,
    },
    prices: [
      {
        createdAt: new Date("2023-09-13T14:57:06.534Z"),
        modifiedAt: new Date("2022-03-28T20:15:02.629Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 18173,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-09-21T15:17:36.784Z"),
        modifiedAt: new Date("2023-10-14T17:36:45.405Z"),
        id: "<value>",
        description:
          "triangular past except hepatitis pro collaboration wisely account ah without",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          guildId: "<id>",
          roleId: "<id>",
          guildToken: "<value>",
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/home",
        mimeType: "<value>",
        size: 955783,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-02-21T00:08:54.044Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-01-31T12:55:38.637Z"),
        sizeReadable: "<value>",
        publicUrl: "https://white-chiffonier.info",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-07-31T20:50:15.524Z"),
          modifiedAt: new Date("2023-11-20T04:44:06.594Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 485097,
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