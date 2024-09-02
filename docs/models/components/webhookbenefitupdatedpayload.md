# WebhookBenefitUpdatedPayload

Sent when a benefit is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitUpdatedPayload = {
    data: {
        createdAt: new Date("2024-08-29T04:26:53.411Z"),
        modifiedAt: new Date("2024-03-21T15:17:35.884Z"),
        id: "<value>",
        description: "Synergistic web-enabled product",
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