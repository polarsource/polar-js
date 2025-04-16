# WebhookBenefitCreatedPayload

Sent when a new benefit is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitCreatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitcreatedpayload.js";

let value: WebhookBenefitCreatedPayload = {
  data: {
    id: "<value>",
    createdAt: new Date("2025-01-07T07:50:46.923Z"),
    modifiedAt: new Date("2025-01-16T07:13:19.224Z"),
    metadata: {
      "key": 814748,
    },
    description:
      "while sticky hm saturate inasmuch quizzically although formation helpful",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {
      prefix: "<value>",
      expires: {
        ttl: 230383,
        timeframe: "day",
      },
      activations: {
        limit: 72155,
        enableCustomerAdmin: false,
      },
      limitUsage: 43666,
    },
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `type`               | *string*             | :heavy_check_mark:   | N/A                  | benefit.created      |
| `data`               | *components.Benefit* | :heavy_check_mark:   | N/A                  |                      |