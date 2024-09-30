# DonationInput

## Example Usage

```typescript
import { DonationInput } from "@polar-sh/sdk/models/components";

let value: DonationInput = {
  createdAt: new Date("2023-04-05T15:28:18.748Z"),
  modifiedAt: new Date("2023-05-26T01:47:44.345Z"),
  id: "<value>",
  amount: 191993,
  currency: "Manat",
  message: "<value>",
  donor: {
    id: "<value>",
    publicName: "<value>",
    avatarUrl: "https://infinite-aftermath.biz",
  },
  email: "Alex_Botsford-Klein42@gmail.com",
  issue: {
    id: "6d0730c0-682e-4629-ba60-a32d87c796e9",
    number: 898830,
    title: "<value>",
    state: "closed",
    issueCreatedAt: new Date("2023-08-24T15:56:27.872Z"),
    needsConfirmationSolved: false,
    funding: {},
    repository: {
      id: "a3edc03e-cd64-4e54-94e2-d7494899d934",
      isPrivate: false,
      name: "MyOrg",
      description: "nor how exactly gee eek finding yum whose consequently",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "555bd984-e968-411e-a348-7856276f29f1",
        name: "<value>",
        avatarUrl: "https://granular-metal.com",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Franey LLC",
        blog: "<value>",
        location: "<value>",
        email: "Jayne_Waters@gmail.com",
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