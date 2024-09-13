# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2024-12-12T18:13:48.672Z"),
    modifiedAt: new Date("2022-03-31T09:54:33.812Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "<value>",
    bio: "<value>",
    company: "Langworth - O'Reilly",
    blog: "<value>",
    location: "<value>",
    email: "Gregory_Feeney52@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 498534,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 237523,
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