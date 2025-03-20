# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components/webhookpledgecreatedpayload.js";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2023-06-12T03:14:08.757Z"),
    modifiedAt: new Date("2024-10-09T20:04:58.799Z"),
    id: "<value>",
    amount: 713741,
    currency: "Libyan Dinar",
    state: "initiated",
    type: "pay_on_completion",
    issue: {
      id: "65953b3c-f7c2-4cf8-b42e-5766ceaf39ab",
      platform: "github",
      number: 333150,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2023-05-25T08:22:59.213Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "4794e71d-f589-4c2d-ab09-079ae4d7acbc",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description:
          "once fathom collaborate hepatitis wide-eyed near nor coolly syringe",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "3e9184ba-16e6-4b1d-b8f8-cfb95066d3b0",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://insidious-doing.biz",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Jenkins LLC",
          blog: "<value>",
          location: "<value>",
          email: "Electa.Jones@hotmail.com",
          twitterUsername: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        internalOrganization: {
          createdAt: new Date("2023-01-16T01:02:59.626Z"),
          modifiedAt: new Date("2024-06-01T14:51:09.439Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://practical-lift.name/",
          email: "Shania.Mayert0@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "facebook",
              url: "https://oily-louse.info/",
            },
          ],
          detailsSubmittedAt: new Date("2025-05-27T09:31:23.519Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
          bio: "<value>",
          company: "Kuvalis, Baumbach and Keebler",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 499182,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 447848,
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