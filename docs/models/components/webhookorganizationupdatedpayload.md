# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2022-07-12T10:23:24.051Z"),
    modifiedAt: new Date("2022-06-17T04:58:05.871Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://rowdy-recommendation.org",
    bio: "<value>",
    company: "Kuhn LLC",
    blog: "<value>",
    location: "<value>",
    email: "Giovanni5@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 943682,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 129259,
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