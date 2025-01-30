# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components/webhookorganizationupdatedpayload.js";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2025-01-12T05:08:56.049Z"),
    modifiedAt: new Date("2023-06-06T06:43:30.345Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://rare-tapioca.name/",
    bio: "<value>",
    company: "Krajcik - Orn",
    blog: "<value>",
    location: "<value>",
    email: "Moshe_Ledner@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 894165,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 704152,
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