# WebhookBenefitCreatedPayload

Sent when a new benefit is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitCreatedPayload = {
    data: {
        createdAt: new Date("2023-11-04T14:49:14.630Z"),
        modifiedAt: new Date("2023-01-26T01:18:29.432Z"),
        id: "<value>",
        description: "Reverse-engineered scalable function",
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.WebhookBenefitCreatedPayloadType](../../models/components/webhookbenefitcreatedpayloadtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | *components.WebhookBenefitCreatedPayloadBenefit*                                                           | :heavy_check_mark:                                                                                         | N/A                                                                                                        |