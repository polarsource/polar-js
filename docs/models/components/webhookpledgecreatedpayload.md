# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components/webhookpledgecreatedpayload.js";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2025-04-11T01:09:42.166Z"),
    modifiedAt: new Date("2023-06-22T21:29:52.321Z"),
    id: "<value>",
    amount: 583240,
    currency: "Hryvnia",
    state: "created",
    type: "pay_upfront",
    issue: {
      id: "bc35a697-cdd9-4970-9417-d9a342d48215",
      platform: "github",
      number: 328853,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2023-12-13T07:48:18.232Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "c15a9174-a2a7-44b3-820d-781158b7d606",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "animated jump whoever among broadcast",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "fb812658-1080-4060-9633-6156de449250",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://noxious-pants.org/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Durgan - White",
          blog: "<value>",
          location: "<value>",
          email: "Lewis_Ebert86@hotmail.com",
          twitterUsername: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        internalOrganization: {
          createdAt: new Date("2024-07-11T04:15:05.970Z"),
          modifiedAt: new Date("2025-10-16T00:46:56.055Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://quiet-meadow.biz",
          bio: "<value>",
          company: "King, Hahn and Rempel",
          blog: "<value>",
          location: "<value>",
          email: "Eve.Emard@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 234848,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 55124,
          profileSettings: {},
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
        },
      },
      pledgeBadgeCurrentlyEmbedded: false,
    },
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `type`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    | pledge.created                                         |
| `data`                                                 | [components.Pledge](../../models/components/pledge.md) | :heavy_check_mark:                                     | N/A                                                    |                                                        |