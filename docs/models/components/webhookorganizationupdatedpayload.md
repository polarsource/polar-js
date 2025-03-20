# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components/webhookorganizationupdatedpayload.js";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2023-01-28T01:28:09.985Z"),
    modifiedAt: new Date("2023-07-21T02:15:38.786Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://muted-partridge.info",
    email: "Braeden.VonRueden@yahoo.com",
    website: "<value>",
    socials: [
      {
        platform: "x",
        url: "https://unfit-heating.info",
      },
    ],
    detailsSubmittedAt: new Date("2024-05-11T19:52:22.574Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
    bio: "<value>",
    company: "Rogahn LLC",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 50859,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 976700,
    profileSettings: {},
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | organization.updated                                               |
| `data`                                                             | [components.Organization](../../models/components/organization.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |