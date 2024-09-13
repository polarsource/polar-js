# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2024-06-25T04:17:08.854Z"),
    modifiedAt: new Date("2024-08-30T13:11:53.224Z"),
    id: "<value>",
    amount: 103990,
    currency: "UAE Dirham",
    state: "disputed",
    type: "pay_upfront",
    issue: {
      id: "ce2169e5-1001-49c6-9c5e-34762799bfbb",
      number: 932080,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2023-10-22T11:28:24.123Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "49fb2bb4-ecae-46c3-95db-3adebd5daea4",
        isPrivate: false,
        name: "MyOrg",
        description: "Self-enabling explicit ability",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "6a8aa94c-0264-44cf-9e9d-9a4578adc1ac",
          name: "<value>",
          avatarUrl: "<value>",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Bauch - Bartell",
          blog: "<value>",
          location: "<value>",
          email: "Stephanie5@hotmail.com",
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
| `type`                                                                                                   | [components.WebhookPledgeUpdatedPayloadType](../../models/components/webhookpledgeupdatedpayloadtype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `data`                                                                                                   | [components.PledgeInput](../../models/components/pledgeinput.md)                                         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |