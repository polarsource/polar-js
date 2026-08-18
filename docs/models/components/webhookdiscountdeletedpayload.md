# WebhookDiscountDeletedPayload

Sent when a discount is deleted.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookDiscountDeletedPayload } from "@polar-sh/sdk/models/components/webhookdiscountdeletedpayload.js";

let value: WebhookDiscountDeletedPayload = {
  type: "discount.deleted",
  timestamp: new Date("2025-05-27T00:38:35.597Z"),
  data: {
    duration: "repeating",
    durationInMonths: 296545,
    type: "fixed",
    basisPoints: 1000,
    createdAt: new Date("2026-09-24T23:53:28.011Z"),
    modifiedAt: new Date("2025-12-09T07:06:09.290Z"),
    id: "<value>",
    metadata: {
      "key": 4809.82,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2024-07-04T19:12:45.099Z"),
    endsAt: new Date("2024-05-26T22:37:28.776Z"),
    maxRedemptions: 650100,
    maxRedemptionsPerCustomer: 550157,
    redemptionsCount: 995680,
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
| `type`                                                                                        | *"discount.deleted"*                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           | discount.deleted                                                                              |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | *components.Discount*                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |