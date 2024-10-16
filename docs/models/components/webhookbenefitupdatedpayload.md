# WebhookBenefitUpdatedPayload

Sent when a benefit is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitUpdatedPayload = {
  data: {
    createdAt: new Date("2024-07-07T23:20:26.961Z"),
    modifiedAt: new Date("2024-06-04T06:03:49.709Z"),
    id: "<value>",
    description: "second-hand despite disarm bogus",
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