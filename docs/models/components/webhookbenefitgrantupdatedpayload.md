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
      billingName: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2025-02-07T04:06:25.419Z"),
      firstUserEventAt: new Date("2025-05-05T09:28:54.565Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
    member: null,
    benefit: {
      id: "<value>",
      createdAt: new Date("2025-06-21T18:56:50.504Z"),
      modifiedAt: new Date("2026-06-03T08:09:35.802Z"),
      type: "custom",
      description: "aw wonderfully reschedule wing",
      selectable: false,
      deletable: false,
      isDeleted: false,
      organizationId: "<value>",
      metadata: {
        "key": true,
      },
      visibility: "private",
      properties: {
        note: null,
      },
      visibilityConfigurable: false,
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