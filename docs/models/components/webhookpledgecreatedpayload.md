# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2024-05-29T00:31:19.231Z"),
    modifiedAt: new Date("2024-11-26T13:01:36.250Z"),
    id: "<value>",
    amount: 433947,
    currency: "Lebanese Pound",
    state: "refunded",
    type: "pay_on_completion",
    issue: {
      id: "dd0a99bb-1bd0-4530-9d8b-312d4957db5e",
      number: 750249,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2023-01-31T09:00:48.397Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "879be9ef-84ab-4a03-a33f-a320454b91a4",
        isPrivate: false,
        name: "MyOrg",
        description: "object mmm teeming geez homeschool absentmindedly",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "49f6d3f0-05e9-40d2-a61e-0e23322d653e",
          name: "<value>",
          avatarUrl: "https://discrete-thyme.biz/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Murray - Gottlieb",
          blog: "<value>",
          location: "<value>",
          email: "Leland66@gmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2022-10-04T08:23:30.297Z"),
          modifiedAt: new Date("2023-07-23T15:57:25.365Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://variable-issue.name/",
          bio: "<value>",
          company: "Zulauf and Sons",
          blog: "<value>",
          location: "<value>",
          email: "Dayana_Kling@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 526689,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 465652,
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