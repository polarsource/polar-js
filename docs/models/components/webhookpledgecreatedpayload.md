# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2022-03-03T22:35:13.208Z"),
    modifiedAt: new Date("2024-03-25T14:19:00.405Z"),
    id: "<value>",
    amount: 556766,
    currency: "Won",
    state: "pending",
    type: "pay_on_completion",
    issue: {
      id: "e6653d38-c086-41d6-a5a7-585cccc8d4e6",
      number: 166245,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2022-04-11T13:31:09.956Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "0cc692d9-5db6-4532-8750-42c722d887b8",
        isPrivate: false,
        name: "MyOrg",
        description: "cross quaintly populist",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "b8da7d91-cd0c-4fc6-8b4a-8a6267a4a3cb",
          name: "<value>",
          avatarUrl: "https://brilliant-violin.info",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Labadie - Cartwright",
          blog: "<value>",
          location: "<value>",
          email: "Mortimer35@yahoo.com",
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