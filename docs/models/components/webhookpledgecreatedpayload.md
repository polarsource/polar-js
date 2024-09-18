# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2024-08-07T01:49:46.654Z"),
    modifiedAt: new Date("2023-02-02T17:24:21.182Z"),
    id: "<value>",
    amount: 441321,
    currency: "Australian Dollar",
    state: "refunded",
    type: "pay_upfront",
    issue: {
      id: "77929177-deac-4646-acb5-73409e3eb1e5",
      number: 659268,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2024-03-05T14:14:40.746Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "12eb07f1-16db-4995-85fc-95fa88970e18",
        isPrivate: false,
        name: "MyOrg",
        description: "Polarised solution-oriented policy",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "b30fcb33-ea05-45b1-97cd-44e2f52d82d3",
          name: "<value>",
          avatarUrl: "<value>",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Bernhard - Flatley",
          blog: "<value>",
          location: "<value>",
          email: "Mortimer.Huels50@hotmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
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
| `data`                                                                                                   | [components.PledgeInput](../../models/components/pledgeinput.md)                                         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |