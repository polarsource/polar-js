# WebhookDonationCreatedPayload

Sent when a new donation is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookDonationCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookDonationCreatedPayload = {
  data: {
    createdAt: new Date("2022-12-02T00:07:54.191Z"),
    modifiedAt: new Date("2022-11-24T08:56:53.231Z"),
    id: "<value>",
    amount: 747290,
    currency: "Hryvnia",
    message: "<value>",
    donor: {
      id: "<value>",
      name: "<value>",
      avatarUrl: "https://standard-sundae.net",
      isPersonal: false,
    },
    email: "Antwan_Mraz50@gmail.com",
    issue: {
      id: "60a3b802-eed9-45fe-a018-b7263c86289a",
      number: 41827,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2023-02-12T18:04:44.177Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "25078721-cb4a-4fd4-8208-7cc1f4590b3e",
        isPrivate: false,
        name: "MyOrg",
        description: "forenenst marathon um uh-huh kissingly that",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "60a32d87-c796-4e9e-bec8-a3edc03ecd64",
          name: "<value>",
          avatarUrl: "https://frightened-eternity.org/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Sipes - Kreiger",
          blog: "<value>",
          location: "<value>",
          email: "Krystina58@gmail.com",
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