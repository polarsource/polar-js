# WebhookDonationCreatedPayload

Sent when a new donation is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookDonationCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookDonationCreatedPayload = {
  data: {
    createdAt: new Date("2023-06-25T23:24:26.030Z"),
    modifiedAt: new Date("2023-03-02T16:34:55.321Z"),
    id: "<value>",
    amount: 152283,
    currency: "Lithuanian Litas",
    message: "<value>",
    donor: {
      id: "<value>",
      publicName: "<value>",
      avatarUrl: "<value>",
    },
    email: "Myrtle_Wyman93@yahoo.com",
    issue: {
      id: "6949fb2b-b4ec-4ae6-83d5-db3adebd5dae",
      number: 673191,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2024-05-29T09:09:56.730Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "506a8aa9-4c02-4644-8f5e-9d9a4578adc1",
        isPrivate: false,
        name: "MyOrg",
        description: "Profit-focused responsive functionalities",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "00dec001-ac80-42e2-ac09-ff8f0f816ff3",
          name: "<value>",
          avatarUrl: "<value>",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Koch and Sons",
          blog: "<value>",
          location: "<value>",
          email: "Aurelio_Doyle3@hotmail.com",
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