# WebhookRefundCreatedPayload

Sent when a refund is created regardless of status.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookRefundCreatedPayload } from "@polar-sh/sdk/models/components/webhookrefundcreatedpayload.js";

let value: WebhookRefundCreatedPayload = {
  data: {
    createdAt: new Date("2025-04-04T19:41:00.104Z"),
    modifiedAt: new Date("2024-05-16T19:46:49.907Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    status: "succeeded",
    reason: "duplicate",
    amount: 226545,
    taxAmount: 994375,
    currency: "Guyana Dollar",
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