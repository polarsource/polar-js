# WebhookBenefitUpdatedPayload

Sent when a benefit is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitUpdatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitupdatedpayload.js";

let value: WebhookBenefitUpdatedPayload = {
  data: {
    createdAt: new Date("2023-07-12T12:16:27.623Z"),
    modifiedAt: new Date("2025-12-27T09:51:28.931Z"),
    id: "<value>",
    description: "sleepily meh fondly suffice oof even coil armchair",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {
      prefix: "<value>",
      expires: {
        ttl: 289247,
        timeframe: "day",
      },
      activations: {
        limit: 621230,
        enableCustomerAdmin: false,
      },
      limitUsage: 818596,
    },
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `type`               | *string*             | :heavy_check_mark:   | N/A                  | benefit.updated      |
| `data`               | *components.Benefit* | :heavy_check_mark:   | N/A                  |                      |