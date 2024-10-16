# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2022-08-30T19:42:05.316Z"),
    modifiedAt: new Date("2022-11-20T04:52:08.177Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://soggy-term.com/",
    bio: "<value>",
    company: "Kulas, Cole and Mann",
    blog: "<value>",
    location: "<value>",
    email: "Amara22@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 267625,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 915191,
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