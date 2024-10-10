# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2024-08-05T00:25:50.473Z"),
    modifiedAt: new Date("2024-03-22T22:29:10.462Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://fatherly-cornet.net/",
    bio: "<value>",
    company: "Corwin Group",
    blog: "<value>",
    location: "<value>",
    email: "Webster.Veum@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 455498,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 221139,
    donationsEnabled: false,
    profileSettings: {},
    featureSettings: {},
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookOrganizationUpdatedPayloadType](../../models/components/webhookorganizationupdatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.Organization](../../models/components/organization.md)                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |