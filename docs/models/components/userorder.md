# UserOrder

## Example Usage

```typescript
import { UserOrder } from "@polar-sh/sdk/models/components";

let value: UserOrder = {
  createdAt: new Date("2022-12-01T19:09:40.569Z"),
  modifiedAt: new Date("2024-08-14T08:55:15.893Z"),
  id: "<value>",
  amount: 226097,
  taxAmount: 562402,
  currency: "Zimbabwe Dollar",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  product: {
    createdAt: new Date("2024-03-09T09:33:22.960Z"),
    modifiedAt: new Date("2023-01-04T15:22:03.493Z"),
    id: "<value>",
    name: "<value>",
    description:
      "jaggedly like majestically because weatherize airbrush happily short-term galoshes",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-01-21T16:36:26.954Z"),
        modifiedAt: new Date("2023-09-13T08:41:21.960Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 723031,
        maximumAmount: 380315,
        presetAmount: 862198,
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-04-27T22:49:02.164Z"),
        modifiedAt: new Date("2023-01-03T21:31:22.687Z"),
        id: "<value>",
        type: "github_repository",
        description: "yuck accentuate er manage whenever",
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
        path: "/opt/sbin",
        mimeType: "<value>",
        size: 13781,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-12-05T09:44:03.533Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-05-26T06:05:41.394Z"),
        sizeReadable: "<value>",
        publicUrl: "https://specific-tune-up.net",
      },
    ],
    organization: {
      createdAt: new Date("2022-12-30T04:23:53.970Z"),
      modifiedAt: new Date("2022-09-12T04:16:01.192Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://doting-pulse.net/",
      bio: "<value>",
      company: "Dibbert Group",
      blog: "<value>",
      location: "<value>",
      email: "Jalen_Hills@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 971393,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 46226,
      profileSettings: {},
      featureSettings: {},
    },
  },
  productPrice: {
    createdAt: new Date("2022-09-17T06:35:06.033Z"),
    modifiedAt: new Date("2022-08-23T05:21:13.950Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
  },
  subscription: {
    createdAt: new Date("2024-04-15T09:46:18.365Z"),
    modifiedAt: new Date("2023-06-18T01:34:34.609Z"),
    id: "<value>",
    amount: 992178,
    currency: "Kwacha",
    recurringInterval: "year",
    status: "incomplete",
    currentPeriodStart: new Date("2022-06-19T09:00:36.637Z"),
    currentPeriodEnd: new Date("2024-01-21T02:57:30.792Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-04-02T10:43:53.018Z"),
    endedAt: new Date("2024-07-05T05:12:43.324Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPriceId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `product`                                                                                     | [components.UserOrderProduct](../../models/components/userorderproduct.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPrice`                                                                                | *components.ProductPrice*                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscription`                                                                                | [components.UserOrderSubscription](../../models/components/userordersubscription.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |