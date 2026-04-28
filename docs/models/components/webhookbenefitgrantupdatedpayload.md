# WebhookBenefitGrantUpdatedPayload

Sent when a benefit grant is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantUpdatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantupdatedpayload.js";

let value: WebhookBenefitGrantUpdatedPayload = {
  type: "benefit_grant.updated",
  timestamp: new Date("2024-04-17T13:08:43.650Z"),
  data: {
    createdAt: new Date("2026-10-11T19:34:50.666Z"),
    modifiedAt: new Date("2024-08-03T03:55:46.311Z"),
    id: "<value>",
    isGranted: true,
    isRevoked: true,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    benefitId: "<value>",
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-03-22T06:24:13.619Z"),
      modifiedAt: new Date("2026-08-25T05:54:28.912Z"),
      metadata: {
        "key": 4334.66,
      },
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
      deletedAt: new Date("2025-02-07T04:06:25.419Z"),
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
      createdAt: new Date("2024-05-16T11:42:55.642Z"),
      modifiedAt: new Date("2025-06-21T18:56:50.504Z"),
      type: "custom",
      description:
        "unibody ambitious boohoo culture well-made technician opposite subtle pish",
      selectable: false,
      deletable: true,
      isDeleted: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      properties: {
        note: "<value>",
      },
    },
    properties: {},
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"benefit_grant.updated"*                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           | benefit_grant.updated                                                                         |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | *components.BenefitGrantWebhook*                                                              | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |