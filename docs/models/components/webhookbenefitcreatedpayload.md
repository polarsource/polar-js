# WebhookBenefitCreatedPayload

Sent when a new benefit is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitCreatedPayload = {
  data: {
    createdAt: new Date("2024-04-17T03:17:03.175Z"),
    modifiedAt: new Date("2023-08-08T19:18:35.830Z"),
    id: "<value>",
    description: "almighty ugh apropos between judicious phew merit",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {
      repositoryId: "<value>",
      repositoryOwner: "polarsource",
      repositoryName: "private_repo",
      permission: "maintain",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.WebhookBenefitCreatedPayloadType](../../models/components/webhookbenefitcreatedpayloadtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | *components.Benefit*                                                                                       | :heavy_check_mark:                                                                                         | N/A                                                                                                        |