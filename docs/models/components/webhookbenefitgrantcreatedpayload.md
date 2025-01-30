# WebhookBenefitGrantCreatedPayload

Sent when a new benefit grant is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantCreatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantcreatedpayload.js";

let value: WebhookBenefitGrantCreatedPayload = {
  data: {
    createdAt: new Date("2023-01-27T04:21:32.515Z"),
    modifiedAt: new Date("2024-07-31T01:27:54.563Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    customer: {
      createdAt: new Date("2025-07-18T04:39:34.513Z"),
      modifiedAt: new Date("2025-08-20T17:57:58.889Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      email: "Jamison_Streich86@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Bermuda",
      },
      taxId: [
        "tw_vat",
      ],
      organizationId: "<value>",
      avatarUrl: "https://motionless-pantyhose.com",
    },
    properties: {},
    benefit: {
      createdAt: new Date("2025-08-23T07:44:41.190Z"),
      modifiedAt: new Date("2024-06-14T14:48:41.077Z"),
      id: "<value>",
      description: "yowza how yowza even chiffonier mould atop",
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