# WebhookBenefitGrantRevokedPayload

Sent when a new benefit grant is revoked.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantRevokedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitGrantRevokedPayload = {
  data: {
    createdAt: new Date("2023-01-31T08:54:12.797Z"),
    modifiedAt: new Date("2023-11-30T13:55:43.213Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    customer: {
      createdAt: new Date("2024-07-24T19:25:22.088Z"),
      modifiedAt: new Date("2024-12-13T17:59:25.488Z"),
      id: "<value>",
      metadata: {
        "key": 204283,
      },
      email: "Nia.Stiedemann@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Gabon",
      },
      taxId: [
        "br_cpf",
      ],
      organizationId: "<value>",
      avatarUrl: "https://antique-gown.name",
    },
    properties: {},
    benefit: {
      createdAt: new Date("2023-02-12T12:36:40.948Z"),
      modifiedAt: new Date("2025-08-08T09:47:23.975Z"),
      id: "<value>",
      description: "mmm cycle though",
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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [components.BenefitGrantWebhook](../../models/components/benefitgrantwebhook.md) | :heavy_check_mark:                                                               | N/A                                                                              |