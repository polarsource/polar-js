# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2024-02-12T04:50:27.888Z"),
    modifiedAt: new Date("2024-01-15T19:49:53.185Z"),
    id: "<value>",
    amount: 515854,
    currency: "Zloty",
    state: "refunded",
    type: "pay_directly",
    issue: {
      id: "6d25c5a4-24e7-4350-bc39-0d204e4864ec",
      platform: "github",
      number: 526107,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2024-05-17T10:30:26.732Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "773e433d-c60f-42dc-afc5-363bda209735",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description:
          "eventually dearly closed woot lazily contrast however unto",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "918a5dc9-2be4-4fc4-8941-da926e2034ca",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://obvious-overcoat.com/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Fisher Inc",
          blog: "<value>",
          location: "<value>",
          email: "Bettye95@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2025-03-04T18:06:33.266Z"),
          modifiedAt: new Date("2024-05-21T03:29:50.109Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://sparkling-legging.name/",
          bio: "<value>",
          company: "Rath Group",
          blog: "<value>",
          location: "<value>",
          email: "Caterina1@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 518964,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 52571,
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