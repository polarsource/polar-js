# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components/webhookpledgeupdatedpayload.js";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2024-01-14T03:46:37.190Z"),
    modifiedAt: new Date("2024-02-16T17:29:21.058Z"),
    id: "<value>",
    amount: 94971,
    currency: "Tugrik",
    state: "created",
    type: "pay_directly",
    issue: {
      id: "7b7d157a-adb1-4bfb-b64c-3642245166bb",
      platform: "github",
      number: 958794,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2024-04-02T08:35:55.906Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "e56ea74a-229b-4a17-9f3d-c1d1022e90af",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description:
          "sentimental unhealthy slimy westernize miserably brr edible flu",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "d6381504-1bdf-4237-aeee-a59fa070118d",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://cruel-plumber.info",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Hoeger Inc",
          blog: "<value>",
          location: "<value>",
          email: "Logan85@gmail.com",
          twitterUsername: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        internalOrganization: {
          createdAt: new Date("2023-10-29T19:23:08.733Z"),
          modifiedAt: new Date("2024-08-01T02:14:15.374Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://oddball-lifestyle.biz/",
          email: "Kelsie90@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "x",
              url: "https://authorized-yeast.biz/",
            },
          ],
          detailsSubmittedAt: new Date("2024-06-04T14:53:32.625Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
          bio: "<value>",
          company: "Feeney - Ward",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 172136,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 880078,
          profileSettings: {},
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