# WebhookBenefitUpdatedPayload

Sent when a benefit is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitUpdatedPayload = {
  data: {
    createdAt: new Date("2022-01-03T03:36:44.105Z"),
    modifiedAt: new Date("2022-11-09T17:28:43.650Z"),
    id: "<value>",
    description: "Sharable transitional flexibility",
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