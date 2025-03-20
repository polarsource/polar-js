# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components/webhookproductupdatedpayload.js";

let value: WebhookProductUpdatedPayload = {
  data: {
    createdAt: new Date("2023-10-26T01:32:31.415Z"),
    modifiedAt: new Date("2024-04-11T11:46:50.754Z"),
    id: "<value>",
    name: "<value>",
    description: "address excluding likewise",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": "<value>",
    },
    prices: [
      {
        createdAt: new Date("2023-01-11T16:17:12.655Z"),
        modifiedAt: new Date("2024-11-02T05:17:14.201Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-09-08T10:00:57.420Z"),
        modifiedAt: new Date("2024-06-27T02:01:12.177Z"),
        id: "<value>",
        description:
          "lest volleyball fast pish except entire queasily reasoning embody",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 565242,
            timeframe: "month",
          },
          activations: {
            limit: 962575,
            enableCustomerAdmin: false,
          },
          limitUsage: 191101,
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/media",
        mimeType: "<value>",
        size: 932220,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-02-26T05:58:35.788Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-05-07T11:12:09.160Z"),
        sizeReadable: "<value>",
        publicUrl: "https://indolent-handle.com",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-10-15T21:07:29.102Z"),
          modifiedAt: new Date("2024-11-25T10:02:30.262Z"),
          id: "<value>",
          metadata: {
            "key": 853721,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 771363,
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