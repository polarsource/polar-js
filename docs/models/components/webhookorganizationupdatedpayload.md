# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components/webhookorganizationupdatedpayload.js";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2025-09-25T04:48:13.660Z"),
    modifiedAt: new Date("2023-10-30T23:56:54.625Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://urban-mobility.info/",
    bio: "<value>",
    company: "Walsh, Pacocha and Feeney",
    blog: "<value>",
    location: "<value>",
    email: "Helen_Kuhlman6@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 194568,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 221000,
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

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | [components.Organization](../../models/components/organization.md) | :heavy_check_mark:                                                 | N/A                                                                |