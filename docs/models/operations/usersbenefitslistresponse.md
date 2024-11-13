# UsersBenefitsListResponse

## Example Usage

```typescript
import { UsersBenefitsListResponse } from "@polar-sh/sdk/models/operations";

let value: UsersBenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-08-21T04:36:26.084Z"),
        modifiedAt: new Date("2023-04-10T07:48:57.030Z"),
        id: "<value>",
        description:
          "oddball pish amongst midst furlough continually fooey amid",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        grants: [
          {
            createdAt: new Date("2023-12-21T08:05:36.677Z"),
            modifiedAt: new Date("2022-06-01T10:45:51.668Z"),
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
          createdAt: new Date("2022-08-04T10:54:08.790Z"),
          modifiedAt: new Date("2023-02-09T02:56:48.801Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://busy-spirit.com",
          bio: "<value>",
          company: "Koss, Wolff and Moen",
          blog: "<value>",
          location: "<value>",
          email: "Alison.Carter11@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 414263,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 64147,
          profileSettings: {},
          featureSettings: {},
        },
        properties: {
          activeFiles: [
            "<value>",
          ],
        },
      },
    ],
    pagination: {
      totalCount: 692472,
      maxPage: 566602,
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [components.ListResourceUserBenefit](../../models/components/listresourceuserbenefit.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |