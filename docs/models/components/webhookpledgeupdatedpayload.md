# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2024-03-11T08:25:08.866Z"),
    modifiedAt: new Date("2024-11-03T08:37:14.052Z"),
    id: "<value>",
    amount: 296853,
    currency: "Iranian Rial",
    state: "created",
    type: "pay_directly",
    issue: {
      id: "dc0831c3-8837-400e-86e7-64149c8c29e3",
      number: 748433,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2022-09-29T20:36:38.362Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "5a697cdd-9970-4417-9d9a-342d48215559",
        isPrivate: false,
        name: "MyOrg",
        description:
          "beside finally before alert ghost likewise huzzah cap well",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "881fb812-6581-4080-8060-6336156de449",
          name: "<value>",
          avatarUrl: "https://awesome-glider.com/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Nitzsche and Sons",
          blog: "<value>",
          location: "<value>",
          email: "Coralie_Stracke84@gmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2024-08-15T22:27:14.964Z"),
          modifiedAt: new Date("2024-08-08T13:39:24.245Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://medium-travel.net/",
          bio: "<value>",
          company: "Macejkovic Inc",
          blog: "<value>",
          location: "<value>",
          email: "Isai_Rempel34@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 214506,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 78486,
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