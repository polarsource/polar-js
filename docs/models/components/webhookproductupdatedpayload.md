# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components/webhookproductupdatedpayload.js";

let value: WebhookProductUpdatedPayload = {
  data: {
    createdAt: new Date("2025-04-11T01:09:42.166Z"),
    modifiedAt: new Date("2023-06-22T21:29:52.321Z"),
    id: "<value>",
    name: "<value>",
    description: "finding tragic lightly ultimately inasmuch supposing gah",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": false,
    },
    prices: [
      {
        createdAt: new Date("2023-01-17T19:55:21.199Z"),
        modifiedAt: new Date("2025-08-01T23:38:40.461Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        minimumAmount: 516716,
        maximumAmount: 114762,
        presetAmount: 107776,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-07-19T18:55:51.097Z"),
        modifiedAt: new Date("2025-02-07T03:44:34.259Z"),
        id: "<value>",
        description: "um oh sedately mount although ick",
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
        path: "/usr/include",
        mimeType: "<value>",
        size: 518728,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-05-12T19:14:37.630Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-07-12T12:59:47.341Z"),
        sizeReadable: "<value>",
        publicUrl: "https://heavenly-mathematics.com/",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-07-14T04:03:20.132Z"),
          modifiedAt: new Date("2023-02-01T05:42:01.166Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 376341,
        required: false,
      },
    ],
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `type`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | product.updated                                          |
| `data`                                                   | [components.Product](../../models/components/product.md) | :heavy_check_mark:                                       | A product.                                               |                                                          |