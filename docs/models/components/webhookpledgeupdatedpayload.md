# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2024-01-27T14:58:29.591Z"),
    modifiedAt: new Date("2023-09-06T06:23:05.578Z"),
    id: "<value>",
    amount: 157171,
    currency: "Dong",
    state: "cancelled",
    type: "pay_directly",
    issue: {
      id: "115bd2a2-17da-4a64-8e68-11ceaec21f2a",
      number: 515548,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2024-02-27T17:27:19.483Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "df366038-e5bf-421f-904d-42cb18e63b3e",
        isPrivate: false,
        name: "MyOrg",
        description: "phew surprise whether swill futon eyeglasses",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "641f179b-4861-4160-b00c-ee0a41118422",
          name: "<value>",
          avatarUrl: "https://major-bell.com/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "DuBuque LLC",
          blog: "<value>",
          location: "<value>",
          email: "Ova44@yahoo.com",
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
| `data`                                                                                                   | [components.Pledge](../../models/components/pledge.md)                                                   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |