# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components/webhookproductcreatedpayload.js";

let value: WebhookProductCreatedPayload = {
  type: "product.created",
  timestamp: new Date("2023-05-19T12:16:27.570Z"),
  data: {
    id: "<value>",
    createdAt: new Date("2025-09-03T21:58:48.594Z"),
    modifiedAt: new Date("2024-07-19T00:50:54.843Z"),
    trialInterval: "month",
    trialIntervalCount: 226310,
    name: "<value>",
    description: null,
    recurringInterval: "week",
    isRecurring: true,
    isArchived: true,
    organizationId: "<value>",
    metadata: {
      "key": 404125,
    },
    prices: [],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2025-07-22T11:48:28.197Z"),
        modifiedAt: new Date("2025-01-23T12:47:54.549Z"),
        type: "license_keys",
        description: "duh behind via for enchanting negotiation source sore",
        selectable: false,
        deletable: true,
        organizationId: "<value>",
        metadata: {
          "key": true,
        },
        properties: {
          prefix: null,
          expires: {
            ttl: 84298,
            timeframe: "year",
          },
          activations: {
            limit: 202982,
            enableCustomerAdmin: false,
          },
          limitUsage: 666374,
        },
      },
    ],
    medias: [],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-06-16T00:40:28.022Z"),
          modifiedAt: new Date("2025-09-07T23:37:19.259Z"),
          id: "<value>",
          metadata: {
            "key": 931.08,
          },
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
        order: 448574,
        required: true,
      },
    ],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | product.created                                                                               |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Product](../../models/components/product.md)                                      | :heavy_check_mark:                                                                            | A product.                                                                                    |                                                                                               |