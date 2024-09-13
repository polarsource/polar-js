# WebhookDonationCreatedPayload

Sent when a new donation is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookDonationCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookDonationCreatedPayload = {
  data: {
    createdAt: new Date("2022-04-23T05:15:54.733Z"),
    modifiedAt: new Date("2023-11-19T08:50:07.120Z"),
    id: "<value>",
    amount: 783274,
    currency: "Moroccan Dirham",
    message: "<value>",
    donor: {
      id: "<value>",
      name: "<value>",
      avatarUrl: "<value>",
      isPersonal: false,
    },
    email: "Sheila_Cormier5@gmail.com",
    issue: {
      id: "9ff8f0f8-16ff-4347-bc13-e902c14125b0",
      number: 624498,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2022-02-08T23:56:37.370Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "a668151a-472a-4f92-bc59-49f83f350cf8",
        isPrivate: false,
        name: "MyOrg",
        description: "Multi-layered fault-tolerant website",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "fb901c6e-cbb4-4e24-bcf7-89ffafeda53e",
          name: "<value>",
          avatarUrl: "<value>",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Nikolaus Group",
          blog: "<value>",
          location: "<value>",
          email: "Theodora_Barton@yahoo.com",
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
| `data`                                                                                                       | [components.DonationInput](../../models/components/donationinput.md)                                         | :heavy_check_mark:                                                                                           | N/A                                                                                                          |