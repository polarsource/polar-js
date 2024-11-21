# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2022-11-26T09:08:13.270Z"),
    modifiedAt: new Date("2023-07-06T02:56:49.501Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://swift-metabolite.com/",
    bio: "<value>",
    company: "Green, Feeney and Stroman",
    blog: "<value>",
    location: "<value>",
    email: "Jeremie.Kohler72@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 323304,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 929785,
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