# WebhookBenefitGrantRevokedPayload

Sent when a benefit grant is revoked.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantRevokedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantrevokedpayload.js";

let value: WebhookBenefitGrantRevokedPayload = {
  data: {
    createdAt: new Date("2025-12-18T19:40:40.081Z"),
    modifiedAt: new Date("2025-04-15T04:11:09.163Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    benefitId: "<value>",
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2023-11-27T09:29:34.234Z"),
      modifiedAt: new Date("2025-06-17T23:02:39.442Z"),
      metadata: {
        "key": 9447.18,
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
      deletedAt: new Date("2023-10-19T01:21:41.378Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    properties: {},
    benefit: {
      id: "<value>",
      createdAt: new Date("2023-11-03T12:13:38.868Z"),
      modifiedAt: new Date("2023-06-20T18:06:09.405Z"),
      description: "impressive and past reassemble behind",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      metadata: {
        "key": 8025.3,
      },
      properties: {
        units: 973892,
        rollover: false,
        meterId: "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | benefit_grant.revoked                                                            |
| `data`                                                                           | [components.BenefitGrantWebhook](../../models/components/benefitgrantwebhook.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |