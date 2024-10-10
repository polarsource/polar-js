# WebhookDonationCreatedPayload

Sent when a new donation is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookDonationCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookDonationCreatedPayload = {
  data: {
    createdAt: new Date("2024-08-01T23:51:21.213Z"),
    modifiedAt: new Date("2022-05-16T19:43:37.122Z"),
    id: "<value>",
    amount: 294711,
    currency: "Rupiah",
    message: "<value>",
    donor: {
      id: "<value>",
      publicName: "<value>",
      avatarUrl: "https://pointed-cow.biz/",
    },
    email: "Kassandra_Mertz40@yahoo.com",
    issue: {
      id: "51b05e38-2fd5-4c93-b23a-fce3e1f2555b",
      number: 570473,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2022-10-14T09:26:39.208Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "e96811e3-4878-4562-876f-29f1bd59153a",
        isPrivate: false,
        name: "MyOrg",
        description: "provided monstrous unnaturally when er fat",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "4ac0986c-5867-472c-8484-ddf5ed92bfd1",
          name: "<value>",
          avatarUrl: "https://unwilling-puppet.org/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Tillman and Sons",
          blog: "<value>",
          location: "<value>",
          email: "Athena.Schultz60@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
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