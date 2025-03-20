# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components/webhookproductcreatedpayload.js";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2023-10-28T16:59:00.609Z"),
    modifiedAt: new Date("2025-11-09T15:56:51.918Z"),
    id: "<value>",
    name: "<value>",
    description: "converse alert aha gladly since gee whoever",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": 559765,
    },
    prices: [
      {
        createdAt: new Date("2024-05-05T11:17:37.386Z"),
        modifiedAt: new Date("2023-12-08T08:23:00.023Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-01-11T02:18:55.335Z"),
        modifiedAt: new Date("2023-11-29T22:56:02.421Z"),
        id: "<value>",
        description: "silently via and painfully",
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
        path: "/usr",
        mimeType: "<value>",
        size: 266727,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-12-13T00:41:23.123Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-06-04T10:54:53.002Z"),
        sizeReadable: "<value>",
        publicUrl: "https://unsightly-secret.org/",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-02-15T19:47:09.789Z"),
          modifiedAt: new Date("2024-10-26T18:08:56.770Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 664858,
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