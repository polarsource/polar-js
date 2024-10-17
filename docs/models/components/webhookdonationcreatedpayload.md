# WebhookDonationCreatedPayload

Sent when a new donation is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookDonationCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookDonationCreatedPayload = {
  data: {
    createdAt: new Date("2023-04-08T14:26:13.023Z"),
    modifiedAt: new Date("2022-09-20T00:09:09.421Z"),
    id: "<value>",
    amount: 6677,
    currency: "Fiji Dollar",
    message: "<value>",
    donor: {
      id: "<value>",
      publicName: "<value>",
      avatarUrl: "https://accomplished-scorn.com",
    },
    email: "Jonathon_Torphy37@hotmail.com",
    issue: {
      id: "52d93d70-261a-4390-9251-f3eafee9f27c",
      number: 994423,
      title: "<value>",
      state: "closed",
      issueCreatedAt: new Date("2022-08-15T03:58:24.994Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "ce8f8c53-c345-4955-8770-57379dc4206d",
        isPrivate: false,
        name: "MyOrg",
        description: "atop obnoxiously deflate frantically seldom",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "161f3538-e7b5-441f-96d9-a757ce78bfad",
          name: "<value>",
          avatarUrl: "https://same-developmental.org/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Kreiger - Kertzmann",
          blog: "<value>",
          location: "<value>",
          email: "Vivienne_Becker-Zboncak@hotmail.com",
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