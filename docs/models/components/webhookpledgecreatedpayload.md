# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2022-03-15T19:09:10.567Z"),
    modifiedAt: new Date("2022-06-22T14:36:35.854Z"),
    id: "<value>",
    amount: 647125,
    currency: "Norwegian Krone",
    state: "created",
    type: "pay_upfront",
    issue: {
      id: "67ea5c79-a581-4dfe-80dd-2b0ccf6768dd",
      number: 668237,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2023-11-02T14:38:38.415Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "bb1bd053-0d8b-4312-ad49-57db5e5cc587",
        isPrivate: false,
        name: "MyOrg",
        description: "that voluntarily behind machine object mmm teeming geez",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "ae61466a-1122-4204-89f6-d3f005e90d26",
          name: "<value>",
          avatarUrl: "https://aching-swath.biz",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Ernser - Conroy",
          blog: "<value>",
          location: "<value>",
          email: "Savanah.Hettinger@gmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2023-01-14T09:00:24.393Z"),
          modifiedAt: new Date("2022-08-05T15:41:47.092Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://downright-baseboard.name",
          bio: "<value>",
          company: "Daugherty - Moen",
          blog: "<value>",
          location: "<value>",
          email: "Carlo_Orn@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 337514,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 926674,
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