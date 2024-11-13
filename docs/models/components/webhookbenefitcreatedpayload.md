# WebhookBenefitCreatedPayload

Sent when a new benefit is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitCreatedPayload = {
  data: {
    createdAt: new Date("2023-01-03T04:14:52.159Z"),
    modifiedAt: new Date("2023-04-20T19:40:49.785Z"),
    id: "<value>",
    description: "runway schlep atomize wilted for nucleotidase",
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
| `data`                                                                                                     | *components.Benefit*                                                                                       | :heavy_check_mark:                                                                                         | N/A                                                                                                        |