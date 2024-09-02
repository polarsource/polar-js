# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeCreatedPayload = {
    data: {
        createdAt: new Date("2023-10-03T17:07:23.022Z"),
        modifiedAt: new Date("2023-06-06T05:53:45.930Z"),
        id: "<value>",
        amount: 756654,
        currency: "Tanzanian Shilling",
        state: "created",
        type: "pay_upfront",
        issue: {
            id: "e2f52d82-d351-43bb-af48-b656bcdb35ff",
            number: 162358,
            title: "<value>",
            state: "closed",
            issueCreatedAt: new Date("2022-11-15T18:16:45.053Z"),
            needsConfirmationSolved: false,
            funding: {},
            repository: {
                id: "b27537a8-cd9e-4731-9c17-7d525f77b114",
                isPrivate: false,
                name: "MyOrg",
                description: "Synergized transitional policy",
                stars: 1337,
                license: "<value>",
                homepage: "<value>",
                profileSettings: {},
                organization: {
                    id: "52ff785f-c378-414d-8c98-e0c2bb89eb75",
                    name: "<value>",
                    avatarUrl: "<value>",
                    isPersonal: false,
                    bio: "<value>",
                    prettyName: "<value>",
                    company: "Murphy, Skiles and Kerluke",
                    blog: "<value>",
                    location: "<value>",
                    email: "Harrison.Russel@gmail.com",
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
| `type`                                                                                                   | [components.WebhookPledgeCreatedPayloadType](../../models/components/webhookpledgecreatedpayloadtype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `data`                                                                                                   | [components.PledgeInput](../../models/components/pledgeinput.md)                                         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |