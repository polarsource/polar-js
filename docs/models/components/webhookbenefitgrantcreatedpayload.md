# WebhookBenefitGrantCreatedPayload

Sent when a new benefit grant is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantCreatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantcreatedpayload.js";

let value: WebhookBenefitGrantCreatedPayload = {
  type: "benefit_grant.created",
  timestamp: new Date("2026-10-02T04:38:09.243Z"),
  data: {
    createdAt: new Date("2024-10-20T01:27:19.889Z"),
    modifiedAt: new Date("2025-08-24T21:56:10.576Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: true,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    benefitId: "<value>",
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-11-28T17:40:59.074Z"),
      modifiedAt: new Date("2025-10-14T07:36:23.610Z"),
      metadata: {},
      email: "customer@example.com",
      emailVerified: true,
      type: "individual",
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2026-09-01T02:27:46.266Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
    member: {
      id: "<value>",
      createdAt: new Date("2024-08-29T23:41:53.521Z"),
      modifiedAt: new Date("2024-05-20T19:39:16.494Z"),
      customerId: "<value>",
      email: "member@example.com",
      name: "Jane Doe",
      externalId: "usr_1337",
      role: "billing_manager",
    },
    benefit: {
      id: "<value>",
      createdAt: new Date("2025-10-15T22:21:01.919Z"),
      modifiedAt: new Date("2024-02-16T12:33:48.786Z"),
      type: "license_keys",
      description: "ouch woot geez wheel analyse duh",
      selectable: false,
      deletable: false,
      isDeleted: true,
      organizationId: "<value>",
      metadata: {},
      properties: {
        prefix: "<value>",
        expires: null,
        activations: {
          limit: 240022,
          enableCustomerAdmin: false,
        },
        limitUsage: null,
      },
    },
    properties: {},
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"benefit_grant.created"*                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           | benefit_grant.created                                                                         |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | *components.BenefitGrantWebhook*                                                              | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |