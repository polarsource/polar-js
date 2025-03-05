# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components/webhookorganizationupdatedpayload.js";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2025-08-08T00:51:23.196Z"),
    modifiedAt: new Date("2024-12-25T03:04:40.757Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://frivolous-dish.name",
    bio: "<value>",
    company: "Lakin Group",
    blog: "<value>",
    location: "<value>",
    email: "Katheryn43@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 91613,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 271782,
    profileSettings: {},
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "invoice",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | organization.updated                                               |
| `data`                                                             | [components.Organization](../../models/components/organization.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |