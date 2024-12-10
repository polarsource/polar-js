# UserOrder

## Example Usage

```typescript
import { UserOrder } from "@polar-sh/sdk/models/components";

let value: UserOrder = {
  createdAt: new Date("2023-09-03T17:54:18.563Z"),
  modifiedAt: new Date("2023-03-12T19:27:47.119Z"),
  id: "<value>",
  amount: 816556,
  taxAmount: 852023,
  currency: "Comoro Franc",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  product: {
    createdAt: new Date("2023-02-16T15:35:40.674Z"),
    modifiedAt: new Date("2022-02-25T05:51:19.973Z"),
    id: "<value>",
    name: "<value>",
    description:
      "unaccountably nudge in supposing pish readies serve what victorious",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-09-13T08:44:24.014Z"),
        modifiedAt: new Date("2024-07-03T14:03:37.246Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 399136,
        maximumAmount: 467338,
        presetAmount: 717148,
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-02-07T13:56:55.911Z"),
        modifiedAt: new Date("2022-08-15T00:40:45.069Z"),
        id: "<value>",
        type: "github_repository",
        description:
          "viability outside blissfully crocodile gladly oxidise hmph account spook",
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
        path: "/lost+found",
        mimeType: "<value>",
        size: 784288,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-08-09T03:53:46.602Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-05-06T06:53:25.696Z"),
        sizeReadable: "<value>",
        publicUrl: "https://rigid-knitting.net",
      },
    ],
    organization: {
      createdAt: new Date("2022-02-25T09:13:01.764Z"),
      modifiedAt: new Date("2022-11-12T22:34:54.900Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://bossy-crocodile.org/",
      bio: "<value>",
      company: "Lesch, Kuhic and Kohler",
      blog: "<value>",
      location: "<value>",
      email: "Triston.Botsford@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 247675,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 920225,
      profileSettings: {},
      featureSettings: {},
    },
  },
  productPrice: {
    createdAt: new Date("2023-06-15T08:24:38.960Z"),
    modifiedAt: new Date("2024-08-29T14:23:04.891Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
  },
  subscription: {
    createdAt: new Date("2024-11-01T22:12:29.478Z"),
    modifiedAt: new Date("2024-08-30T21:19:27.448Z"),
    id: "<value>",
    amount: 261361,
    currency: "New Taiwan Dollar",
    recurringInterval: "month",
    status: "incomplete",
    currentPeriodStart: new Date("2024-03-26T00:14:36.918Z"),
    currentPeriodEnd: new Date("2024-06-05T12:53:58.133Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-12-17T12:16:52.238Z"),
    endedAt: new Date("2023-06-12T03:06:20.381Z"),
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