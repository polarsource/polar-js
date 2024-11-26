# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrganizationUpdatedPayload = {
  data: {
    createdAt: new Date("2022-02-03T09:03:46.147Z"),
    modifiedAt: new Date("2024-01-23T12:24:34.947Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://bouncy-dwell.org",
    bio: "<value>",
    company: "McCullough and Sons",
    blog: "<value>",
    location: "<value>",
    email: "Baylee_DuBuque94@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 645688,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 641713,
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