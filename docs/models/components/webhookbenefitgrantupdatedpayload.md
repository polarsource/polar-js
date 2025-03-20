# WebhookBenefitGrantUpdatedPayload

Sent when a new benefit grant is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantUpdatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantupdatedpayload.js";

let value: WebhookBenefitGrantUpdatedPayload = {
  data: {
    createdAt: new Date("2023-09-20T16:27:39.107Z"),
    modifiedAt: new Date("2023-01-01T12:54:51.522Z"),
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
      createdAt: new Date("2024-07-05T00:01:05.389Z"),
      modifiedAt: new Date("2023-10-16T17:25:09.716Z"),
      metadata: {
        "key": "<value>",
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "FR",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2024-09-13T18:46:46.987Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    properties: {},
    benefit: {
      createdAt: new Date("2024-12-18T02:37:07.150Z"),
      modifiedAt: new Date("2025-03-06T05:57:12.023Z"),
      id: "<value>",
      description: "now corny quarterly until usually",
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
| `type`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | benefit_grant.updated                                                            |
| `data`                                                                           | [components.BenefitGrantWebhook](../../models/components/benefitgrantwebhook.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |