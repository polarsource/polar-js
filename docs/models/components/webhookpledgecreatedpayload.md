# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2022-08-13T10:34:08.199Z"),
    modifiedAt: new Date("2022-02-28T19:32:56.713Z"),
    id: "<value>",
    amount: 587489,
    currency: "Saint Helena Pound",
    state: "charge_disputed",
    type: "pay_upfront",
    issue: {
      id: "6033354f-5e2c-4070-8cf0-ec5e461a07ad",
      number: 754091,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2023-09-06T06:56:35.986Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "9196d596-e41b-4690-9fe9-06fa27f80941",
        isPrivate: false,
        name: "MyOrg",
        description: "Optional 24/7 knowledge user",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "8c68be69-b0c6-4a7b-8b3a-d3caf4244cba",
          name: "<value>",
          avatarUrl: "<value>",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Will, Lemke and O'Conner",
          blog: "<value>",
          location: "<value>",
          email: "Ebony90@yahoo.com",
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