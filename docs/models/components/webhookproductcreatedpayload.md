# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components/webhookproductcreatedpayload.js";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2025-05-30T02:30:37.371Z"),
    modifiedAt: new Date("2024-09-24T17:12:45.710Z"),
    id: "<value>",
    name: "<value>",
    description: "profuse for pfft",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": 144876,
    },
    prices: [
      {
        createdAt: new Date("2023-05-15T02:41:42.416Z"),
        modifiedAt: new Date("2024-10-12T14:02:55.133Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "month",
        priceCurrency: "<value>",
        minimumAmount: 163292,
        maximumAmount: 419995,
        presetAmount: 693509,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-01-06T16:56:17.091Z"),
        modifiedAt: new Date("2025-05-19T10:43:02.366Z"),
        id: "<value>",
        description: "react slump via only lest",
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
        path: "/opt/share",
        mimeType: "<value>",
        size: 208224,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-08-29T01:07:14.865Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-10-30T09:38:04.338Z"),
        sizeReadable: "<value>",
        publicUrl: "https://distant-tenant.info",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-05-14T15:19:31.084Z"),
          modifiedAt: new Date("2024-11-21T11:58:20.036Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {
            options: [
              {
                value: "<value>",
                label: "<value>",
              },
            ],
          },
        },
        order: 956532,
        required: false,
      },
    ],
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `type`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | product.created                                          |
| `data`                                                   | [components.Product](../../models/components/product.md) | :heavy_check_mark:                                       | A product.                                               |                                                          |