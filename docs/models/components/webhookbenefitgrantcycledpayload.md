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
      createdAt: new Date("2026-07-25T23:55:15.574Z"),
      modifiedAt: new Date("2025-02-16T18:00:50.194Z"),
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
      deletedAt: new Date("2026-02-28T04:52:38.165Z"),
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
      createdAt: new Date("2025-10-27T15:55:44.917Z"),
      modifiedAt: new Date("2026-11-26T16:25:16.282Z"),
      type: "github_repository",
      description: "teammate or ravage indeed",
      selectable: false,
      deletable: false,
      isDeleted: true,
      organizationId: "<value>",
      metadata: {
        "key": 234300,
      },
      properties: {
        repositoryOwner: "polarsource",
        repositoryName: "private_repo",
        permission: "triage",
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