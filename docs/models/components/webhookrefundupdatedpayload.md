# WebhookRefundUpdatedPayload

Sent when a refund is updated.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookRefundUpdatedPayload } from "@polar-sh/sdk/models/components/webhookrefundupdatedpayload.js";

let value: WebhookRefundUpdatedPayload = {
  type: "refund.updated",
  timestamp: new Date("2024-02-09T00:15:20.778Z"),
  data: {
    createdAt: new Date("2024-04-22T04:31:36.394Z"),
    modifiedAt: new Date("2024-09-23T09:27:43.746Z"),
    id: "<value>",
    metadata: {},
    status: "canceled",
    reason: "other",
    amount: 959762,
    taxAmount: 929248,
    currency: "Dominican Peso",
    organizationId: "<value>",
    orderId: "<value>",
    subscriptionId: "<value>",
    customerId: "<value>",
    revokeBenefits: true,
    dispute: null,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"refund.updated"*                                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           | refund.updated                                                                                |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Refund](../../models/components/refund.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |