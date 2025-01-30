# WebhookBenefitCreatedPayload

Sent when a new benefit is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitCreatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitcreatedpayload.js";

let value: WebhookBenefitCreatedPayload = {
  data: {
    createdAt: new Date("2024-09-19T18:25:13.476Z"),
    modifiedAt: new Date("2023-12-22T03:37:10.516Z"),
    id: "<value>",
    description: "wearily empty idolized after phooey preside because midwife",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {
      note: "<value>",
    },
    isTaxApplicable: false,
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `type`               | *string*             | :heavy_check_mark:   | N/A                  |
| `data`               | *components.Benefit* | :heavy_check_mark:   | N/A                  |