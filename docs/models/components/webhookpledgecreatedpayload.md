# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeCreatedPayload = {
    data: {
        createdAt: new Date("2024-03-08T07:39:12.720Z"),
        modifiedAt: new Date("2022-04-20T07:22:31.472Z"),
        id: "<value>",
        amount: 584593,
        currency: "Sri Lanka Rupee",
        state: "charge_disputed",
        type: "pay_directly",
        issue: {
            id: "44e2f52d-82d3-4513-bb6f-48b656bcdb35",
            number: 973819,
            title: "<value>",
            state: "closed",
            issueCreatedAt: new Date("2022-06-27T22:39:48.120Z"),
            needsConfirmationSolved: false,
            funding: {},
            repository: {
                id: "e4b27537-a8cd-49e7-b19c-177d525f77b1",
                isPrivate: false,
                name: "MyOrg",
                description: "Business-focused directional structure",
                stars: 1337,
                license: "<value>",
                homepage: "<value>",
                profileSettings: {},
                organization: {
                    id: "eb52ff78-5fc3-4781-8d4c-98e0c2bb89eb",
                    name: "<value>",
                    avatarUrl: "<value>",
                    isPersonal: false,
                    bio: "<value>",
                    prettyName: "<value>",
                    company: "Hessel - Swift",
                    blog: "<value>",
                    location: "<value>",
                    email: "Robert41@yahoo.com",
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