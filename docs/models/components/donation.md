# Donation

## Example Usage

```typescript
import { Donation } from "@polar-sh/sdk/models/components";

let value: Donation = {
  createdAt: new Date("2022-06-27T03:54:40.912Z"),
  modifiedAt: new Date("2024-05-23T11:42:22.121Z"),
  id: "<value>",
  amount: 580148,
  currency: "Brunei Dollar",
  message: "<value>",
  donor: {
    id: "<value>",
    publicName: "<value>",
    avatarUrl: "https://slimy-invite.name",
  },
  email: "Noel88@gmail.com",
  issue: {
    id: "6cf4c346-7b1d-4206-9c5d-ab892e67aeb7",
    number: 278355,
    title: "<value>",
    state: "open",
    issueCreatedAt: new Date("2024-10-26T21:27:50.253Z"),
    needsConfirmationSolved: false,
    funding: {},
    repository: {
      id: "14f9db02-17db-436b-aee8-6aaf787b5084",
      isPrivate: false,
      name: "MyOrg",
      description: "capitalise until meander offset",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "88160a3b-802e-4ed9-a5fe-018b7263c862",
        name: "<value>",
        avatarUrl: "https://quarrelsome-priesthood.com",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Hilpert Group",
        blog: "<value>",
        location: "<value>",
        email: "Alva.Larkin14@gmail.com",
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
| `issue`                                                                                       | [components.Issue](../../models/components/issue.md)                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |