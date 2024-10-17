# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2022-02-26T03:29:51.928Z"),
    modifiedAt: new Date("2023-07-07T02:04:12.238Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://skeletal-rule.com/",
    bio: "<value>",
    company: "Gerhold, Hintz and Mayer",
    blog: "<value>",
    location: "<value>",
    email: "Meta.Von41@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 646099,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 377303,
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