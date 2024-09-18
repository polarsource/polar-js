# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2023-12-04T16:21:38.375Z"),
    modifiedAt: new Date("2023-04-29T17:54:19.305Z"),
    id: "<value>",
    amount: 716033,
    currency: "Fiji Dollar",
    state: "initiated",
    type: "pay_on_completion",
    issue: {
      id: "f05e3d48-fdaf-4313-a1f5-fd94259c0b36",
      number: 956124,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2022-12-29T03:54:31.480Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "ea944f3b-756c-411f-ac37-a5126243835b",
        isPrivate: false,
        name: "MyOrg",
        description: "Reactive real-time adapter",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "5a23a45c-efc5-4fde-90a0-ce2169e51001",
          name: "<value>",
          avatarUrl: "<value>",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Runolfsson - Kertzmann",
          blog: "<value>",
          location: "<value>",
          email: "Pink.Hettinger29@hotmail.com",
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