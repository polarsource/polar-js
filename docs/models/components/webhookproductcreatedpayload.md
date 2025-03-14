# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components/webhookproductcreatedpayload.js";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2023-05-14T15:19:31.084Z"),
    modifiedAt: new Date("2024-11-21T11:58:20.036Z"),
    id: "<value>",
    name: "<value>",
    description: "developmental baseboard basket out and",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": 676140,
    },
    prices: [
      {
        createdAt: new Date("2023-07-31T03:27:33.648Z"),
        modifiedAt: new Date("2024-04-04T23:19:54.974Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        priceAmount: 944689,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-07-29T13:48:05.536Z"),
        modifiedAt: new Date("2024-04-01T08:07:24.314Z"),
        id: "<value>",
        description: "judgementally furthermore meh",
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
        path: "/boot/defaults",
        mimeType: "<value>",
        size: 72,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-08-22T19:59:17.126Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-03-31T11:38:42.791Z"),
        sizeReadable: "<value>",
        publicUrl: "https://male-hose.biz",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-12-06T10:12:28.995Z"),
          modifiedAt: new Date("2024-10-28T21:12:06.679Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 540826,
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