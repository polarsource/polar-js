# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components/webhookpledgeupdatedpayload.js";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2024-07-31T01:27:54.563Z"),
    modifiedAt: new Date("2025-07-18T04:39:34.513Z"),
    id: "<value>",
    amount: 878421,
    currency: "Peso Uruguayo",
    state: "refunded",
    type: "pay_on_completion",
    issue: {
      id: "3dcd31be-e8a1-448e-9790-f725823ed14a",
      platform: "github",
      number: 2083,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2023-07-31T14:44:19.695Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "54222fbf-9527-47c8-b3d2-805a288e7124",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "drat tighten but frightened following",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "b26a705a-67d4-49dc-a304-2048a639cbd4",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://gloomy-pocket-watch.com/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Bashirian, Howell and Mohr",
          blog: "<value>",
          location: "<value>",
          email: "Madilyn.Stroman28@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        internalOrganization: {
          createdAt: new Date("2023-01-13T22:44:45.283Z"),
          modifiedAt: new Date("2023-04-14T01:12:14.951Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://soulful-reconsideration.net",
          bio: "<value>",
          company: "Gusikowski - Adams",
          blog: "<value>",
          location: "<value>",
          email: "Alice24@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 56311,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 984550,
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

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `type`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    | pledge.updated                                         |
| `data`                                                 | [components.Pledge](../../models/components/pledge.md) | :heavy_check_mark:                                     | N/A                                                    |                                                        |