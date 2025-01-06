# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2025-05-25T13:47:58.818Z"),
    modifiedAt: new Date("2023-03-09T19:37:58.157Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://improbable-commercial.org",
    bio: "<value>",
    company: "Johnston, Miller and Fahey",
    blog: "<value>",
    location: "<value>",
    email: "Gregory_Kemmer@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 440063,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 520716,
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