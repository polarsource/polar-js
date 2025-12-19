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
        path: "/opt/bin",
        mimeType: "<value>",
        size: 366381,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-06-28T06:21:21.363Z"),
        version: "<value>",
        service: "product_media",
        isUploaded: false,
        createdAt: new Date("2025-06-12T01:48:20.505Z"),
        sizeReadable: "<value>",
        publicUrl: "https://entire-slipper.org",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-12-03T03:18:51.837Z"),
          modifiedAt: new Date("2025-09-25T14:22:13.198Z"),
          id: "<value>",
          metadata: {
            "key": 3666.38,
          },
          type: "checkbox",
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 979536,
        required: false,
      },
    ],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"product.updated"*                                                                           | :heavy_check_mark:                                                                            | N/A                                                                                           | product.updated                                                                               |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Product](../../models/components/product.md)                                      | :heavy_check_mark:                                                                            | A product.                                                                                    |                                                                                               |