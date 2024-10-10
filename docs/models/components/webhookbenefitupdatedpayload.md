# WebhookBenefitUpdatedPayload

Sent when a benefit is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitUpdatedPayload = {
  data: {
    createdAt: new Date("2022-04-16T16:44:01.041Z"),
    modifiedAt: new Date("2024-03-09T22:22:29.868Z"),
    id: "<value>",
    description: "mostly cassava below",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {
      repositoryId: "<value>",
      repositoryOwner: "polarsource",
      repositoryName: "private_repo",
      permission: "triage",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.WebhookBenefitUpdatedPayloadType](../../models/components/webhookbenefitupdatedpayloadtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | *components.WebhookBenefitUpdatedPayloadBenefit*                                                           | :heavy_check_mark:                                                                                         | N/A                                                                                                        |