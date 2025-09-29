# WebhookBenefitGrantRevokedPayload

Sent when a benefit grant is revoked.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantRevokedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantrevokedpayload.js";

let value: WebhookBenefitGrantRevokedPayload = {
  type: "benefit_grant.revoked",
  timestamp: new Date("2025-12-18T19:40:40.081Z"),
  data: {
    createdAt: new Date("2023-10-21T01:27:19.889Z"),
    modifiedAt: new Date("2024-08-24T21:56:10.576Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: true,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    benefitId: "<value>",
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-04-26T10:19:45.222Z"),
      modifiedAt: new Date("2025-02-01T06:50:40.155Z"),
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
      deletedAt: new Date("2025-09-01T02:27:46.266Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
    benefit: {
      id: "<value>",
      createdAt: new Date("2024-01-09T05:46:42.550Z"),
      modifiedAt: new Date("2025-02-03T07:44:40.734Z"),
      type: "license_keys",
      description: "monasticism when that",
      selectable: true,
      deletable: true,
      organizationId: "<value>",
      metadata: {},
      properties: {
        prefix: null,
        expires: {
          ttl: 84298,
          timeframe: "year",
        },
        activations: {
          limit: 202982,
          enableCustomerAdmin: false,
        },
        limitUsage: 666374,
      },
    },
    properties: {},
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | benefit_grant.revoked                                                                         |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | *components.BenefitGrantWebhook*                                                              | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |