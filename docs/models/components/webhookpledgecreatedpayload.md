# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2024-05-30T10:39:49.151Z"),
    modifiedAt: new Date("2022-05-16T21:37:36.664Z"),
    id: "<value>",
    amount: 871469,
    currency: "Liberian Dollar",
    state: "refunded",
    type: "pay_directly",
    issue: {
      id: "a14b144b-0561-478f-8de4-2a39317a1864",
      number: 234326,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2022-02-04T22:19:13.160Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "28a634ab-fb63-48b1-b036-a08456761276",
        isPrivate: false,
        name: "MyOrg",
        description:
          "schlep atomize wilted for nucleotidase nor gullible cake aha",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "ca6060f6-9f92-4f32-b56f-8cc611fd5dee",
          name: "<value>",
          avatarUrl: "https://staid-awareness.net/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Rice LLC",
          blog: "<value>",
          location: "<value>",
          email: "Ali80@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2023-09-12T04:23:00.142Z"),
          modifiedAt: new Date("2022-04-26T00:53:32.713Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://ideal-translation.biz/",
          bio: "<value>",
          company: "Nitzsche Inc",
          blog: "<value>",
          location: "<value>",
          email: "Maureen83@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 186756,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 422299,
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
| `type`                                                                                                   | [components.WebhookPledgeCreatedPayloadType](../../models/components/webhookpledgecreatedpayloadtype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `data`                                                                                                   | [components.Pledge](../../models/components/pledge.md)                                                   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |