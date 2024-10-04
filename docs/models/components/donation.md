# Donation

## Example Usage

```typescript
import { Donation } from "@polar-sh/sdk/models/components";

let value: Donation = {
  createdAt: new Date("2023-06-23T15:25:01.492Z"),
  modifiedAt: new Date("2022-05-25T09:23:40.743Z"),
  id: "<value>",
  amount: 565442,
  currency: "North Korean Won",
  message: "<value>",
  donor: {
    id: "<value>",
    name: "<value>",
    avatarUrl: "https://victorious-integer.biz",
    isPersonal: false,
  },
  email: "Dolores4@hotmail.com",
  issue: {
    id: "23d145e2-9347-4829-b963-51b05e382fd5",
    number: 567352,
    title: "<value>",
    state: "open",
    issueCreatedAt: new Date("2022-05-28T06:55:10.118Z"),
    needsConfirmationSolved: false,
    funding: {},
    repository: {
      id: "3afce3e1-f255-45bd-9984-e96811e34878",
      isPrivate: false,
      name: "MyOrg",
      description: "vibration incidentally up round sophisticated violently",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "e4dcf2e0-aae3-428f-94c5-4ac0986c5867",
        name: "<value>",
        avatarUrl: "https://stormy-elevator.name/",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Stokes - Sipes",
        blog: "<value>",
        location: "<value>",
        email: "Frankie14@hotmail.com",
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