# WebhookRefundUpdatedPayload

Sent when a refund is updated.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookRefundUpdatedPayload } from "@polar-sh/sdk/models/components/webhookrefundupdatedpayload.js";

let value: WebhookRefundUpdatedPayload = {
  data: {
    createdAt: new Date("2023-04-09T06:29:36.990Z"),
    modifiedAt: new Date("2025-11-07T09:51:45.663Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    status: "succeeded",
    reason: "customer_request",
    amount: 145333,
    taxAmount: 710181,
    currency: "Jordanian Dinar",
    organizationId: "<value>",
    orderId: "<value>",
    subscriptionId: "<value>",
    customerId: "<value>",
    revokeBenefits: false,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `type`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    | refund.updated                                         |
| `data`                                                 | [components.Refund](../../models/components/refund.md) | :heavy_check_mark:                                     | N/A                                                    |                                                        |