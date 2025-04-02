# WebhookBenefitGrantCycledPayload

Sent when a benefit grant is cycled,
meaning the related subscription has been renewed for another period.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantCycledPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantcycledpayload.js";

let value: WebhookBenefitGrantCycledPayload = {
  data: {
    createdAt: new Date("2025-06-12T21:06:38.090Z"),
    modifiedAt: new Date("2024-01-18T21:12:05.315Z"),
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
      createdAt: new Date("2024-05-05T23:08:58.513Z"),
      modifiedAt: new Date("2025-05-04T07:22:05.808Z"),
      metadata: {
        "key": false,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "FR61954506077",
        "eu_vat",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2023-08-09T03:53:46.602Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    properties: {},
    benefit: {
      createdAt: new Date("2025-01-21T15:14:30.409Z"),
      modifiedAt: new Date("2024-07-04T12:12:40.835Z"),
      id: "<value>",
      description: "while carefully ouch incidentally as for monocle sleepily",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        prefix: "<value>",
        expires: {
          ttl: 61375,
          timeframe: "year",
        },
        activations: {
          limit: 917102,
          enableCustomerAdmin: false,
        },
        limitUsage: 775356,
      },
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | benefit_grant.cycled                                                             |
| `data`                                                                           | [components.BenefitGrantWebhook](../../models/components/benefitgrantwebhook.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |