# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2022-11-05T07:00:15.686Z"),
    modifiedAt: new Date("2024-03-30T19:29:14.034Z"),
    id: "<value>",
    amount: 171764,
    currency: "Pa'anga",
    state: "charge_disputed",
    type: "pay_on_completion",
    issue: {
      id: "2d518022-75b1-444b-ae78-cdc413988160",
      number: 245870,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2023-08-07T08:14:46.348Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "02eed95f-e018-4b72-863c-86289ab06525",
        isPrivate: false,
        name: "MyOrg",
        description: "entomb psst jaggedly kissingly forenenst marathon",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "a60400f1-7d63-46d0-a730-c0682e629a60",
          name: "<value>",
          avatarUrl: "https://creative-slide.name/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Roob Inc",
          blog: "<value>",
          location: "<value>",
          email: "Gustave89@yahoo.com",
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