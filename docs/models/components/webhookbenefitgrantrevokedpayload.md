# WebhookBenefitGrantRevokedPayload

Sent when a new benefit grant is revoked.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantRevokedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitGrantRevokedPayload = {
  data: {
    createdAt: new Date("2024-07-23T11:07:08.116Z"),
    modifiedAt: new Date("2025-11-01T00:31:03.453Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    customer: {
      createdAt: new Date("2024-04-24T08:05:27.539Z"),
      modifiedAt: new Date("2025-08-26T11:17:42.321Z"),
      id: "<value>",
      metadata: {
        "key": 405335,
      },
      email: "Stewart_Fritsch24@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "British Indian Ocean Territory (Chagos Archipelago)",
      },
      taxId: [
        "rs_pib",
      ],
      organizationId: "<value>",
      avatarUrl: "https://incomparable-seagull.com/",
    },
    properties: {},
    benefit: {
      createdAt: new Date("2024-08-18T14:57:12.197Z"),
      modifiedAt: new Date("2025-09-07T18:38:25.731Z"),
      id: "<value>",
      description: "faithfully individual gadzooks",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        note: "<value>",
      },
      isTaxApplicable: false,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [components.BenefitGrantWebhook](../../models/components/benefitgrantwebhook.md) | :heavy_check_mark:                                                               | N/A                                                                              |