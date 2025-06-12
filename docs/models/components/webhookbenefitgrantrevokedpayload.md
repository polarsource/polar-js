# WebhookBenefitGrantRevokedPayload

Sent when a benefit grant is revoked.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantRevokedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantrevokedpayload.js";

let value: WebhookBenefitGrantRevokedPayload = {
  data: {
    createdAt: new Date("2025-10-02T04:38:09.243Z"),
    modifiedAt: new Date("2023-10-21T01:27:19.889Z"),
    id: "<value>",
    isGranted: true,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    benefitId: "<value>",
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2023-07-12T03:53:00.913Z"),
      modifiedAt: new Date("2024-04-26T10:19:45.222Z"),
      metadata: {
        "key": 5951.8,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2024-07-29T02:37:49.390Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    properties: {},
    benefit: {
      id: "<value>",
      createdAt: new Date("2024-10-15T22:21:01.919Z"),
      modifiedAt: new Date("2023-02-16T12:33:48.786Z"),
      description: "ouch woot geez wheel analyse duh",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      metadata: {},
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