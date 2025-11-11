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
        path: "/System",
        mimeType: "<value>",
        size: 253860,
        storageVersion: "<value>",
        checksumEtag: null,
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-05-07T09:27:30.846Z"),
        version: "<value>",
        service: "product_media",
        isUploaded: false,
        createdAt: new Date("2024-10-16T05:58:33.681Z"),
        sizeReadable: "<value>",
        publicUrl: "https://slow-bonfire.net/",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-10-09T02:00:40.564Z"),
          modifiedAt: new Date("2025-12-28T07:21:00.728Z"),
          id: "<value>",
          metadata: {},
          type: "select",
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
        order: 922916,
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