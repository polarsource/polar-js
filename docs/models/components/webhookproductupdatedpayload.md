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
    meterInterval: "week",
    meterIntervalCount: 513627,
    isRecurring: false,
    isArchived: true,
    organizationId: "<value>",
    metadata: {
      "key": "<value>",
    },
    prices: [
      {
        createdAt: new Date("2025-02-15T08:58:15.502Z"),
        modifiedAt: new Date("2024-08-10T10:11:38.936Z"),
        id: "<value>",
        source: "catalog",
        amountType: "custom",
        priceCurrency: "<value>",
        taxBehavior: "exclusive",
        isArchived: true,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "week",
        minimumAmount: 853108,
        maximumAmount: 414547,
        presetAmount: 621340,
        legacy: true,
      },
    ],
    benefits: [],
    medias: [],
    attachedCustomFields: [],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"product.updated"*                                                                           | :heavy_check_mark:                                                                            | N/A                                                                                           | product.updated                                                                               |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Product](../../models/components/product.md)                                      | :heavy_check_mark:                                                                            | A product.                                                                                    |                                                                                               |