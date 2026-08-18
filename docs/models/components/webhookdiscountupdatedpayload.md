# WebhookDiscountUpdatedPayload

Sent when a discount is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookDiscountUpdatedPayload } from "@polar-sh/sdk/models/components/webhookdiscountupdatedpayload.js";

let value: WebhookDiscountUpdatedPayload = {
  type: "discount.updated",
  timestamp: new Date("2025-12-13T14:59:56.942Z"),
  data: {
    duration: "once",
    type: "fixed",
    amount: 1000,
    currency: "usd",
    amounts: {
      "eur": 900,
      "usd": 1000,
    },
    createdAt: new Date("2026-08-29T07:19:22.725Z"),
    modifiedAt: new Date("2024-09-16T23:55:25.534Z"),
    id: "<value>",
    metadata: {},
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2026-07-17T01:30:34.756Z"),
    endsAt: new Date("2026-11-09T08:57:40.214Z"),
    maxRedemptions: 13590,
    maxRedemptionsPerCustomer: 92843,
    redemptionsCount: 597793,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    products: [],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"discount.updated"*                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           | discount.updated                                                                              |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | *components.Discount*                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |