# WebhookRefundCreatedPayload

Sent when a refund is created regardless of status.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookRefundCreatedPayload } from "@polar-sh/sdk/models/components/webhookrefundcreatedpayload.js";

let value: WebhookRefundCreatedPayload = {
  data: {
    createdAt: new Date("2023-10-16T07:53:56.637Z"),
    modifiedAt: new Date("2024-04-22T04:31:36.394Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    status: "failed",
    reason: "customer_request",
    amount: 997648,
    taxAmount: 873398,
    currency: "CFP Franc",
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
| `type`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    | refund.created                                         |
| `data`                                                 | [components.Refund](../../models/components/refund.md) | :heavy_check_mark:                                     | N/A                                                    |                                                        |