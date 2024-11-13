# UsersSubscriptionsListResponse

## Example Usage

```typescript
import { UsersSubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: UsersSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-05-01T07:46:13.385Z"),
        modifiedAt: new Date("2023-10-27T12:19:44.874Z"),
        id: "<value>",
        amount: 703218,
        currency: "Nepalese Rupee",
        recurringInterval: "year",
        status: "incomplete",
        currentPeriodStart: new Date("2024-08-08T09:57:53.832Z"),
        currentPeriodEnd: new Date("2022-02-01T23:49:11.774Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2023-08-10T06:27:10.627Z"),
        endedAt: new Date("2023-03-20T01:13:26.854Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        checkoutId: "<value>",
        product: {
          createdAt: new Date("2023-07-29T12:07:56.150Z"),
          modifiedAt: new Date("2023-02-05T03:35:13.798Z"),
          id: "<value>",
          name: "<value>",
          description: "against even noisily harangue",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-12-18T03:13:18.142Z"),
              modifiedAt: new Date("2024-04-12T04:09:56.196Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-07-04T03:57:56.514Z"),
              modifiedAt: new Date("2023-02-17T12:32:25.218Z"),
              id: "<value>",
              type: "ads",
              description: "absent mmm feline following willfully",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/usr/local/bin",
              mimeType: "<value>",
              size: 675689,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2022-09-26T09:34:22.320Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2022-08-26T05:41:30.450Z"),
              sizeReadable: "<value>",
              publicUrl: "https://utter-emergent.info/",
            },
          ],
          organization: {
            createdAt: new Date("2023-06-26T09:04:00.715Z"),
            modifiedAt: new Date("2024-05-02T21:01:32.328Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://cool-hoof.org",
            bio: "<value>",
            company: "Brakus, Crist and Gutmann",
            blog: "<value>",
            location: "<value>",
            email: "Hermann.Mante59@gmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 975884,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 932562,
            profileSettings: {},
            featureSettings: {},
          },
        },
        price: {
          createdAt: new Date("2022-10-02T10:28:28.527Z"),
          modifiedAt: new Date("2023-06-14T19:11:00.780Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 39992,
          recurringInterval: "year",
        },
      },
    ],
    pagination: {
      totalCount: 408303,
      maxPage: 377406,
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [components.ListResourceUserSubscription](../../models/components/listresourceusersubscription.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |