# WebhookBenefitGrantCreatedPayload

Sent when a new benefit grant is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitGrantCreatedPayload = {
  data: {
    createdAt: new Date("2022-05-09T22:38:55.155Z"),
    modifiedAt: new Date("2024-09-06T23:05:35.577Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    properties: {
      advertisementCampaignId: "<id>",
    },
    benefit: {
      createdAt: new Date("2022-07-25T05:59:40.299Z"),
      modifiedAt: new Date("2024-03-22T23:51:41.745Z"),
      id: "<value>",
      description: "powerful how stoop that",
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
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookBenefitGrantCreatedPayloadType](../../models/components/webhookbenefitgrantcreatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.BenefitGrantWebhook](../../models/components/benefitgrantwebhook.md)                                     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |