# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2023-06-08T06:20:48.185Z"),
    modifiedAt: new Date("2023-03-14T14:18:20.001Z"),
    id: "<value>",
    amount: 374779,
    currency: "Cedi",
    state: "initiated",
    type: "pay_directly",
    issue: {
      id: "7432f944-fa2c-46a9-a21c-3b0f86c6a0e8",
      number: 941748,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2022-04-25T07:49:56.848Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "0795722e-285f-4134-8512-d72eb4ebf194",
        isPrivate: false,
        name: "MyOrg",
        description: "now except strictly down furthermore",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "b0ab14e7-9cd1-483b-9f0a-a6a6f7debab2",
          name: "<value>",
          avatarUrl: "https://insignificant-coil.biz/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Becker, Nader and Hickle",
          blog: "<value>",
          location: "<value>",
          email: "Edythe_Stehr-Ebert@hotmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2023-04-21T12:22:07.487Z"),
          modifiedAt: new Date("2022-06-28T21:12:27.512Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://aware-violin.info",
          bio: "<value>",
          company: "Hackett, Grant and Mitchell",
          blog: "<value>",
          location: "<value>",
          email: "Erling.Breitenberg8@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 521487,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 299887,
          profileSettings: {},
          featureSettings: {},
        },
      },
      pledgeBadgeCurrentlyEmbedded: false,
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [components.WebhookPledgeUpdatedPayloadType](../../models/components/webhookpledgeupdatedpayloadtype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `data`                                                                                                   | [components.Pledge](../../models/components/pledge.md)                                                   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |