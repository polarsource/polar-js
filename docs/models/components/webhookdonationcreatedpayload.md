# WebhookDonationCreatedPayload

Sent when a new donation is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookDonationCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookDonationCreatedPayload = {
  data: {
    createdAt: new Date("2024-04-22T05:43:29.394Z"),
    modifiedAt: new Date("2024-03-11T02:46:48.262Z"),
    id: "<value>",
    amount: 793049,
    currency: "Dong",
    message: "<value>",
    donor: {
      id: "<value>",
      name: "<value>",
      avatarUrl: "https://square-knight.name",
      isPersonal: false,
    },
    email: "Adell.Ebert@yahoo.com",
    issue: {
      id: "2f641822-b1b1-461f-9353-8e7b541f6d9a",
      number: 327245,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2024-04-19T22:51:54.283Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "e78bfad6-2b3e-4176-adff-0fa46ee12065",
        isPrivate: false,
        name: "MyOrg",
        description: "invite unhealthy athwart yowza",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "06c5dab8-92e6-47ae-9b77-40f14f9db021",
          name: "<value>",
          avatarUrl: "https://secret-crocodile.info",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Tremblay, Von and Labadie",
          blog: "<value>",
          location: "<value>",
          email: "Macie.Wiza@yahoo.com",
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