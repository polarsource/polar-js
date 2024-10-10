# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2022-07-06T20:36:46.094Z"),
    modifiedAt: new Date("2022-12-20T03:37:12.994Z"),
    id: "<value>",
    amount: 44137,
    currency: "Won",
    state: "refunded",
    type: "pay_on_completion",
    issue: {
      id: "21cb4afd-4208-47cc-b1f4-590b3e363a63",
      number: 702945,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2022-11-10T09:14:40.659Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "d673d8a6-0400-4f17-9d63-6d0730c0682e",
        isPrivate: false,
        name: "MyOrg",
        description: "consequently improbable quarterly testify",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "cd64e544-e2d7-4494-9899-d9346ce0f729",
          name: "<value>",
          avatarUrl: "https://orderly-trench.info/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Osinski - Gleichner",
          blog: "<value>",
          location: "<value>",
          email: "Jasmin_Beatty14@hotmail.com",
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