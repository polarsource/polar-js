# WebhookBenefitGrantUpdatedPayload

Sent when a new benefit grant is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitGrantUpdatedPayload = {
  data: {
    createdAt: new Date("2025-05-02T02:33:58.780Z"),
    modifiedAt: new Date("2024-08-02T04:04:19.829Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    customer: {
      createdAt: new Date("2023-08-02T13:20:36.630Z"),
      modifiedAt: new Date("2025-06-11T08:28:20.086Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      email: "Allison.Osinski@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Tunisia",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://courteous-duffel.net/",
    },
    properties: {},
    benefit: {
      createdAt: new Date("2023-03-27T21:45:07.077Z"),
      modifiedAt: new Date("2023-08-10T13:13:59.220Z"),
      id: "<value>",
      description: "bewail whose masterpiece why rarely splurge electrify",
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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [components.BenefitGrantWebhook](../../models/components/benefitgrantwebhook.md) | :heavy_check_mark:                                                               | N/A                                                                              |