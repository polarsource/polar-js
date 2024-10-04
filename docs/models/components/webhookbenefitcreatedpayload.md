# WebhookBenefitCreatedPayload

Sent when a new benefit is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitCreatedPayload = {
  data: {
    createdAt: new Date("2024-08-08T08:09:49.487Z"),
    modifiedAt: new Date("2024-02-05T02:33:57.609Z"),
    id: "<value>",
    description: "pish quaintly boohoo tenderly since",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {
      guildId: "<id>",
      roleId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.WebhookBenefitCreatedPayloadType](../../models/components/webhookbenefitcreatedpayloadtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | *components.WebhookBenefitCreatedPayloadBenefit*                                                           | :heavy_check_mark:                                                                                         | N/A                                                                                                        |