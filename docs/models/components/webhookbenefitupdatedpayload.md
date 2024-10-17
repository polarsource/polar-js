# WebhookBenefitUpdatedPayload

Sent when a benefit is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitUpdatedPayload = {
  data: {
    createdAt: new Date("2023-12-25T13:54:38.176Z"),
    modifiedAt: new Date("2024-12-18T21:15:28.785Z"),
    id: "<value>",
    description: "godparent swine curl putrefy diver merry",
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
| `type`                                                                                                     | [components.WebhookBenefitUpdatedPayloadType](../../models/components/webhookbenefitupdatedpayloadtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | *components.BenefitInput*                                                                                  | :heavy_check_mark:                                                                                         | N/A                                                                                                        |