# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components/webhookpledgeupdatedpayload.js";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2023-03-04T16:08:09.798Z"),
    modifiedAt: new Date("2024-11-15T02:27:51.790Z"),
    id: "<value>",
    amount: 934760,
    currency: "Iranian Rial",
    state: "cancelled",
    type: "pay_on_completion",
    issue: {
      id: "38aaa333-b7ac-4976-982c-ecdd2fa6e9fc",
      platform: "github",
      number: 742562,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2023-12-10T00:54:33.907Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "e25a7af1-cd44-4768-837d-ea4d632f183d",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "idealistic maroon ameliorate lest save oh unearth where",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "ea3d6b7f-1233-432b-b333-6f54153c1244",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://ordinary-electronics.biz",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Ritchie Inc",
          blog: "<value>",
          location: "<value>",
          email: "Shyann.Leuschke17@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        internalOrganization: {
          createdAt: new Date("2024-11-13T23:17:33.665Z"),
          modifiedAt: new Date("2023-04-29T11:47:52.155Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://haunting-publicity.net/",
          email: "Maurine.Kuhic@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "x",
              url: "https://busy-manner.com",
            },
          ],
          detailsSubmittedAt: new Date("2023-05-11T10:31:56.444Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Metz, Friesen and Bernier",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 536181,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 144803,
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