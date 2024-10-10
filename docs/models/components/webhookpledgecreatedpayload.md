# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2022-12-16T22:37:33.668Z"),
    modifiedAt: new Date("2022-02-26T04:32:55.349Z"),
    id: "<value>",
    amount: 170716,
    currency: "Falkland Islands Pound",
    state: "created",
    type: "pay_directly",
    issue: {
      id: "83dc6da9-1616-4037-b921-d19c2abb0a24",
      number: 52231,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2023-08-28T03:29:22.689Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "0cd7ce9e-6ccb-4673-84a5-b95255a0da04",
        isPrivate: false,
        name: "MyOrg",
        description:
          "convection unbearably supposing bleakly plumber marten dishonor",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "4aaddc91-b4c5-429e-a244-c276c73173a3",
          name: "<value>",
          avatarUrl: "https://unruly-testimonial.net",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Beier - Rolfson",
          blog: "<value>",
          location: "<value>",
          email: "Blaze57@yahoo.com",
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