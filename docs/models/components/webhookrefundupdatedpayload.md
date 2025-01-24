# WebhookRefundUpdatedPayload

Sent when a refund is updated.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookRefundUpdatedPayload } from "@polar-sh/sdk/models/components/webhookrefundupdatedpayload.js";

let value: WebhookRefundUpdatedPayload = {
  data: {
    createdAt: new Date("2024-04-20T23:53:31.948Z"),
    modifiedAt: new Date("2024-12-25T14:51:25.668Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    status: "succeeded",
    reason: "customer_request",
    amount: 542601,
    taxAmount: 521914,
    currency: "Rupiah",
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