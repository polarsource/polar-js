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
        createdAt: new Date("2023-01-16T01:29:59.311Z"),
        modifiedAt: new Date("2023-05-02T03:13:00.458Z"),
        type: "license_keys",
        description: "out beneath off phew",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        metadata: {},
        properties: {
          prefix: null,
          expires: {
            ttl: 56931,
            timeframe: "month",
          },
          activations: {
            limit: 936323,
            enableCustomerAdmin: false,
          },
          limitUsage: 702937,
        },
      },
    ],
    medias: [],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-01-17T02:26:08.207Z"),
          modifiedAt: new Date("2025-04-09T14:51:17.764Z"),
          id: "<value>",
          metadata: {
            "key": true,
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
        order: 252765,
        required: false,
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