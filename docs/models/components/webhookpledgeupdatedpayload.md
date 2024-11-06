# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2023-12-17T23:08:04.134Z"),
    modifiedAt: new Date("2024-07-07T00:56:00.393Z"),
    id: "<value>",
    amount: 527628,
    currency: "Rial Omani",
    state: "cancelled",
    type: "pay_directly",
    issue: {
      id: "1bf60b4e-2607-439b-8421-4d6345389cb3",
      number: 903880,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2022-01-09T03:41:50.109Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "07de3c6a-52b4-40f6-b1cd-4a1633f08a53",
        isPrivate: false,
        name: "MyOrg",
        description: "qualified cone emotional lest",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "9f98ee7a-a429-40dc-9bef-7afda7b00c2c",
          name: "<value>",
          avatarUrl: "https://best-knitting.biz",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Lindgren - Abshire",
          blog: "<value>",
          location: "<value>",
          email: "Ivy32@gmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2022-07-07T22:13:16.221Z"),
          modifiedAt: new Date("2023-11-16T12:57:07.514Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://big-secrecy.org/",
          bio: "<value>",
          company: "Metz and Sons",
          blog: "<value>",
          location: "<value>",
          email: "Joany_Fritsch@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 489133,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 491716,
          donationsEnabled: false,
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