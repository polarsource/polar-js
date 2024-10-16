# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2024-03-06T08:55:14.766Z"),
    modifiedAt: new Date("2022-04-29T02:51:23.335Z"),
    id: "<value>",
    amount: 501792,
    currency: "US Dollar",
    state: "pending",
    type: "pay_upfront",
    issue: {
      id: "b3e67b5f-4f6c-4c9c-9992-e285428d75e2",
      number: 761411,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2024-10-13T20:20:07.426Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "1832d513-6a9e-4564-b1f1-79b486116000",
        isPrivate: false,
        name: "MyOrg",
        description:
          "basket given schedule geez yuck easily gah mythology tectonics delicious",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "7c7fb3ce-8f8c-453c-b345-95577057379d",
          name: "<value>",
          avatarUrl: "https://comfortable-suv.info/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Crooks, Grant and Littel",
          blog: "<value>",
          location: "<value>",
          email: "Kassandra_Russel25@yahoo.com",
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