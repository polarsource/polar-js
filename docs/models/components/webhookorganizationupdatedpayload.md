# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2024-06-25T10:13:45.773Z"),
    modifiedAt: new Date("2024-05-28T00:02:44.533Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://golden-orchid.com/",
    bio: "<value>",
    company: "Bergstrom - Crona",
    blog: "<value>",
    location: "<value>",
    email: "Lolita47@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 677492,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 319975,
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