# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components/webhookorganizationupdatedpayload.js";

let value: WebhookOrganizationUpdatedPayload = {
  type: "organization.updated",
  timestamp: new Date("2023-07-16T02:28:27.582Z"),
  data: {
    createdAt: new Date("2025-03-30T11:56:13.023Z"),
    modifiedAt: new Date("2023-10-06T16:38:10.291Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://plain-reboot.info",
    email: "Lola.Keebler@yahoo.com",
    website: null,
    socials: [
      {
        platform: "github",
        url: "https://scratchy-midwife.net/",
      },
    ],
    status: "onboarding_started",
    detailsSubmittedAt: null,
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: true,
      allowCustomerUpdates: true,
      prorationBehavior: "invoice",
      benefitRevocationGracePeriod: 916709,
    },
    notificationSettings: {
      newOrder: true,
      newSubscription: true,
    },
    customerEmailSettings: {
      orderConfirmation: true,
      subscriptionCancellation: true,
      subscriptionConfirmation: false,
      subscriptionCycled: true,
      subscriptionPastDue: false,
      subscriptionRevoked: false,
      subscriptionUncanceled: false,
      subscriptionUpdated: true,
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | organization.updated                                                                          |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Organization](../../models/components/organization.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |