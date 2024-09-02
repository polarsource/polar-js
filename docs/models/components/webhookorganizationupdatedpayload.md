# WebhookOrganizationUpdatedPayload

Sent when a organization is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookOrganizationUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrganizationUpdatedPayload = {
    data: {
        createdAt: new Date("2023-03-16T08:44:10.226Z"),
        modifiedAt: new Date("2022-09-12T14:51:11.361Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "<value>",
        bio: "<value>",
        company: "Leffler, Legros and Kuphal",
        blog: "<value>",
        location: "<value>",
        email: "Timothy.Goldner@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 196374,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 532320,
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