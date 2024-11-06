# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductUpdatedPayload = {
  data: {
    createdAt: new Date("2024-12-25T09:41:05.009Z"),
    modifiedAt: new Date("2022-05-26T16:11:49.684Z"),
    id: "<value>",
    name: "<value>",
    description: "candid than indeed",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-03-14T12:56:53.269Z"),
        modifiedAt: new Date("2024-07-23T05:17:11.148Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 525439,
        maximumAmount: 402139,
        presetAmount: 394633,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-01-17T05:42:45.439Z"),
        modifiedAt: new Date("2024-03-25T22:52:07.722Z"),
        id: "<value>",
        description: "indeed throughout joyfully annual doodle dish",
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
        path: "/etc/mail",
        mimeType: "<value>",
        size: 570896,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-10-06T18:59:00.388Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-12-13T02:05:45.362Z"),
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-07-29T19:58:52.381Z"),
          modifiedAt: new Date("2024-02-07T07:59:02.677Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {
            options: [
              {
                value: "<value>",
                label: "<value>",
              },
            ],
          },
        },
        order: 375940,
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
| `data`                                                                                                     | [components.ProductInput](../../models/components/productinput.md)                                         | :heavy_check_mark:                                                                                         | A product.                                                                                                 |