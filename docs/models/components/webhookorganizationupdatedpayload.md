# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2023-07-29T19:18:21.561Z"),
    modifiedAt: new Date("2023-06-16T18:30:15.527Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://sophisticated-adrenalin.com",
    bio: "<value>",
    company: "Streich Group",
    blog: "<value>",
    location: "<value>",
    email: "Torrey75@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 163374,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 897394,
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
| `data`                                                                                                               | [components.OrganizationInput](../../models/components/organizationinput.md)                                         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |