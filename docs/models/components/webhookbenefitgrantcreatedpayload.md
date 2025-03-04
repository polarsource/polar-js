# WebhookBenefitGrantCreatedPayload

Sent when a new benefit grant is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantCreatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantcreatedpayload.js";

let value: WebhookBenefitGrantCreatedPayload = {
  data: {
    createdAt: new Date("2024-03-05T07:39:44.470Z"),
    modifiedAt: new Date("2024-08-16T15:21:31.814Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    customer: {
      createdAt: new Date("2023-06-09T04:26:57.182Z"),
      modifiedAt: new Date("2023-10-18T13:51:15.254Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      externalId: "<id>",
      email: "Maurice_Collins@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Democratic People's Republic of Korea",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://cloudy-commodity.org",
    },
    properties: {},
    benefit: {
      createdAt: new Date("2025-05-21T10:31:09.802Z"),
      modifiedAt: new Date("2025-12-28T13:59:45.916Z"),
      id: "<value>",
      description: "abnormally whenever sympathetically sugary",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        repositoryOwner: "polarsource",
        repositoryName: "private_repo",
        permission: "maintain",
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