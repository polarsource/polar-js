# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2022-06-11T17:35:21.996Z"),
    modifiedAt: new Date("2023-11-27T11:10:42.631Z"),
    id: "<value>",
    amount: 524410,
    currency: "Pound Sterling",
    state: "disputed",
    type: "pay_directly",
    issue: {
      id: "418457b0-71d4-4602-905c-9d2ab51b87d7",
      number: 748432,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2022-10-30T19:24:48.529Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "31cb6bf7-7843-4784-99cb-2a067cebce74",
        isPrivate: false,
        name: "MyOrg",
        description: "selfish whereas galoshes kinase considering although",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "c0cba85f-e723-40d5-878c-9167bc090d35",
          name: "<value>",
          avatarUrl: "https://frivolous-remark.name",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Donnelly, Larson and Skiles",
          blog: "<value>",
          location: "<value>",
          email: "Adolfo89@yahoo.com",
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
| `data`                                                                                                   | [components.PledgeInput](../../models/components/pledgeinput.md)                                         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |