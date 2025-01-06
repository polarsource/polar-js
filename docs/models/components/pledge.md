# Pledge

## Example Usage

```typescript
import { Pledge } from "@polar-sh/sdk/models/components";

let value: Pledge = {
  createdAt: new Date("2025-01-14T23:14:29.526Z"),
  modifiedAt: new Date("2023-02-05T19:26:06.390Z"),
  id: "<value>",
  amount: 393788,
  currency: "Armenian Dram",
  state: "charge_disputed",
  type: "pay_upfront",
  issue: {
    id: "a42e9e4d-f6e5-45ff-83d5-fde9438ab286",
    platform: "github",
    number: 552962,
    title: "<value>",
    state: "open",
    issueCreatedAt: new Date("2024-08-09T10:04:30.253Z"),
    needsConfirmationSolved: false,
    funding: {},
    repository: {
      id: "3e591a4f-693d-4c3e-b0c7-d713f52c0140",
      platform: "github",
      isPrivate: false,
      name: "MyOrg",
      description: "incidentally duster monthly ick backbone or tankful sans",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "8c29e33b-c35a-4697-8cdd-9970417d9a34",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://flowery-meatloaf.com",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Heidenreich - Harris",
        blog: "<value>",
        location: "<value>",
        email: "Lazaro32@gmail.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
      internalOrganization: {
        createdAt: new Date("2024-10-22T19:31:34.443Z"),
        modifiedAt: new Date("2023-05-11T23:44:19.772Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://fuzzy-outrun.com/",
        bio: "<value>",
        company: "Kohler, Gorczany and Rogahn",
        blog: "<value>",
        location: "<value>",
        email: "Camylle.Stoltenberg51@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 107776,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 333783,
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