# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components/webhookorganizationupdatedpayload.js";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2025-07-05T16:31:28.816Z"),
    modifiedAt: new Date("2024-05-11T02:12:06.108Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://crushing-numeric.biz/",
    bio: "<value>",
    company: "Nicolas - Bartoletti",
    blog: "<value>",
    location: "<value>",
    email: "Carmelo.Ruecker@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 140083,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 746936,
    profileSettings: {},
    featureSettings: {},
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | [components.Organization](../../models/components/organization.md) | :heavy_check_mark:                                                 | N/A                                                                |