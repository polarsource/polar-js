# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2022-12-29T14:19:48.722Z"),
    modifiedAt: new Date("2024-06-23T12:45:36.188Z"),
    id: "<value>",
    amount: 243938,
    currency: "Guyana Dollar",
    state: "pending",
    type: "pay_directly",
    issue: {
      id: "0196a4ec-1cff-4b19-b4fb-9b75e506caf1",
      number: 368849,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2023-04-15T14:47:40.530Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "13b020d9-2cfe-4e09-8495-277f04dadac7",
        isPrivate: false,
        name: "MyOrg",
        description: "Sharable local attitude",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "cf541af2-710a-4d5e-813e-89020e2d5c54",
          name: "<value>",
          avatarUrl: "<value>",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Kozey - Schumm",
          blog: "<value>",
          location: "<value>",
          email: "Walton.Bailey68@yahoo.com",
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