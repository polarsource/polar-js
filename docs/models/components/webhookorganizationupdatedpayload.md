# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2023-05-31T02:42:51.473Z"),
    modifiedAt: new Date("2022-12-18T01:51:45.271Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "<value>",
    bio: "<value>",
    company: "West - Hayes",
    blog: "<value>",
    location: "<value>",
    email: "Frederick.Hoppe69@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 831031,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 17768,
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