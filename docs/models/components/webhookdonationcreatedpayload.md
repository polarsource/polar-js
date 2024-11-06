# WebhookDonationCreatedPayload

Sent when a new donation is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookDonationCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookDonationCreatedPayload = {
  data: {
    createdAt: new Date("2024-06-01T03:35:11.920Z"),
    modifiedAt: new Date("2022-06-16T15:19:22.874Z"),
    id: "<value>",
    amount: 988523,
    currency: "Dalasi",
    message: "<value>",
    donor: {
      id: "<value>",
      publicName: "<value>",
      avatarUrl: "https://smoggy-place.net/",
    },
    email: "Marjory_Price46@hotmail.com",
    issue: {
      id: "30c5c2a0-90bc-4653-ad7c-9224d5eab407",
      number: 335230,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2023-12-02T02:54:47.752Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "fc82a267-7308-4718-b1fb-5d1ea1699baa",
        isPrivate: false,
        name: "MyOrg",
        description: "subtle zowie gallivant",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "12ac07c8-6215-4451-a38f-6648daffd0c9",
          name: "<value>",
          avatarUrl: "https://electric-fraudster.name",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Stracke LLC",
          blog: "<value>",
          location: "<value>",
          email: "Tamara61@gmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2023-04-30T05:00:39.346Z"),
          modifiedAt: new Date("2024-02-04T23:21:36.977Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://caring-mom.info",
          bio: "<value>",
          company: "Wehner, Dibbert and Boyle",
          blog: "<value>",
          location: "<value>",
          email: "Aileen96@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 913945,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 334873,
          donationsEnabled: false,
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

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [components.WebhookDonationCreatedPayloadType](../../models/components/webhookdonationcreatedpayloadtype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `data`                                                                                                       | [components.Donation](../../models/components/donation.md)                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |