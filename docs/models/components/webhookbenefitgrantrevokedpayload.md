# WebhookBenefitGrantRevokedPayload

Sent when a new benefit grant is revoked.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantRevokedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantrevokedpayload.js";

let value: WebhookBenefitGrantRevokedPayload = {
  data: {
    createdAt: new Date("2024-03-13T10:52:47.144Z"),
    modifiedAt: new Date("2024-05-27T04:51:56.681Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-02-24T23:51:04.163Z"),
      modifiedAt: new Date("2023-03-09T03:06:38.487Z"),
      metadata: {
        "key": 206230,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "SE",
      },
      taxId: [
        "FR61954506077",
        "eu_vat",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2023-05-23T09:32:37.289Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    properties: {},
    benefit: {
      createdAt: new Date("2025-04-27T05:25:51.367Z"),
      modifiedAt: new Date("2024-01-22T05:57:34.526Z"),
      id: "<value>",
      description: "whenever after where beneath really wetly",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        repositoryOwner: "polarsource",
        repositoryName: "private_repo",
        permission: "admin",
      },
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | benefit_grant.revoked                                                            |
| `data`                                                                           | [components.BenefitGrantWebhook](../../models/components/benefitgrantwebhook.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |