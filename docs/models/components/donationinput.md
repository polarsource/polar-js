# DonationInput

## Example Usage

```typescript
import { DonationInput } from "@polar-sh/sdk/models/components";

let value: DonationInput = {
    createdAt: new Date("2024-05-19T17:59:45.911Z"),
    modifiedAt: new Date("2022-06-19T05:03:50.784Z"),
    id: "<value>",
    amount: 300651,
    currency: "Won",
    message: "<value>",
    donor: {
        id: "<value>",
        publicName: "<value>",
        avatarUrl: "<value>",
    },
    email: "Katharina.Farrell@yahoo.com",
    issue: {
        id: "a40e1942-f32e-4550-9575-6f5d56d0bd0a",
        number: 958146,
        title: "<value>",
        state: "open",
        issueCreatedAt: new Date("2024-06-21T15:14:10.777Z"),
        needsConfirmationSolved: false,
        funding: {},
        repository: {
            id: "fe13db4f-62cb-4a3f-8941-aebc0b80a692",
            isPrivate: false,
            name: "MyOrg",
            description: "Extended solution-oriented conglomeration",
            stars: 1337,
            license: "<value>",
            homepage: "<value>",
            profileSettings: {},
            organization: {
                id: "b2ecfcc8-f895-4010-b5dd-3d6fa1804e54",
                name: "<value>",
                avatarUrl: "<value>",
                isPersonal: false,
                bio: "<value>",
                prettyName: "<value>",
                company: "Lynch, Crooks and Wunsch",
                blog: "<value>",
                location: "<value>",
                email: "Gregorio.Langworth@gmail.com",
                twitterUsername: "<value>",
                organizationId: "<value>",
            },
        },
        pledgeBadgeCurrentlyEmbedded: false,
    },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `donor`                                                                                       | *components.Donor*                                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `issue`                                                                                       | [components.IssueInput](../../models/components/issueinput.md)                                | :heavy_check_mark:                                                                            | N/A                                                                                           |