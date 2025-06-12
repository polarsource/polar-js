# WebhookRefundUpdatedPayload

Sent when a refund is updated.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookRefundUpdatedPayload } from "@polar-sh/sdk/models/components/webhookrefundupdatedpayload.js";

let value: WebhookRefundUpdatedPayload = {
  data: {
    createdAt: new Date("2023-10-16T07:53:56.637Z"),
    modifiedAt: new Date("2023-07-29T02:53:13.491Z"),
    id: "<value>",
    metadata: {
      "key": 997648,
    },
    status: "canceled",
    reason: "other",
    amount: 929248,
    taxAmount: 237298,
    currency: "Kyat",
    organizationId: "<value>",
    orderId: "<value>",
    subscriptionId: "<value>",
    customerId: "<value>",
    revokeBenefits: true,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `type`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    | refund.updated                                         |
| `data`                                                 | [components.Refund](../../models/components/refund.md) | :heavy_check_mark:                                     | N/A                                                    |                                                        |