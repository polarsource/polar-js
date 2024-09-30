# WebhookDonationCreatedPayload

Sent when a new donation is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookDonationCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookDonationCreatedPayload = {
  data: {
    createdAt: new Date("2024-04-29T11:11:06.519Z"),
    modifiedAt: new Date("2023-01-17T20:56:10.200Z"),
    id: "<value>",
    amount: 850288,
    currency: "Kina",
    message: "<value>",
    donor: {
      id: "<value>",
      publicName: "<value>",
      avatarUrl: "https://overcooked-coin.org",
    },
    email: "Icie_Towne@yahoo.com",
    issue: {
      id: "40f14f9d-b021-47db-836b-ee86aaf787b5",
      number: 556156,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2024-03-30T19:29:14.034Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "2dc62d51-8022-475b-a144-be78cdc41398",
        isPrivate: false,
        name: "MyOrg",
        description: "avalanche whose dreamily",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "63c86289-ab06-4525-a078-721cb4afd420",
          name: "<value>",
          avatarUrl: "https://skeletal-rule.com/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Gerhold, Hintz and Mayer",
          blog: "<value>",
          location: "<value>",
          email: "Meta.Von41@gmail.com",
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