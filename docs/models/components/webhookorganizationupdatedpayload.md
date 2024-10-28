# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2024-02-20T06:07:18.118Z"),
    modifiedAt: new Date("2024-10-13T12:17:22.336Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://overcooked-tooth.biz/",
    bio: "<value>",
    company: "Wintheiser and Sons",
    blog: "<value>",
    location: "<value>",
    email: "Ismael.Miller@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 552292,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 405679,
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