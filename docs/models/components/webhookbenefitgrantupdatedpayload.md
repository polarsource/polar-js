# WebhookBenefitGrantUpdatedPayload

Sent when a benefit grant is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantUpdatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantupdatedpayload.js";

let value: WebhookBenefitGrantUpdatedPayload = {
  data: {
    createdAt: new Date("2023-04-18T13:08:43.650Z"),
    modifiedAt: new Date("2023-09-16T13:34:50.547Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    benefitId: "<value>",
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-10-11T19:34:50.666Z"),
      modifiedAt: new Date("2025-12-04T18:11:54.423Z"),
      metadata: {
        "key": "<value>",
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2025-08-13T19:24:27.975Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    properties: {},
    benefit: {
      id: "<value>",
      createdAt: new Date("2024-03-22T06:24:13.619Z"),
      modifiedAt: new Date("2024-11-29T00:34:44.806Z"),
      description:
        "with regarding but poor unique furthermore milky yippee warmhearted hopeful",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      properties: {
        prefix: "<value>",
        expires: {
          ttl: 623160,
          timeframe: "month",
        },
        activations: {
          limit: 229034,
          enableCustomerAdmin: false,
        },
        limitUsage: 252619,
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