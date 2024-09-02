# PledgeInput

## Example Usage

```typescript
import { PledgeInput } from "@polar-sh/sdk/models/components";

let value: PledgeInput = {
    createdAt: new Date("2022-02-05T03:11:27.844Z"),
    modifiedAt: new Date("2022-12-20T19:42:29.339Z"),
    id: "<value>",
    amount: 60995,
    currency: "Kroon",
    state: "charge_disputed",
    type: "pay_on_completion",
    issue: {
        id: "bb31180f-739a-4e9e-857e-b809e2810331",
        number: 953676,
        title: "<value>",
        state: "open",
        issueCreatedAt: new Date("2023-10-01T05:20:17.768Z"),
        needsConfirmationSolved: false,
        funding: {},
        repository: {
            id: "81d4c700-b607-4f3c-93c7-3b9da3f2ceda",
            isPrivate: false,
            name: "MyOrg",
            description: "Networked system-worthy collaboration",
            stars: 1337,
            license: "<value>",
            homepage: "<value>",
            profileSettings: {},
            organization: {
                id: "3f225741-1faf-44b7-944e-472e802857a5",
                name: "<value>",
                avatarUrl: "<value>",
                isPersonal: false,
                bio: "<value>",
                prettyName: "<value>",
                company: "Gusikowski, Bailey and Gleichner",
                blog: "<value>",
                location: "<value>",
                email: "Coby_OHara@yahoo.com",
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