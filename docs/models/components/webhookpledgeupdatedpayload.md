# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components/webhookpledgeupdatedpayload.js";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2023-03-05T04:52:21.615Z"),
    modifiedAt: new Date("2024-11-06T13:51:23.213Z"),
    id: "<value>",
    amount: 495225,
    currency: "Danish Krone",
    state: "refunded",
    type: "pay_upfront",
    issue: {
      id: "8d25a565-7523-417d-b1a6-d5b68cf2820b",
      platform: "github",
      number: 595403,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2023-03-09T15:41:33.926Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "560d7fe8-a542-4817-95c6-e3e9184ba16e",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description:
          "wash whereas drag pull bookend orderly provided excepting",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "770a408e-0098-401d-8712-950a0122c127",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://lucky-sweatshop.com",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Cremin, Walsh and Hansen",
          blog: "<value>",
          location: "<value>",
          email: "Alberta_Emard66@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2023-10-13T22:56:22.312Z"),
          modifiedAt: new Date("2023-07-06T20:17:06.814Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://jittery-dulcimer.org",
          bio: "<value>",
          company: "McGlynn, Schmitt and Carter",
          blog: "<value>",
          location: "<value>",
          email: "Enrique56@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 468332,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 279945,
          profileSettings: {},
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
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