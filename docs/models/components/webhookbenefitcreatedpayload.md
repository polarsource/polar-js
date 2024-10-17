# WebhookBenefitCreatedPayload

Sent when a new benefit is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitCreatedPayload = {
  data: {
    createdAt: new Date("2024-07-13T22:30:25.284Z"),
    modifiedAt: new Date("2024-02-10T10:16:05.726Z"),
    id: "<value>",
    description: "marathon um uh-huh kissingly that maul",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {},
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.WebhookBenefitCreatedPayloadType](../../models/components/webhookbenefitcreatedpayloadtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | *components.BenefitInput*                                                                                  | :heavy_check_mark:                                                                                         | N/A                                                                                                        |