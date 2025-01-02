# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2023-05-25T08:22:59.213Z"),
    modifiedAt: new Date("2023-11-02T06:36:12.349Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://palatable-encouragement.org/",
    bio: "<value>",
    company: "Bradtke and Sons",
    blog: "<value>",
    location: "<value>",
    email: "Ezra15@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 721610,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 34920,
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