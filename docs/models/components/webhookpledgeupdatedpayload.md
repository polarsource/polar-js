# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components/webhookpledgeupdatedpayload.js";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2024-09-11T09:38:08.141Z"),
    modifiedAt: new Date("2023-04-18T03:10:55.746Z"),
    id: "<value>",
    amount: 547077,
    currency: "Canadian Dollar",
    state: "initiated",
    type: "pay_upfront",
    issue: {
      id: "e94182c7-b6ba-48d9-994e-8682448b428d",
      platform: "github",
      number: 475773,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2025-06-05T11:34:22.007Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "12fa8cf3-c5bb-4f10-bb9b-c75c69e204c9",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description:
          "embalm furthermore optimistically unlike instead of fiercely",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "45c051f2-77c4-4b0e-9172-5a24ad9812f0",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://dull-in-joke.info",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Thiel - Walsh",
          blog: "<value>",
          location: "<value>",
          email: "Addison.Feeney@hotmail.com",
          twitterUsername: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        internalOrganization: {
          createdAt: new Date("2024-05-04T14:29:15.094Z"),
          modifiedAt: new Date("2023-08-01T03:30:37.198Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://evil-sauerkraut.com",
          email: "Rebekah.Oberbrunner43@gmail.com",
          website: "<value>",
          socials: [
            {
              platform: "github",
              url: "https://late-integer.name",
            },
          ],
          detailsSubmittedAt: new Date("2023-01-16T11:35:43.531Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
          bio: "<value>",
          company: "Johnson, Jerde and Kling",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 855102,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 610001,
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