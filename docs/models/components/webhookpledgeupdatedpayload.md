# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2023-09-23T07:10:05.509Z"),
    modifiedAt: new Date("2025-11-11T12:54:59.231Z"),
    id: "<value>",
    amount: 164347,
    currency: "Nakfa",
    state: "cancelled",
    type: "pay_on_completion",
    issue: {
      id: "4b0ed1cf-79a4-4a76-9ece-d09ba4601893",
      platform: "github",
      number: 472077,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2023-06-06T04:52:00.062Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "9fa1d619-365a-4613-b8c0-919d37c22ebb",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "volleyball fast pish except entire queasily reasoning",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "63d61b49-9f34-4eb7-ab66-284a6dc29b81",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://golden-moment.biz/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Rippin - Effertz",
          blog: "<value>",
          location: "<value>",
          email: "Wilfredo79@hotmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2024-07-20T15:47:00.097Z"),
          modifiedAt: new Date("2023-10-08T06:27:13.427Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://upright-fen.info/",
          bio: "<value>",
          company: "Kerluke and Sons",
          blog: "<value>",
          location: "<value>",
          email: "Louisa71@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 333150,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 882195,
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

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `type`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `data`                                                 | [components.Pledge](../../models/components/pledge.md) | :heavy_check_mark:                                     | N/A                                                    |