# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2024-10-27T17:26:52.816Z"),
    modifiedAt: new Date("2024-03-13T16:08:00.184Z"),
    id: "<value>",
    amount: 893446,
    currency: "Surinam Dollar",
    state: "initiated",
    type: "pay_upfront",
    issue: {
      id: "d0ba7949-b62f-4f10-b5f6-3f3a1a246c82",
      number: 637724,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2022-03-13T21:30:50.627Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "134aaddc-91b4-4c52-a9e2-44c276c73173",
        isPrivate: false,
        name: "MyOrg",
        description: "blindly mixture yieldingly phooey",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "53a2ef70-24ee-4f42-b856-705b7cafb82e",
          name: "<value>",
          avatarUrl: "https://bulky-cannon.info",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Shields, Davis and Muller",
          blog: "<value>",
          location: "<value>",
          email: "Berta_Stoltenberg@gmail.com",
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