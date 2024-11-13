# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "c530ee15-21e0-4f1d-b955-c5a87e8db0c3",
        isPrivate: false,
        name: "MyOrg",
        description: "highly experience confiscate",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "42578de3-9175-457b-a1eb-2f8f38449ecb",
          name: "<value>",
          avatarUrl: "https://made-up-surface.org",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Russel - Anderson",
          blog: "<value>",
          location: "<value>",
          email: "Daphnee51@gmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2022-09-08T14:19:07.957Z"),
          modifiedAt: new Date("2024-01-13T03:31:14.357Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://adolescent-interchange.net",
          bio: "<value>",
          company: "Thompson - Leannon",
          blog: "<value>",
          location: "<value>",
          email: "Dana.McCullough-Breitenberg45@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 411615,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 489459,
          profileSettings: {},
          featureSettings: {},
        },
      },
    ],
    pagination: {
      totalCount: 243678,
      maxPage: 588639,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |