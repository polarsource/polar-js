# UsersBenefitsListResponse

## Example Usage

```typescript
import { UsersBenefitsListResponse } from "@polar-sh/sdk/models/operations";

let value: UsersBenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-08-12T20:17:45.476Z"),
        modifiedAt: new Date("2024-04-17T01:09:14.302Z"),
        id: "<value>",
        description: "handle amongst unused woot midst",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        grants: [
          {
            createdAt: new Date("2023-12-17T19:16:01.516Z"),
            modifiedAt: new Date("2024-02-13T06:55:09.269Z"),
            id: "<value>",
            isGranted: false,
            isRevoked: false,
            subscriptionId: "<value>",
            orderId: "<value>",
            userId: "<value>",
            benefitId: "<value>",
          },
        ],
        organization: {
          createdAt: new Date("2022-02-15T20:14:14.351Z"),
          modifiedAt: new Date("2023-02-19T01:34:37.972Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://dearest-fedora.com/",
          bio: "<value>",
          company: "Larkin Inc",
          blog: "<value>",
          location: "<value>",
          email: "Benjamin68@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 839024,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 295418,
          profileSettings: {},
          featureSettings: {},
        },
        properties: {
          repositoryOwner: "polarsource",
          repositoryName: "private_repo",
        },
      },
    ],
    pagination: {
      totalCount: 133230,
      maxPage: 51227,
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [components.ListResourceUserBenefit](../../models/components/listresourceuserbenefit.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |