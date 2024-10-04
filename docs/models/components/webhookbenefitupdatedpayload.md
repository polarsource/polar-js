# WebhookBenefitUpdatedPayload

Sent when a benefit is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitUpdatedPayload = {
  data: {
    createdAt: new Date("2024-02-02T00:48:58.397Z"),
    modifiedAt: new Date("2024-10-03T13:47:43.694Z"),
    id: "<value>",
    description: "mmm seldom excluding trek in before readmit",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {
      paidArticles: false,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.WebhookBenefitUpdatedPayloadType](../../models/components/webhookbenefitupdatedpayloadtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | *components.WebhookBenefitUpdatedPayloadBenefit*                                                           | :heavy_check_mark:                                                                                         | N/A                                                                                                        |