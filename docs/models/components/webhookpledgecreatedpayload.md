# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2022-06-12T05:05:55.313Z"),
    modifiedAt: new Date("2022-04-04T21:52:52.496Z"),
    id: "<value>",
    amount: 809643,
    currency: "Uzbekistan Sum",
    state: "refunded",
    type: "pay_directly",
    issue: {
      id: "1329304a-95d4-4487-b728-46bec69b652b",
      number: 316584,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2023-10-31T19:02:39.431Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "c6b61874-e606-46dc-b3d3-510ae7dcafc4",
        isPrivate: false,
        name: "MyOrg",
        description:
          "reconstitute seemingly wherever cow slowly chip yum octave",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "326b9fa2-2139-4de6-a8c4-92727663243b",
          name: "<value>",
          avatarUrl: "https://brown-mentor.com",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Herman - Fisher",
          blog: "<value>",
          location: "<value>",
          email: "Tito_Runolfsson@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2023-10-22T15:32:06.862Z"),
          modifiedAt: new Date("2024-08-06T22:08:29.288Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://stale-pecan.biz/",
          bio: "<value>",
          company: "Ebert - Prohaska",
          blog: "<value>",
          location: "<value>",
          email: "Dorothy.Olson@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 542601,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 521914,
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