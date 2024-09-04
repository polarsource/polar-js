# PledgeInput

## Example Usage

```typescript
import { PledgeInput } from "@polar-sh/sdk/models/components";

let value: PledgeInput = {
    createdAt: new Date("2024-04-25T06:18:52.474Z"),
    modifiedAt: new Date("2023-03-31T21:01:04.718Z"),
    id: "<value>",
    amount: 12171,
    currency: "Kwanza",
    state: "pending",
    type: "pay_upfront",
    issue: {
        id: "3d8bb311-80f7-439a-a9e0-57eb809e2810",
        number: 244376,
        title: "<value>",
        state: "open",
        issueCreatedAt: new Date("2022-05-17T05:17:42.222Z"),
        needsConfirmationSolved: false,
        funding: {},
        repository: {
            id: "f3981d4c-700b-4607-b3c9-3c73b9da3f2c",
            isPrivate: false,
            name: "MyOrg",
            description: "Upgradable static moratorium",
            stars: 1337,
            license: "<value>",
            homepage: "<value>",
            profileSettings: {},
            organization: {
                id: "7e23f225-7411-4faf-8b75-44e472e80285",
                name: "<value>",
                avatarUrl: "<value>",
                isPersonal: false,
                bio: "<value>",
                prettyName: "<value>",
                company: "Murazik - Hansen",
                blog: "<value>",
                location: "<value>",
                email: "Elisa43@hotmail.com",
                twitterUsername: "<value>",
                organizationId: "<value>",
            },
        },
        pledgeBadgeCurrentlyEmbedded: false,
    },
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                               | :heavy_check_mark:                                                                                                                                          | Creation timestamp of the object.                                                                                                                           |
| `modifiedAt`                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                               | :heavy_check_mark:                                                                                                                                          | Last modification timestamp of the object.                                                                                                                  |
| `id`                                                                                                                                                        | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | The ID of the object.                                                                                                                                       |
| `amount`                                                                                                                                                    | *number*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | Amount pledged towards the issue                                                                                                                            |
| `currency`                                                                                                                                                  | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `state`                                                                                                                                                     | [components.PledgeState](../../models/components/pledgestate.md)                                                                                            | :heavy_check_mark:                                                                                                                                          | Current state of the pledge                                                                                                                                 |
| `type`                                                                                                                                                      | [components.PledgeType](../../models/components/pledgetype.md)                                                                                              | :heavy_check_mark:                                                                                                                                          | Type of pledge                                                                                                                                              |
| `refundedAt`                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                               | :heavy_minus_sign:                                                                                                                                          | If and when the pledge was refunded to the pledger                                                                                                          |
| `scheduledPayoutAt`                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                               | :heavy_minus_sign:                                                                                                                                          | When the payout is scheduled to be made to the maintainers behind the issue. Disputes must be made before this date.                                        |
| `issue`                                                                                                                                                     | [components.IssueInput](../../models/components/issueinput.md)                                                                                              | :heavy_check_mark:                                                                                                                                          | The issue that the pledge was made towards                                                                                                                  |
| `pledger`                                                                                                                                                   | [components.Pledger](../../models/components/pledger.md)                                                                                                    | :heavy_minus_sign:                                                                                                                                          | The user or organization that made this pledge                                                                                                              |
| `hostedInvoiceUrl`                                                                                                                                          | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | URL of invoice for this pledge                                                                                                                              |
| `authedCanAdminSender`                                                                                                                                      | *boolean*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                          | If the currently authenticated subject can perform admin actions on behalf of the maker of the peldge                                                       |
| `authedCanAdminReceived`                                                                                                                                    | *boolean*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                          | If the currently authenticated subject can perform admin actions on behalf of the receiver of the peldge                                                    |
| `createdBy`                                                                                                                                                 | [components.Pledger](../../models/components/pledger.md)                                                                                                    | :heavy_minus_sign:                                                                                                                                          | For pledges made by an organization, or on behalf of an organization. This is the user that made the pledge. Only visible for members of said organization. |