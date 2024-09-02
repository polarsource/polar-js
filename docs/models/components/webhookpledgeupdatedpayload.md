# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeUpdatedPayload = {
    data: {
        createdAt: new Date("2023-11-26T20:15:12.862Z"),
        modifiedAt: new Date("2022-03-08T03:03:39.281Z"),
        id: "<value>",
        amount: 751033,
        currency: "Bond Markets Units European Composite Unit (EURCO)",
        state: "created",
        type: "pay_upfront",
        issue: {
            id: "69e51001-9c6d-4c5e-b476-2799bfbbe694",
            number: 595198,
            title: "<value>",
            state: "closed",
            issueCreatedAt: new Date("2024-03-18T17:39:35.300Z"),
            needsConfirmationSolved: false,
            funding: {},
            repository: {
                id: "2bb4ecae-6c3d-45db-bade-bd5daea4c506",
                isPrivate: false,
                name: "MyOrg",
                description: "Profit-focused leading edge moratorium",
                stars: 1337,
                license: "<value>",
                homepage: "<value>",
                profileSettings: {},
                organization: {
                    id: "a94c0264-4cf5-4e9d-9a45-78adc1ac600d",
                    name: "<value>",
                    avatarUrl: "<value>",
                    isPersonal: false,
                    bio: "<value>",
                    prettyName: "<value>",
                    company: "Schoen, Altenwerth and Bechtelar",
                    blog: "<value>",
                    location: "<value>",
                    email: "Liza.Sawayn@gmail.com",
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

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [components.WebhookPledgeUpdatedPayloadType](../../models/components/webhookpledgeupdatedpayloadtype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `data`                                                                                                   | [components.PledgeInput](../../models/components/pledgeinput.md)                                         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |