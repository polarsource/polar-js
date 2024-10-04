# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2024-03-08T00:17:51.597Z"),
    modifiedAt: new Date("2023-05-14T18:08:52.522Z"),
    id: "<value>",
    amount: 492918,
    currency: "UAE Dirham",
    state: "initiated",
    type: "pay_directly",
    issue: {
      id: "0cba85fe-7230-4d57-b8c9-167bc090d353",
      number: 300684,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2023-11-03T19:31:40.966Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "d38d904a-9eec-425f-a75f-bb61f1a000f7",
        isPrivate: false,
        name: "MyOrg",
        description: "convection polite tennis furthermore",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "b172d9f2-db60-4b1c-8c3f-c9b71a6f12e7",
          name: "<value>",
          avatarUrl: "https://blushing-overcoat.org/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Nitzsche Inc",
          blog: "<value>",
          location: "<value>",
          email: "Taylor_Emmerich80@hotmail.com",
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
| `data`                                                                                                   | [components.Pledge](../../models/components/pledge.md)                                                   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |