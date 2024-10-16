# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2024-02-18T20:22:17.576Z"),
    modifiedAt: new Date("2023-04-04T10:21:32.909Z"),
    id: "<value>",
    amount: 363121,
    currency: "Cuban Peso",
    state: "created",
    type: "pay_on_completion",
    issue: {
      id: "5042c722-d887-4b81-b14f-18e1390e1039",
      number: 479075,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2023-05-01T14:47:06.099Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "84bb8da7-d91c-4d0c-8fc6-b4a8a6267a4a",
        isPrivate: false,
        name: "MyOrg",
        description:
          "afterwards beside gah fatal waft supposing equally versus markup",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "8364acc6-3489-4cb2-9b1e-b1dab7969c3e",
          name: "<value>",
          avatarUrl: "https://prickly-lieu.biz/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Ratke Inc",
          blog: "<value>",
          location: "<value>",
          email: "Johnathon.Hane73@gmail.com",
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