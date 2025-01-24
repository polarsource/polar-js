# WebhookRefundCreatedPayload

Sent when a refund is created regardless of status.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookRefundCreatedPayload } from "@polar-sh/sdk/models/components/webhookrefundcreatedpayload.js";

let value: WebhookRefundCreatedPayload = {
  data: {
    createdAt: new Date("2023-09-21T15:17:36.784Z"),
    modifiedAt: new Date("2024-10-13T17:36:45.405Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    status: "failed",
    reason: "satisfaction_guarantee",
    amount: 950894,
    taxAmount: 634091,
    currency: "Mauritius Rupee",
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