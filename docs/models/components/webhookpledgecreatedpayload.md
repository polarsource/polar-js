# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2025-06-22T06:24:23.781Z"),
    modifiedAt: new Date("2024-12-30T17:23:17.649Z"),
    id: "<value>",
    amount: 614001,
    currency: "Pula",
    state: "pending",
    type: "pay_directly",
    issue: {
      id: "2034ca00-9a29-4356-81ff-74fdb76c8a9b",
      platform: "github",
      number: 377621,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2023-09-23T06:43:21.886Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "380f80a4-1d31-40ba-b03b-2937d4a715df",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "hungrily mothball yowza after",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "dac7e016-1193-4aed-a31f-f572b6c905cb",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://pessimistic-pants.name",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Rosenbaum Inc",
          blog: "<value>",
          location: "<value>",
          email: "Gretchen.Hand@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2023-04-13T08:22:31.096Z"),
          modifiedAt: new Date("2023-08-30T14:51:06.235Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://enchanted-foodstuffs.com/",
          bio: "<value>",
          company: "Heathcote, Cartwright and Medhurst",
          blog: "<value>",
          location: "<value>",
          email: "Anderson_Johnston64@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 793291,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 335688,
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