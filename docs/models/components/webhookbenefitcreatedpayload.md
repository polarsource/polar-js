# WebhookBenefitCreatedPayload

Sent when a new benefit is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitCreatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitcreatedpayload.js";

let value: WebhookBenefitCreatedPayload = {
  data: {
    createdAt: new Date("2025-04-19T23:42:02.974Z"),
    modifiedAt: new Date("2023-11-30T23:12:05.956Z"),
    id: "<value>",
    description: "jazz gladly aha eyeliner meh than bah once creative",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {
      prefix: "<value>",
      expires: {
        ttl: 786446,
        timeframe: "day",
      },
      activations: {
        limit: 812365,
        enableCustomerAdmin: false,
      },
      limitUsage: 821896,
    },
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `type`               | *string*             | :heavy_check_mark:   | N/A                  | benefit.created      |
| `data`               | *components.Benefit* | :heavy_check_mark:   | N/A                  |                      |