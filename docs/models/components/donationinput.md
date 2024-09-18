# DonationInput

## Example Usage

```typescript
import { DonationInput } from "@polar-sh/sdk/models/components";

let value: DonationInput = {
  createdAt: new Date("2024-04-25T06:43:41.426Z"),
  modifiedAt: new Date("2022-04-25T18:58:43.179Z"),
  id: "<value>",
  amount: 278329,
  currency: "Brazilian Real",
  message: "<value>",
  donor: {
    id: "<value>",
    name: "<value>",
    avatarUrl: "<value>",
    isPersonal: false,
  },
  email: "Maybell.Abshire@yahoo.com",
  issue: {
    id: "0a668151-a472-4af9-a3c5-949f83f350cf",
    number: 555294,
    title: "<value>",
    state: "open",
    issueCreatedAt: new Date("2023-03-10T14:44:52.497Z"),
    needsConfirmationSolved: false,
    funding: {},
    repository: {
      id: "ffb901c6-ecbb-44e2-83cf-789ffafeda53",
      isPrivate: false,
      name: "MyOrg",
      description: "Team-oriented dynamic model",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "e6e0ac18-4c2b-49c2-87c8-8373a40e1942",
        name: "<value>",
        avatarUrl: "<value>",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Doyle, Connelly and Wehner",
        blog: "<value>",
        location: "<value>",
        email: "Gardner.Bechtelar@gmail.com",
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