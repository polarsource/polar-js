# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2023-11-17T18:41:58.866Z"),
    modifiedAt: new Date("2023-07-09T05:45:55.648Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://babyish-affiliate.net/",
    bio: "<value>",
    company: "Gleichner - Ankunding",
    blog: "<value>",
    location: "<value>",
    email: "Scotty25@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 426608,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 267829,
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