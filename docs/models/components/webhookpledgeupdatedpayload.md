# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2023-10-28T18:18:02.027Z"),
    modifiedAt: new Date("2022-05-10T16:07:10.579Z"),
    id: "<value>",
    amount: 766311,
    currency: "Liberian Dollar",
    state: "disputed",
    type: "pay_upfront",
    issue: {
      id: "371b3504-d8b3-4393-a31c-1ed2f5e12704",
      number: 131629,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2023-03-16T16:48:42.473Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "1ac71936-3add-4c88-9308-b6a556d3f474",
        isPrivate: false,
        name: "MyOrg",
        description: "cripple parade whoa horde range hm",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "722e285f-1345-412d-972e-b4ebf19424ba",
          name: "<value>",
          avatarUrl: "https://cluttered-numeracy.info/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Boyer Inc",
          blog: "<value>",
          location: "<value>",
          email: "Scot55@gmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2023-10-13T08:07:34.700Z"),
          modifiedAt: new Date("2024-10-30T19:13:54.224Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://spanish-apparatus.com/",
          bio: "<value>",
          company: "Reinger, Mertz and Von",
          blog: "<value>",
          location: "<value>",
          email: "Abner.Reilly@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 232137,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 743469,
          profileSettings: {},
          featureSettings: {},
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