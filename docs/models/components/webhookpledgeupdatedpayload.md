# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components/webhookpledgeupdatedpayload.js";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2025-12-27T09:51:28.931Z"),
    modifiedAt: new Date("2024-12-21T06:36:54.117Z"),
    id: "<value>",
    amount: 420927,
    currency: "Uganda Shilling",
    state: "disputed",
    type: "pay_directly",
    issue: {
      id: "c5bb5e25-a7af-41cd-b447-6837dea4d632",
      platform: "github",
      number: 87979,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2023-08-10T14:04:15.423Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "d3b2fa6f-862b-4933-a370-4b9db0975fa4",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "respray cutover thread",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "46e95cea-3d6b-47f1-8233-32b3336f5415",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://chilly-charm.biz",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Stamm - Schiller",
          blog: "<value>",
          location: "<value>",
          email: "Edwin_Medhurst@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        internalOrganization: {
          createdAt: new Date("2025-08-31T06:49:25.044Z"),
          modifiedAt: new Date("2024-12-13T04:05:55.302Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://blaring-compromise.biz",
          email: "Bernadette69@yahoo.com",
          website: "<value>",
          socials: [
            {
              platform: "tiktok",
              url: "https://low-cross-contamination.name",
            },
          ],
          detailsSubmittedAt: new Date("2024-11-28T17:46:38.557Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Boyle LLC",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 158919,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 119013,
          profileSettings: {},
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
| `type`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    | pledge.updated                                         |
| `data`                                                 | [components.Pledge](../../models/components/pledge.md) | :heavy_check_mark:                                     | N/A                                                    |                                                        |