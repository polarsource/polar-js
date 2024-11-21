# Pledge

## Example Usage

```typescript
import { Pledge } from "@polar-sh/sdk/models/components";

let value: Pledge = {
  createdAt: new Date("2024-04-19T02:14:13.396Z"),
  modifiedAt: new Date("2023-06-26T20:58:19.998Z"),
  id: "<value>",
  amount: 678035,
  currency: "Baht",
  state: "disputed",
  type: "pay_on_completion",
  issue: {
    id: "77f6eeb3-6a42-479a-9945-633721806bf7",
    number: 627954,
    title: "<value>",
    state: "open",
    issueCreatedAt: new Date("2024-10-16T19:49:07.268Z"),
    needsConfirmationSolved: false,
    funding: {},
    repository: {
      id: "c21ef42b-f455-4748-bd64-e835810bb7d9",
      isPrivate: false,
      name: "MyOrg",
      description:
        "what part ultimately scrape cavernous amid godfather shovel westernize shiny",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "5f068836-bcb0-4a3a-8693-ae51f8dfd8f7",
        name: "<value>",
        avatarUrl: "https://understated-bakeware.net",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Stokes Group",
        blog: "<value>",
        location: "<value>",
        email: "Breanna22@yahoo.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
      internalOrganization: {
        createdAt: new Date("2022-07-21T21:02:29.433Z"),
        modifiedAt: new Date("2024-04-11T01:55:46.051Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://scaly-legislature.name",
        bio: "<value>",
        company: "Fay LLC",
        blog: "<value>",
        location: "<value>",
        email: "Elijah_Farrell29@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 898720,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 435822,
        profileSettings: {},
        featureSettings: {},
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
| `state`                                                                                                                                                     | [components.PledgeState](../../models/components/pledgestate.md)                                                                                            | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `type`                                                                                                                                                      | [components.PledgeType](../../models/components/pledgetype.md)                                                                                              | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `refundedAt`                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                               | :heavy_minus_sign:                                                                                                                                          | If and when the pledge was refunded to the pledger                                                                                                          |
| `scheduledPayoutAt`                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                               | :heavy_minus_sign:                                                                                                                                          | When the payout is scheduled to be made to the maintainers behind the issue. Disputes must be made before this date.                                        |
| `issue`                                                                                                                                                     | [components.Issue](../../models/components/issue.md)                                                                                                        | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `pledger`                                                                                                                                                   | [components.Pledger](../../models/components/pledger.md)                                                                                                    | :heavy_minus_sign:                                                                                                                                          | The user or organization that made this pledge                                                                                                              |
| `hostedInvoiceUrl`                                                                                                                                          | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | URL of invoice for this pledge                                                                                                                              |
| `authedCanAdminSender`                                                                                                                                      | *boolean*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                          | If the currently authenticated subject can perform admin actions on behalf of the maker of the peldge                                                       |
| `authedCanAdminReceived`                                                                                                                                    | *boolean*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                          | If the currently authenticated subject can perform admin actions on behalf of the receiver of the peldge                                                    |
| `createdBy`                                                                                                                                                 | [components.Pledger](../../models/components/pledger.md)                                                                                                    | :heavy_minus_sign:                                                                                                                                          | For pledges made by an organization, or on behalf of an organization. This is the user that made the pledge. Only visible for members of said organization. |