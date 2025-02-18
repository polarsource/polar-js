# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components/webhookpledgeupdatedpayload.js";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2025-03-19T20:10:49.742Z"),
    modifiedAt: new Date("2025-01-25T11:14:50.376Z"),
    id: "<value>",
    amount: 74530,
    currency: "Lari",
    state: "initiated",
    type: "pay_upfront",
    issue: {
      id: "03003c0f-adac-444a-9982-386f86f145dc",
      platform: "github",
      number: 872564,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2024-06-24T20:09:15.812Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "a4147561-0e14-4ad5-8a70-60fc53655e6b",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "bleakly provided shrilly lest defensive sleepy circa",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "a7af1cd4-4768-437d-bea4-d632f183d3b2",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://infamous-vestment.name",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Crooks LLC",
          blog: "<value>",
          location: "<value>",
          email: "Damian.Ernser4@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2025-03-18T08:09:22.403Z"),
          modifiedAt: new Date("2024-11-11T20:49:52.958Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://silky-airbus.name",
          bio: "<value>",
          company: "Hessel and Sons",
          blog: "<value>",
          location: "<value>",
          email: "Demario_Boyer34@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 162421,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 15228,
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