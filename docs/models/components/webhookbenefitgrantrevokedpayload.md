# WebhookBenefitGrantRevokedPayload

Sent when a benefit grant is revoked.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantRevokedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantrevokedpayload.js";

let value: WebhookBenefitGrantRevokedPayload = {
  type: "benefit_grant.revoked",
  timestamp: new Date("2026-12-18T19:40:40.081Z"),
  data: {
    createdAt: new Date("2024-11-26T09:29:34.234Z"),
    modifiedAt: new Date("2025-07-13T14:44:55.788Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: true,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    benefitId: "<value>",
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2026-08-15T02:20:24.917Z"),
      modifiedAt: new Date("2024-06-19T18:06:09.405Z"),
      metadata: {},
      emailVerified: true,
      type: "team",
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2026-09-02T08:26:18.869Z"),
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
      createdAt: new Date("2025-09-07T16:41:04.296Z"),
      modifiedAt: null,
      type: "meter_credit",
      description:
        "blah sometimes catalog uh-huh drat phew impure whole ah darling",
      selectable: false,
      deletable: true,
      isDeleted: false,
      organizationId: "<value>",
      metadata: {},
      properties: {
        units: 507849,
        rollover: false,
        meterId: "<value>",
      },
    },
    properties: {},
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"benefit_grant.revoked"*                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           | benefit_grant.revoked                                                                         |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | *components.BenefitGrantWebhook*                                                              | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |