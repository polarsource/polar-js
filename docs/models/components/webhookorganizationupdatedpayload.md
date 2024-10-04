# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2023-11-19T12:27:44.573Z"),
    modifiedAt: new Date("2024-08-24T22:10:38.820Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://narrow-bookcase.com",
    bio: "<value>",
    company: "Hills, Mitchell and Greenfelder",
    blog: "<value>",
    location: "<value>",
    email: "Ted_Ward-Maggio@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 630837,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 439718,
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