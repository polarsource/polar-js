# WebhookRefundUpdatedPayload

Sent when a refund is updated.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookRefundUpdatedPayload } from "@polar-sh/sdk/models/components/webhookrefundupdatedpayload.js";

let value: WebhookRefundUpdatedPayload = {
  data: {
    createdAt: new Date("2023-07-09T21:33:40.829Z"),
    modifiedAt: new Date("2023-08-29T17:14:50.877Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    status: "succeeded",
    reason: "customer_request",
    amount: 391136,
    taxAmount: 52029,
    currency: "New Leu",
    organizationId: "<value>",
    orderId: "<value>",
    subscriptionId: "<value>",
    customerId: "<value>",
    revokeBenefits: false,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `type`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `data`                                                 | [components.Refund](../../models/components/refund.md) | :heavy_check_mark:                                     | N/A                                                    |