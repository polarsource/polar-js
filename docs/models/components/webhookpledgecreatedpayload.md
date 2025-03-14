# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components/webhookpledgecreatedpayload.js";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2023-03-09T17:02:11.941Z"),
    modifiedAt: new Date("2024-02-27T11:23:35.011Z"),
    id: "<value>",
    amount: 241750,
    currency: "Yuan Renminbi",
    state: "pending",
    type: "pay_upfront",
    issue: {
      id: "56de4492-5061-48af-933f-d9d3dd38eaa8",
      platform: "github",
      number: 978416,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2023-12-08T08:23:00.023Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "b95431a8-300b-4340-b2d3-f24d64b0ed1c",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "table gadzooks fooey pulp except scout",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "0919d37c-22eb-4bd8-b78b-612f0bf2b43d",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://pretty-complication.net/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Hamill, O'Hara and Terry",
          blog: "<value>",
          location: "<value>",
          email: "Russ82@gmail.com",
          twitterUsername: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        internalOrganization: {
          createdAt: new Date("2024-07-03T09:16:14.276Z"),
          modifiedAt: new Date("2024-06-18T11:12:24.413Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://entire-bowling.net",
          email: "Keshaun_Grimes@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "facebook",
              url: "https://energetic-council.net",
            },
          ],
          detailsSubmittedAt: new Date("2024-02-27T18:10:37.714Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Jacobson, Buckridge and Quigley",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 279972,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 565242,
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
| `type`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    | pledge.created                                         |
| `data`                                                 | [components.Pledge](../../models/components/pledge.md) | :heavy_check_mark:                                     | N/A                                                    |                                                        |