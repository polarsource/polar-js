# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components/webhookorganizationupdatedpayload.js";

let value: WebhookOrganizationUpdatedPayload = {
  type: "organization.updated",
  timestamp: new Date("2024-07-15T02:28:27.582Z"),
  data: {
    createdAt: new Date("2026-03-30T11:56:13.023Z"),
    modifiedAt: new Date("2024-10-05T16:38:10.291Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://plain-reboot.info",
    prorationBehavior: "invoice",
    allowCustomerUpdates: false,
    email: "Hilario4@yahoo.com",
    website: "<value>",
    socials: [],
    status: "denied",
    detailsSubmittedAt: new Date("2026-01-01T23:00:18.176Z"),
    defaultPresentmentCurrency: "<value>",
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: true,
      allowCustomerUpdates: false,
      prorationBehavior: "invoice",
      benefitRevocationGracePeriod: 288227,
      preventTrialAbuse: false,
    },
    notificationSettings: {
      newOrder: true,
      newSubscription: false,
    },
    customerEmailSettings: {
      orderConfirmation: true,
      subscriptionCancellation: true,
      subscriptionConfirmation: false,
      subscriptionCycled: false,
      subscriptionCycledAfterTrial: false,
      subscriptionPastDue: false,
      subscriptionRevoked: false,
      subscriptionUncanceled: true,
      subscriptionUpdated: false,
    },
    customerPortalSettings: {
      usage: {
        show: false,
      },
      subscription: {
        updateSeats: true,
        updatePlan: false,
      },
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"organization.updated"*                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | organization.updated                                                                          |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Organization](../../models/components/organization.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |