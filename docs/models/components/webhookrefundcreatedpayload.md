# WebhookRefundCreatedPayload

Sent when a refund is created regardless of status.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookRefundCreatedPayload } from "@polar-sh/sdk/models/components/webhookrefundcreatedpayload.js";

let value: WebhookRefundCreatedPayload = {
  type: "refund.created",
  timestamp: new Date("2023-10-16T07:53:56.637Z"),
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
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | refund.created                                                                                |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Refund](../../models/components/refund.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |