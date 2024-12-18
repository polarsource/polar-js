# WebhookBenefitGrantRevokedPayload

Sent when a new benefit grant is revoked.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantRevokedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitGrantRevokedPayload = {
  data: {
    createdAt: new Date("2023-12-24T04:08:16.291Z"),
    modifiedAt: new Date("2023-07-27T18:43:26.946Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    properties: {},
    benefit: {
      createdAt: new Date("2024-03-18T03:12:28.184Z"),
      modifiedAt: new Date("2024-05-25T13:47:58.818Z"),
      id: "<value>",
      description: "powerfully squeaky rim",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        repositoryOwner: "polarsource",
        repositoryName: "private_repo",
        permission: "pull",
      },
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookBenefitGrantRevokedPayloadType](../../models/components/webhookbenefitgrantrevokedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.BenefitGrantWebhook](../../models/components/benefitgrantwebhook.md)                                     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |