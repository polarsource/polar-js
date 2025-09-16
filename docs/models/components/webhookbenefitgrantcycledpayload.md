# WebhookBenefitGrantCycledPayload

Sent when a benefit grant is cycled,
meaning the related subscription has been renewed for another period.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantCycledPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantcycledpayload.js";

let value: WebhookBenefitGrantCycledPayload = {
  type: "benefit_grant.cycled",
  timestamp: new Date("2023-11-18T20:31:19.582Z"),
  data: {
    createdAt: new Date("2024-12-12T14:18:47.000Z"),
    modifiedAt: new Date("2025-02-02T08:48:30.457Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
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
      createdAt: new Date("2023-08-12T07:30:21.850Z"),
      modifiedAt: new Date("2023-04-19T07:07:21.162Z"),
      type: "github_repository",
      description: "vicinity spectate publication athwart likely far",
      selectable: true,
      deletable: true,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      properties: {
        repositoryOwner: "polarsource",
        repositoryName: "private_repo",
        permission: "admin",
      },
    },
    properties: {},
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | benefit_grant.cycled                                                                          |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | *components.BenefitGrantWebhook*                                                              | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |