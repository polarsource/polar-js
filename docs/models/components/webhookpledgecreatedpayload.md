# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components/webhookpledgecreatedpayload.js";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2023-01-15T10:30:06.259Z"),
    modifiedAt: new Date("2023-02-16T17:21:49.933Z"),
    id: "<value>",
    amount: 833214,
    currency: "Uzbekistan Sum",
    state: "created",
    type: "pay_directly",
    issue: {
      id: "64c7f8f7-9119-42ad-9db4-e851e3b9d5b5",
      platform: "github",
      number: 87164,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2023-09-10T22:13:56.959Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "0650cea2-4a2a-43cb-bacc-8923e91b9fa4",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "postbox usually solidly digestive brightly yet sonar",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "7651dafb-affc-467f-b6ee-46cb82a4cb31",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://glaring-babushka.biz/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Kutch - Hintz",
          blog: "<value>",
          location: "<value>",
          email: "Noelia19@hotmail.com",
          twitterUsername: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        internalOrganization: {
          createdAt: new Date("2024-01-04T14:30:16.924Z"),
          modifiedAt: new Date("2023-04-17T02:04:05.828Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://unsteady-rust.com/",
          email: "Dedric.Frami14@gmail.com",
          website: "<value>",
          socials: [
            {
              platform: "facebook",
              url: "https://bleak-sport.net/",
            },
          ],
          detailsSubmittedAt: new Date("2025-08-28T09:43:46.815Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Kassulke and Sons",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 909885,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 50162,
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