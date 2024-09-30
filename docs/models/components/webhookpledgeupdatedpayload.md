# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2024-06-17T16:49:17.447Z"),
    modifiedAt: new Date("2023-05-21T03:07:59.370Z"),
    id: "<value>",
    amount: 10879,
    currency: "Belize Dollar",
    state: "pending",
    type: "pay_upfront",
    issue: {
      id: "a390251f-3eaf-4ee9-8f27-c7fb3ce8f8c5",
      number: 783761,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2022-11-08T04:29:28.682Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "59557705-7379-4dc4-a206-d248980ce42c",
        isPrivate: false,
        name: "MyOrg",
        description:
          "midst whoa amongst yet remark offset major doubtfully whether",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "ff0fa46e-e120-465a-b2c9-1edc793cbcfe",
          name: "<value>",
          avatarUrl: "https://spotless-violin.biz/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Flatley, Graham and Keebler",
          blog: "<value>",
          location: "<value>",
          email: "May.Spinka@yahoo.com",
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