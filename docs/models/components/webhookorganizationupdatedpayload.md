# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2022-10-13T23:20:42.428Z"),
    modifiedAt: new Date("2022-09-09T21:57:43.124Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "<value>",
    bio: "<value>",
    company: "Schaefer and Sons",
    blog: "<value>",
    location: "<value>",
    email: "Casper_Medhurst-Lubowitz3@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 967495,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 828571,
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