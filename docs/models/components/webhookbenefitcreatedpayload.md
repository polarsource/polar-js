# WebhookBenefitCreatedPayload

Sent when a new benefit is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitCreatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitcreatedpayload.js";

let value: WebhookBenefitCreatedPayload = {
  data: {
    createdAt: new Date("2023-08-01T09:33:41.426Z"),
    modifiedAt: new Date("2025-04-03T09:48:33.270Z"),
    id: "<value>",
    description: "vista lieu source overcharge shear astride dearest",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {
      archived: {
        "key": false,
      },
      files: [
        "<value>",
      ],
    },
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `type`               | *string*             | :heavy_check_mark:   | N/A                  | benefit.created      |
| `data`               | *components.Benefit* | :heavy_check_mark:   | N/A                  |                      |