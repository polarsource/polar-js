# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components/webhookproductupdatedpayload.js";

let value: WebhookProductUpdatedPayload = {
  type: "product.updated",
  timestamp: new Date("2024-07-10T16:47:33.947Z"),
  data: {
    id: "<value>",
    createdAt: new Date("2025-09-03T21:58:48.594Z"),
    modifiedAt: new Date("2024-07-19T00:50:54.843Z"),
    trialInterval: "month",
    trialIntervalCount: 226310,
    name: "<value>",
    description: null,
    recurringInterval: "week",
    recurringIntervalCount: 276287,
    isRecurring: false,
    isArchived: true,
    organizationId: "<value>",
    metadata: {},
    prices: [],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2023-05-31T22:25:46.704Z"),
        modifiedAt: new Date("2023-07-23T01:35:07.884Z"),
        type: "license_keys",
        description:
          "hmph depend pish behind chainstay spattering actually owlishly to",
        selectable: true,
        deletable: false,
        organizationId: "<value>",
        metadata: {},
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 93452,
            timeframe: "day",
          },
          activations: {
            limit: 777902,
            enableCustomerAdmin: true,
          },
          limitUsage: null,
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/home/user",
        mimeType: "<value>",
        size: 715587,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: null,
        version: "<value>",
        service: "product_media",
        isUploaded: false,
        createdAt: new Date("2025-12-06T11:20:59.061Z"),
        sizeReadable: "<value>",
        publicUrl: "https://gaseous-markup.net",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2025-05-25T16:58:54.608Z"),
          modifiedAt: new Date("2023-09-04T14:15:13.546Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          type: "text",
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 93108,
        required: false,
      },
    ],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | product.updated                                                                               |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Product](../../models/components/product.md)                                      | :heavy_check_mark:                                                                            | A product.                                                                                    |                                                                                               |