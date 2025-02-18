# WebhookBenefitCreatedPayload

Sent when a new benefit is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitCreatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitcreatedpayload.js";

let value: WebhookBenefitCreatedPayload = {
  data: {
    createdAt: new Date("2025-05-27T05:53:52.720Z"),
    modifiedAt: new Date("2025-10-10T06:09:21.767Z"),
    id: "<value>",
    description: "black furthermore as below rim apropos pace that",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {
      guildId: "<id>",
      roleId: "<id>",
      guildToken: "<value>",
    },
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `type`               | *string*             | :heavy_check_mark:   | N/A                  |
| `data`               | *components.Benefit* | :heavy_check_mark:   | N/A                  |