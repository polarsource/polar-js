# WebhookBenefitUpdatedPayload

Sent when a benefit is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitUpdatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitupdatedpayload.js";

let value: WebhookBenefitUpdatedPayload = {
  data: {
    createdAt: new Date("2024-11-23T19:18:21.236Z"),
    modifiedAt: new Date("2023-06-12T01:55:44.227Z"),
    id: "<value>",
    description:
      "synthesise seriously nor joyously through nor cheerfully neatly juvenile instead",
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

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `type`               | *string*             | :heavy_check_mark:   | N/A                  | benefit.updated      |
| `data`               | *components.Benefit* | :heavy_check_mark:   | N/A                  |                      |