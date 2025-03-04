# WebhookRefundUpdatedPayload

Sent when a refund is updated.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookRefundUpdatedPayload } from "@polar-sh/sdk/models/components/webhookrefundupdatedpayload.js";

let value: WebhookRefundUpdatedPayload = {
  data: {
    createdAt: new Date("2024-01-03T21:55:52.769Z"),
    modifiedAt: new Date("2025-01-14T23:14:29.526Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    status: "succeeded",
    reason: "duplicate",
    amount: 816346,
    taxAmount: 186967,
    currency: "Philippine Peso",
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