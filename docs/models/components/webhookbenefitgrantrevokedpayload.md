# WebhookBenefitGrantRevokedPayload

Sent when a new benefit grant is revoked.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantRevokedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantrevokedpayload.js";

let value: WebhookBenefitGrantRevokedPayload = {
  data: {
    createdAt: new Date("2025-04-08T16:45:39.314Z"),
    modifiedAt: new Date("2023-09-03T13:00:02.802Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    customer: {
      createdAt: new Date("2023-08-21T00:23:22.376Z"),
      modifiedAt: new Date("2025-01-19T23:07:05.447Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      externalId: "<id>",
      email: "Isidro.Dach63@hotmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Uruguay",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://glass-reach.info",
    },
    properties: {
      advertisementCampaignId: "<id>",
    },
    benefit: {
      createdAt: new Date("2024-10-15T08:57:15.593Z"),
      modifiedAt: new Date("2023-06-29T15:57:49.931Z"),
      id: "<value>",
      description:
        "cooperative questionable atop up obesity easily eek fine and stigmatize",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        prefix: "<value>",
        expires: {
          ttl: 61840,
          timeframe: "month",
        },
        activations: {
          limit: 681766,
          enableCustomerAdmin: false,
        },
        limitUsage: 375389,
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