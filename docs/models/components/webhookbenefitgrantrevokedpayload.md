# WebhookBenefitGrantRevokedPayload

Sent when a new benefit grant is revoked.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantRevokedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitGrantRevokedPayload = {
  data: {
    createdAt: new Date("2024-06-25T03:10:41.430Z"),
    modifiedAt: new Date("2024-10-09T23:45:54.454Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    customer: {
      createdAt: new Date("2025-01-15T03:45:37.920Z"),
      modifiedAt: new Date("2025-08-01T16:15:19.431Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      email: "Anais.Weber@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Costa Rica",
      },
      taxId: [
        "my_itn",
      ],
      organizationId: "<value>",
      avatarUrl: "https://probable-cop-out.biz",
    },
    properties: {},
    benefit: {
      createdAt: new Date("2024-07-01T07:01:17.052Z"),
      modifiedAt: new Date("2025-01-05T16:42:23.865Z"),
      id: "<value>",
      description: "telescope woot shallow ready likely rare bog versus mmm",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        archived: {
          "key": false,
        },
        files: [
          "<value>",
        ],
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