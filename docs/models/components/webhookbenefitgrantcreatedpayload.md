# WebhookBenefitGrantCreatedPayload

Sent when a new benefit grant is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantCreatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantcreatedpayload.js";

let value: WebhookBenefitGrantCreatedPayload = {
  data: {
    createdAt: new Date("2025-05-21T11:56:40.869Z"),
    modifiedAt: new Date("2023-11-30T15:26:27.741Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    customer: {
      createdAt: new Date("2024-01-25T14:14:38.916Z"),
      modifiedAt: new Date("2023-08-10T04:34:18.047Z"),
      id: "<value>",
      metadata: {
        "key": 409843,
      },
      email: "Deborah32@gmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Mayotte",
      },
      taxId: [
        "us_ein",
      ],
      organizationId: "<value>",
      avatarUrl: "https://uneven-minority.info/",
    },
    properties: {},
    benefit: {
      createdAt: new Date("2024-09-11T12:12:50.008Z"),
      modifiedAt: new Date("2023-10-03T21:04:24.953Z"),
      id: "<value>",
      description: "during arrange faithfully individual gadzooks lonely hm",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        prefix: "<value>",
        expires: {
          ttl: 587817,
          timeframe: "month",
        },
        activations: {
          limit: 329503,
          enableCustomerAdmin: false,
        },
        limitUsage: 265973,
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