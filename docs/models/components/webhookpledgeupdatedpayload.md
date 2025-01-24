# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components/webhookpledgeupdatedpayload.js";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2024-04-21T23:54:32.580Z"),
    modifiedAt: new Date("2025-04-18T17:21:11.819Z"),
    id: "<value>",
    amount: 935159,
    currency: "New Zealand Dollar",
    state: "cancelled",
    type: "pay_upfront",
    issue: {
      id: "9abc5e24-794e-471d-9f58-9c2db09079ae",
      platform: "github",
      number: 844566,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2024-12-31T23:11:09.840Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "cbcacee5-f097-4381-88d2-5a565752317d",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "sorrowful whale wherever even instead ew roger wash",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "b95066d3-b0ea-4642-a96b-e4a6095071a8",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://uncommon-pronoun.name",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Adams - Carter",
          blog: "<value>",
          location: "<value>",
          email: "Clifford80@gmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2025-01-23T22:04:15.259Z"),
          modifiedAt: new Date("2024-07-04T22:22:10.952Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://interesting-kit.info/",
          bio: "<value>",
          company: "O'Hara - Gerhold",
          blog: "<value>",
          location: "<value>",
          email: "Joana.Barrows@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 15706,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 103068,
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