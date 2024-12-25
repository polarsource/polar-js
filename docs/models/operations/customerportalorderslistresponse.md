# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-01-04T02:53:12.857Z"),
        modifiedAt: new Date("2023-10-07T04:57:17.194Z"),
        id: "<value>",
        amount: 142655,
        taxAmount: 123248,
        currency: "Swedish Krona",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2022-09-20T15:54:20.278Z"),
          modifiedAt: new Date("2024-02-21T05:29:23.423Z"),
          id: "<value>",
          name: "<value>",
          description: "alive although until",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2022-12-26T16:17:58.881Z"),
              modifiedAt: new Date("2024-11-06T05:51:47.281Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              minimumAmount: 97554,
              maximumAmount: 230217,
              presetAmount: 299227,
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2022-04-16T17:08:57.790Z"),
              modifiedAt: new Date("2022-06-19T12:29:53.961Z"),
              id: "<value>",
              type: "license_keys",
              description: "young that boo noted cheerfully bleach",
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
              path: "/usr/include",
              mimeType: "<value>",
              size: 259370,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-10-04T07:59:59.919Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-04-27T19:48:43.329Z"),
              sizeReadable: "<value>",
              publicUrl: "https://silent-alliance.net/",
            },
          ],
          organization: {
            createdAt: new Date("2024-04-01T02:04:31.818Z"),
            modifiedAt: new Date("2022-04-02T12:46:15.332Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://vague-information.name/",
            bio: "<value>",
            company: "Steuber, Brakus and Lemke",
            blog: "<value>",
            location: "<value>",
            email: "Matteo_Beahan@gmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 627145,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 389872,
            profileSettings: {},
            featureSettings: {},
          },
        },
        productPrice: {
          createdAt: new Date("2024-06-23T02:08:54.250Z"),
          modifiedAt: new Date("2024-10-15T23:00:41.227Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 741205,
          maximumAmount: 675078,
          presetAmount: 703873,
        },
        subscription: {
          createdAt: new Date("2022-05-22T16:27:14.359Z"),
          modifiedAt: new Date("2022-10-26T07:36:40.770Z"),
          id: "<value>",
          amount: 457456,
          currency: "Yen",
          recurringInterval: "month",
          status: "trialing",
          currentPeriodStart: new Date("2024-02-23T12:29:56.521Z"),
          currentPeriodEnd: new Date("2022-03-01T04:24:34.334Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2023-11-25T18:35:24.830Z"),
          endedAt: new Date("2023-02-05T15:08:59.609Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 935450,
      maxPage: 289798,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |