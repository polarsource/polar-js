# WebhookDonationCreatedPayload

Sent when a new donation is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookDonationCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookDonationCreatedPayload = {
  data: {
    createdAt: new Date("2023-08-24T15:56:27.872Z"),
    modifiedAt: new Date("2023-12-19T00:35:32.011Z"),
    id: "<value>",
    amount: 222085,
    currency: "Dong",
    message: "<value>",
    donor: {
      id: "<value>",
      publicName: "<value>",
      avatarUrl: "https://all-corral.org",
    },
    email: "Roscoe_Gerhold37@hotmail.com",
    issue: {
      id: "4e2d7494-899d-4934-96ce-0f729709e73a",
      number: 915191,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2024-05-09T20:55:16.513Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "0b23d145-e293-4478-b299-6351b05e382f",
        isPrivate: false,
        name: "MyOrg",
        description: "whose consequently negative cannon helpful",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "6276f29f-1bd5-4915-b3a0-78ee0968a4ce",
          name: "<value>",
          avatarUrl: "https://monstrous-jet.net",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Anderson, Bashirian and Kreiger",
          blog: "<value>",
          location: "<value>",
          email: "Cristopher26@hotmail.com",
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