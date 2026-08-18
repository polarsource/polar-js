# WebhookDiscountCreatedPayload

Sent when a new discount is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookDiscountCreatedPayload } from "@polar-sh/sdk/models/components/webhookdiscountcreatedpayload.js";

let value: WebhookDiscountCreatedPayload = {
  type: "discount.created",
  timestamp: new Date("2025-02-14T19:21:13.273Z"),
  data: {
    duration: "forever",
    durationInMonths: 39010,
    type: "fixed",
    amount: 1000,
    currency: "usd",
    amounts: {
      "eur": 900,
      "usd": 1000,
    },
    createdAt: new Date("2024-09-01T06:52:19.027Z"),
    modifiedAt: new Date("2024-10-08T13:02:05.260Z"),
    id: "<value>",
    metadata: {},
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2024-08-21T21:37:49.002Z"),
    endsAt: new Date("2026-11-26T05:05:52.875Z"),
    maxRedemptions: 356245,
    maxRedemptionsPerCustomer: 457535,
    redemptionsCount: 745130,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    products: [
      {
        metadata: {},
        id: "<value>",
        createdAt: new Date("2024-02-05T00:21:18.363Z"),
        modifiedAt: new Date("2026-07-04T11:58:51.297Z"),
        trialInterval: "month",
        trialIntervalCount: 4883,
        name: "<value>",
        description: "youthful upon alert entire meanwhile lest partridge",
        visibility: "private",
        recurringInterval: "month",
        recurringIntervalCount: 340336,
        meterInterval: "month",
        meterIntervalCount: 112279,
        isRecurring: false,
        isArchived: true,
        organizationId: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"discount.created"*                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           | discount.created                                                                              |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | *components.Discount*                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |