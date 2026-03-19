# WebhookBenefitGrantCycledPayload

Sent when a benefit grant is cycled,
meaning the related subscription has been renewed for another period.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantCycledPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantcycledpayload.js";

let value: WebhookBenefitGrantCycledPayload = {
  type: "benefit_grant.cycled",
  timestamp: new Date("2024-11-17T20:31:19.582Z"),
  data: {
    createdAt: new Date("2025-12-12T14:18:47.000Z"),
    modifiedAt: new Date("2026-02-02T08:48:30.457Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    benefitId: "<value>",
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-06-04T21:28:32.740Z"),
      modifiedAt: new Date("2024-03-21T15:56:34.258Z"),
      metadata: {
        "key": "<value>",
      },
      externalId: "usr_1337",
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
      deletedAt: new Date("2026-09-04T17:38:48.600Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
    member: null,
    benefit: {
      id: "<value>",
      createdAt: new Date("2026-05-01T16:24:20.581Z"),
      modifiedAt: null,
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
| `type`                                                                                        | *"benefit_grant.cycled"*                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | benefit_grant.cycled                                                                          |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | *components.BenefitGrantWebhook*                                                              | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |