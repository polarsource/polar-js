# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2024-12-11T15:52:26.486Z"),
    modifiedAt: new Date("2025-03-17T00:12:28.102Z"),
    id: "<value>",
    amount: 737882,
    currency: "UAE Dirham",
    state: "initiated",
    type: "pay_on_completion",
    issue: {
      id: "066e9be7-04de-454e-95a4-18e93ac58a2f",
      platform: "github",
      number: 979665,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2024-06-14T05:10:45.704Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "20366ea6-f95b-47ee-9584-afd51f6457ff",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "knottily ugh per though scratchy",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "8a17d9f4-1a1c-448c-8c7f-744b6604dcb0",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://liquid-thorn.info/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Marquardt - Volkman",
          blog: "<value>",
          location: "<value>",
          email: "Rusty69@hotmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2024-02-12T04:50:27.888Z"),
          modifiedAt: new Date("2024-01-15T19:49:53.185Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://right-mentor.net",
          bio: "<value>",
          company: "Stoltenberg Group",
          blog: "<value>",
          location: "<value>",
          email: "Omari.Ortiz18@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 886994,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 460883,
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