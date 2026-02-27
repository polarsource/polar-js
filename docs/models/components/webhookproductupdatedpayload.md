# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components/webhookproductupdatedpayload.js";

let value: WebhookProductUpdatedPayload = {
  type: "product.updated",
  timestamp: new Date("2025-07-10T16:47:33.947Z"),
  data: {
    id: "<value>",
    createdAt: new Date("2026-09-03T21:58:48.594Z"),
    modifiedAt: new Date("2025-07-19T00:50:54.843Z"),
    trialInterval: "month",
    trialIntervalCount: 226310,
    name: "<value>",
    description: null,
    visibility: "draft",
    recurringInterval: "week",
    recurringIntervalCount: 674337,
    isRecurring: true,
    isArchived: true,
    organizationId: "<value>",
    metadata: {},
    prices: [
      {
        createdAt: new Date("2026-11-04T05:55:16.817Z"),
        modifiedAt: new Date("2026-06-28T08:09:03.428Z"),
        id: "<value>",
        source: "catalog",
        amountType: "custom",
        priceCurrency: "<value>",
        isArchived: true,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "week",
        minimumAmount: 375341,
        maximumAmount: 202942,
        presetAmount: 857772,
        legacy: true,
      },
    ],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2024-11-19T14:15:48.794Z"),
        modifiedAt: new Date("2026-12-01T18:30:57.923Z"),
        type: "downloadables",
        description: "how blowgun nor amount even after",
        selectable: false,
        deletable: true,
        organizationId: "<value>",
        metadata: {
          "key": 1162.21,
        },
        properties: {
          archived: {
            "key": true,
            "key1": true,
          },
          files: [],
        },
      },
    ],
    medias: [],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-09-17T23:34:10.111Z"),
          modifiedAt: new Date("2025-04-12T21:32:26.120Z"),
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
        order: 797456,
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