# WebhookBenefitUpdatedPayload

Sent when a benefit is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitUpdatedPayload = {
  data: {
    createdAt: new Date("2022-12-04T11:10:25.256Z"),
    modifiedAt: new Date("2022-04-02T15:04:46.624Z"),
    id: "<value>",
    description: "below accompany coaxingly",
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.WebhookBenefitUpdatedPayloadType](../../models/components/webhookbenefitupdatedpayloadtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | *components.Benefit*                                                                                       | :heavy_check_mark:                                                                                         | N/A                                                                                                        |