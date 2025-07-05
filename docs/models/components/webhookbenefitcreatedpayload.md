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
    modifiedAt: new Date("2023-11-11T10:54:49.602Z"),
    description:
      "nervously psst neck fearless offensively close good-natured from portly",
    selectable: true,
    deletable: true,
    organizationId: "<value>",
    metadata: {
      "key": "<value>",
    },
    properties: {
      prefix: "<value>",
      expires: {
        ttl: 93452,
        timeframe: "day",
      },
      activations: {
        limit: 777902,
        enableCustomerAdmin: true,
      },
      limitUsage: null,
    },
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `type`               | *string*             | :heavy_check_mark:   | N/A                  | benefit.created      |
| `data`               | *components.Benefit* | :heavy_check_mark:   | N/A                  |                      |