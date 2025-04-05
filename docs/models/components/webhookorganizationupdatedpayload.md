# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components/webhookorganizationupdatedpayload.js";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2023-07-16T02:28:27.582Z"),
    modifiedAt: new Date("2025-03-30T11:56:13.023Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://fake-eternity.org/",
    email: "Murl_Jacobson@yahoo.com",
    website: "<value>",
    socials: [
      {
        platform: "instagram",
        url: "https://which-freezing.com/",
      },
    ],
    detailsSubmittedAt: new Date("2025-06-03T13:51:02.753Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "invoice",
    },
    bio: "<value>",
    company: "Rau - Marquardt",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 667846,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 292301,
    profileSettings: {},
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | organization.updated                                               |
| `data`                                                             | [components.Organization](../../models/components/organization.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |