# DonationInput

## Example Usage

```typescript
import { DonationInput } from "@polar-sh/sdk/models/components";

let value: DonationInput = {
  createdAt: new Date("2024-11-27T23:07:28.367Z"),
  modifiedAt: new Date("2022-06-27T06:26:25.381Z"),
  id: "<value>",
  amount: 272396,
  currency: "Serbian Dinar",
  message: "<value>",
  donor: {
    id: "<value>",
    name: "<value>",
    avatarUrl: "<value>",
    isPersonal: false,
  },
  email: "Fabian_Beahan82@hotmail.com",
  issue: {
    id: "ec099357-0226-4bd2-acae-f11c23ef5dd9",
    number: 575838,
    title: "<value>",
    state: "open",
    issueCreatedAt: new Date("2023-11-10T06:40:42.932Z"),
    needsConfirmationSolved: false,
    funding: {},
    repository: {
      id: "326b9fa2-2139-4de6-a8c4-92727663243b",
      isPrivate: false,
      name: "MyOrg",
      description: "Persevering asynchronous knowledge user",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "10539ebc-fa99-4d6c-ba40-3b946a266885",
        name: "<value>",
        avatarUrl: "<value>",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Barton - Johnston",
        blog: "<value>",
        location: "<value>",
        email: "Drew37@hotmail.com",
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