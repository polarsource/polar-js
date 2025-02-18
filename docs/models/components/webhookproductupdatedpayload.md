# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components/webhookproductupdatedpayload.js";

let value: WebhookProductUpdatedPayload = {
  data: {
    createdAt: new Date("2023-05-09T08:40:06.195Z"),
    modifiedAt: new Date("2024-11-19T15:27:37.231Z"),
    id: "<value>",
    name: "<value>",
    description: "huzzah cap well case lashes finally",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": "<value>",
    },
    prices: [
      {
        createdAt: new Date("2025-06-28T16:23:51.061Z"),
        modifiedAt: new Date("2025-10-19T08:32:01.767Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 292642,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-05-31T14:32:56.659Z"),
        modifiedAt: new Date("2024-01-19T06:49:45.505Z"),
        id: "<value>",
        description: "even which filthy",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          repositoryOwner: "polarsource",
          repositoryName: "private_repo",
          permission: "admin",
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
        size: 311450,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-03-09T12:35:13.155Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-10-28T01:04:02.669Z"),
        sizeReadable: "<value>",
        publicUrl: "https://frozen-cutlet.com/",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-07-08T05:45:55.648Z"),
          modifiedAt: new Date("2023-09-15T09:27:09.347Z"),
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
        order: 18901,
        required: false,
      },
    ],
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `type`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `data`                                                   | [components.Product](../../models/components/product.md) | :heavy_check_mark:                                       | A product.                                               |