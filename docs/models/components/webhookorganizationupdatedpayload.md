# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components/webhookorganizationupdatedpayload.js";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2025-03-09T15:43:17.509Z"),
    modifiedAt: new Date("2024-06-15T14:07:15.875Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://imaginary-switchboard.com/",
    bio: "<value>",
    company: "Emmerich - Lebsack",
    blog: "<value>",
    location: "<value>",
    email: "Bell_King91@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 377716,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 918172,
    profileSettings: {},
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | [components.Organization](../../models/components/organization.md) | :heavy_check_mark:                                                 | N/A                                                                |