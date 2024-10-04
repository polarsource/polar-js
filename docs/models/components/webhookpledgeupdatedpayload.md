# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2022-06-26T21:16:43.440Z"),
    modifiedAt: new Date("2022-11-11T05:52:22.936Z"),
    id: "<value>",
    amount: 543203,
    currency: "Mexican Peso",
    state: "refunded",
    type: "pay_upfront",
    issue: {
      id: "ce42cbce-08c8-4890-ae30-a82f641822b1",
      number: 69645,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2022-05-17T22:22:57.707Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "f3538e7b-541f-46d9-8a75-7ce78bfad62b",
        isPrivate: false,
        name: "MyOrg",
        description:
          "baptise clueless ack quaintly unlined encode always mindless underneath bran",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "4f9db021-7db3-46be-8e86-aaf787b5084b",
          name: "<value>",
          avatarUrl: "https://smooth-giant.biz",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Heaney, Braun and Lang",
          blog: "<value>",
          location: "<value>",
          email: "Carolina.Kutch72@gmail.com",
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