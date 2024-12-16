# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2022-05-09T08:40:06.195Z"),
    modifiedAt: new Date("2023-11-20T15:27:37.231Z"),
    id: "<value>",
    amount: 414547,
    currency: "Pa'anga",
    state: "created",
    type: "pay_on_completion",
    issue: {
      id: "b85282f8-2b1c-4720-8f4f-881fb8126581",
      number: 511103,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2022-03-07T06:27:16.553Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "60633615-6de4-4492-b506-18af33fd9d3d",
        isPrivate: false,
        name: "MyOrg",
        description: "wasabi cutlet silently via",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "24d64b0e-d1cf-479a-84a7-6eced09ba460",
          name: "<value>",
          avatarUrl: "https://our-courtroom.info",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Anderson Group",
          blog: "<value>",
          location: "<value>",
          email: "Zack_Carter43@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2023-10-20T09:47:09.023Z"),
          modifiedAt: new Date("2022-09-07T22:31:28.438Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://glass-pantyhose.info/",
          bio: "<value>",
          company: "Emmerich - Kutch",
          blog: "<value>",
          location: "<value>",
          email: "Adelia_Buckridge83@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 495515,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 774053,
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