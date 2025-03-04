# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components/webhookpledgeupdatedpayload.js";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2025-04-19T23:42:02.974Z"),
    modifiedAt: new Date("2023-11-30T23:12:05.956Z"),
    id: "<value>",
    amount: 872564,
    currency: "Azerbaijanian Manat",
    state: "refunded",
    type: "pay_on_completion",
    issue: {
      id: "41475610-e14a-4d5a-a706-0fc53655e6b2",
      platform: "github",
      number: 493734,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2025-01-15T03:45:37.920Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "d3609e6f-938a-4aa3-b33b-7ac97682cecd",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "sleepy circa throughout kettledrum",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "dea4d632-f183-4d3b-92fa-6f862b933370",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://poor-skyline.net",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Marks - Kessler",
          blog: "<value>",
          location: "<value>",
          email: "Zachery9@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2024-01-17T00:37:52.892Z"),
          modifiedAt: new Date("2023-07-05T02:18:29.661Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://aggravating-sarong.net/",
          bio: "<value>",
          company: "Haag Inc",
          blog: "<value>",
          location: "<value>",
          email: "Bobbie_Emmerich0@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 697864,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 448063,
          profileSettings: {},
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
        },
      },
      pledgeBadgeCurrentlyEmbedded: false,
    },
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `type`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `data`                                                 | [components.Pledge](../../models/components/pledge.md) | :heavy_check_mark:                                     | N/A                                                    |