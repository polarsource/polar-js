# WebhookBenefitUpdatedPayload

Sent when a benefit is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitUpdatedPayload = {
  data: {
    createdAt: new Date("2024-12-25T16:18:25.540Z"),
    modifiedAt: new Date("2023-08-07T10:17:35.263Z"),
    id: "<value>",
    description: "Polarised executive algorithm",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {
      guildId: "<value>",
      roleId: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.WebhookBenefitUpdatedPayloadType](../../models/components/webhookbenefitupdatedpayloadtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | *components.WebhookBenefitUpdatedPayloadBenefit*                                                           | :heavy_check_mark:                                                                                         | N/A                                                                                                        |