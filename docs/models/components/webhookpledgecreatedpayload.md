# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2023-02-20T15:25:02.227Z"),
    modifiedAt: new Date("2024-03-30T02:29:26.135Z"),
    id: "<value>",
    amount: 831304,
    currency: "Congolese Franc",
    state: "charge_disputed",
    type: "pay_directly",
    issue: {
      id: "ef11c23e-f5dd-4999-b493-26b9fa22139d",
      number: 400044,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2024-06-05T21:11:09.859Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "49272766-3243-4bb9-9191-0539ebcfa99d",
        isPrivate: false,
        name: "MyOrg",
        description: "ew lender ew geez oxidise row a mmm upsell",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "00ff277d-ac7a-4bb0-9150-66e9be704de5",
          name: "<value>",
          avatarUrl: "https://hairy-pecan.biz",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Kuvalis - Walker",
          blog: "<value>",
          location: "<value>",
          email: "Cordie55@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2022-06-25T17:55:44.890Z"),
          modifiedAt: new Date("2024-11-22T15:42:40.032Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://wordy-cop-out.info/",
          bio: "<value>",
          company: "Altenwerth - Ferry",
          blog: "<value>",
          location: "<value>",
          email: "Hobart.Nicolas@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 322663,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 691311,
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
| `type`                                                                                                   | [components.WebhookPledgeCreatedPayloadType](../../models/components/webhookpledgecreatedpayloadtype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `data`                                                                                                   | [components.Pledge](../../models/components/pledge.md)                                                   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |