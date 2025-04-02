# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components/webhookpledgecreatedpayload.js";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2024-10-18T22:57:45.544Z"),
    modifiedAt: new Date("2024-11-26T19:52:32.797Z"),
    id: "<value>",
    amount: 926879,
    currency: "Lari",
    state: "charge_disputed",
    type: "pay_on_completion",
    issue: {
      id: "acbcacee-5f09-4738-b18d-25a565752317",
      platform: "github",
      number: 90551,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2024-04-05T13:33:00.045Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "d5b68cf2-820b-4f91-9056-0d7fe8a54281",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "whoa underneath lest hospitalization gadzooks",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "64296be4-a609-4507-91a8-8eeb94015398",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://shameful-poetry.name",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Keebler - Kutch",
          blog: "<value>",
          location: "<value>",
          email: "Abigail50@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        internalOrganization: {
          createdAt: new Date("2023-02-02T06:23:49.969Z"),
          modifiedAt: new Date("2023-01-16T01:27:31.910Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://near-advertisement.com",
          email: "Jabari_Crist32@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "tiktok",
              url: "https://cheerful-co-producer.com/",
            },
          ],
          detailsSubmittedAt: new Date("2025-04-14T16:09:06.266Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "King - Connelly",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 746936,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 487746,
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