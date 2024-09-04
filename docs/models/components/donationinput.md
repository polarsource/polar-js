# DonationInput

## Example Usage

```typescript
import { DonationInput } from "@polar-sh/sdk/models/components";

let value: DonationInput = {
    createdAt: new Date("2023-07-05T07:23:07.004Z"),
    modifiedAt: new Date("2022-10-13T23:00:15.092Z"),
    id: "<value>",
    amount: 786189,
    currency: "Costa Rican Colon",
    message: "<value>",
    donor: {
        id: "<value>",
        publicName: "<value>",
        avatarUrl: "<value>",
    },
    email: "Pedro44@yahoo.com",
    issue: {
        id: "c88373a4-0e19-442f-b2e5-5055756f5d56",
        number: 866459,
        title: "<value>",
        state: "open",
        issueCreatedAt: new Date("2024-02-01T10:07:41.097Z"),
        needsConfirmationSolved: false,
        funding: {},
        repository: {
            id: "d0af2dfe-13db-44f6-acba-3f8941aebc0b",
            isPrivate: false,
            name: "MyOrg",
            description: "Optimized 6th generation model",
            stars: 1337,
            license: "<value>",
            homepage: "<value>",
            profileSettings: {},
            organization: {
                id: "6924d3b2-ecfc-4c8f-8950-10f5dd3d6fa1",
                name: "<value>",
                avatarUrl: "<value>",
                isPersonal: false,
                bio: "<value>",
                prettyName: "<value>",
                company: "Bayer - Friesen",
                blog: "<value>",
                location: "<value>",
                email: "Enrico_Haag16@hotmail.com",
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