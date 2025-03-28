# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components/webhookproductcreatedpayload.js";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2025-08-08T23:49:49.770Z"),
    modifiedAt: new Date("2024-01-05T07:25:50.662Z"),
    id: "<value>",
    name: "<value>",
    description: "kindheartedly infatuated entry mid custom kinase",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": "<value>",
    },
    prices: [
      {
        createdAt: new Date("2024-10-28T21:12:06.679Z"),
        modifiedAt: new Date("2025-04-16T00:19:55.479Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 758256,
        maximumAmount: 157751,
        presetAmount: 583240,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-08-27T21:13:31.086Z"),
        modifiedAt: new Date("2023-09-07T12:36:13.519Z"),
        id: "<value>",
        description: "male oh apud but boo preside huzzah honestly",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 516231,
            timeframe: "day",
          },
          activations: {
            limit: 499270,
            enableCustomerAdmin: false,
          },
          limitUsage: 831559,
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/opt/bin",
        mimeType: "<value>",
        size: 28088,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-04-12T01:30:33.992Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-04-04T03:54:32.981Z"),
        sizeReadable: "<value>",
        publicUrl: "https://worthy-story.biz/",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-04-17T13:22:03.376Z"),
          modifiedAt: new Date("2025-04-17T04:47:37.706Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 38622,
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