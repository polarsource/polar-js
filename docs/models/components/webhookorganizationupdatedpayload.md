# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2024-01-19T04:11:11.964Z"),
    modifiedAt: new Date("2023-03-26T17:02:56.524Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://fixed-patroller.net/",
    bio: "<value>",
    company: "Prosacco, Jones and Franecki",
    blog: "<value>",
    location: "<value>",
    email: "Molly41@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 9143,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 538556,
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