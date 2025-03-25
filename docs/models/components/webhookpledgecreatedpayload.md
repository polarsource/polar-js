# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components/webhookpledgecreatedpayload.js";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2025-03-20T09:23:48.962Z"),
    modifiedAt: new Date("2023-07-26T07:48:42.795Z"),
    id: "<value>",
    amount: 266643,
    currency: "Lek",
    state: "created",
    type: "pay_directly",
    issue: {
      id: "3f24d64b-0ed1-4cf7-99a4-a76eced09ba4",
      platform: "github",
      number: 39029,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2024-09-06T07:42:18.122Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "9377029f-a1d6-4193-b65a-6138c0919d37",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "lumbering and unethically farmer",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "ae0d968d-b87e-431a-9b94-49475833b63d",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://scaly-dwell.name/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Windler Group",
          blog: "<value>",
          location: "<value>",
          email: "Tony_Kirlin@gmail.com",
          twitterUsername: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        internalOrganization: {
          createdAt: new Date("2023-06-21T10:23:10.691Z"),
          modifiedAt: new Date("2024-07-26T03:57:25.482Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://pricey-guacamole.org/",
          email: "Caleb_Ratke@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "instagram",
              url: "https://our-fen.biz/",
            },
          ],
          detailsSubmittedAt: new Date("2025-03-17T13:08:49.732Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Wuckert, Kiehn and Schulist",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 168367,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 797304,
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
| `type`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    | pledge.created                                         |
| `data`                                                 | [components.Pledge](../../models/components/pledge.md) | :heavy_check_mark:                                     | N/A                                                    |                                                        |