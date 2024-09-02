# WebhookDonationCreatedPayload

Sent when a new donation is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookDonationCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookDonationCreatedPayload = {
    data: {
        createdAt: new Date("2022-07-06T02:55:55.600Z"),
        modifiedAt: new Date("2024-08-28T19:59:13.022Z"),
        id: "<value>",
        amount: 148379,
        currency: "Bond Markets Units European Composite Unit (EURCO)",
        message: "<value>",
        donor: {
            id: "<value>",
            publicName: "<value>",
            avatarUrl: "<value>",
        },
        email: "Kenyatta_Wiegand98@gmail.com",
        issue: {
            id: "0f816ff3-477c-413e-902c-14125b0960a6",
            number: 401688,
            title: "<value>",
            state: "closed",
            issueCreatedAt: new Date("2022-04-05T00:44:28.497Z"),
            needsConfirmationSolved: false,
            funding: {},
            repository: {
                id: "51a472af-923c-4594-9f83-f350cf876ffb",
                isPrivate: false,
                name: "MyOrg",
                description: "Persistent 4th generation attitude",
                stars: 1337,
                license: "<value>",
                homepage: "<value>",
                profileSettings: {},
                organization: {
                    id: "c6ecbb4e-243c-4f78-9ffa-feda53e5ae6e",
                    name: "<value>",
                    avatarUrl: "<value>",
                    isPersonal: false,
                    bio: "<value>",
                    prettyName: "<value>",
                    company: "Nienow Group",
                    blog: "<value>",
                    location: "<value>",
                    email: "Jimmie.Gibson74@gmail.com",
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