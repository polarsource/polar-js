# WebhookDonationCreatedPayload

Sent when a new donation is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookDonationCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookDonationCreatedPayload = {
  data: {
    createdAt: new Date("2024-02-05T16:45:44.018Z"),
    modifiedAt: new Date("2023-07-07T01:15:14.096Z"),
    id: "<value>",
    amount: 25737,
    currency: "Leone",
    message: "<value>",
    donor: {
      id: "<value>",
      publicName: "<value>",
      avatarUrl: "<value>",
    },
    email: "Jarret.Thompson@gmail.com",
    issue: {
      id: "5db6acdd-2d03-4919-8465-18f94f6bafe2",
      number: 809643,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2023-06-25T07:10:39.639Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "b1329304-a95d-4448-a772-846bec69b652",
        isPrivate: false,
        name: "MyOrg",
        description: "Streamlined dynamic productivity",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "9c6b6187-4e60-466d-9c3d-3510ae7dcafc",
          name: "<value>",
          avatarUrl: "<value>",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Pouros, Jacobi and Blick",
          blog: "<value>",
          location: "<value>",
          email: "Phoebe_Zieme@gmail.com",
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