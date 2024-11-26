# UserOrder

## Example Usage

```typescript
import { UserOrder } from "@polar-sh/sdk/models/components";

let value: UserOrder = {
  createdAt: new Date("2024-06-08T06:27:42.005Z"),
  modifiedAt: new Date("2024-05-13T16:28:56.418Z"),
  id: "<value>",
  amount: 495975,
  taxAmount: 975847,
  currency: "Lebanese Pound",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  product: {
    createdAt: new Date("2022-11-02T13:19:45.928Z"),
    modifiedAt: new Date("2022-11-28T11:09:05.244Z"),
    id: "<value>",
    name: "<value>",
    description: "reporter ah offensively obvious flash geez sniff lest",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-05-14T17:43:19.421Z"),
        modifiedAt: new Date("2024-04-15T01:22:04.252Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-05-18T10:30:26.732Z"),
        modifiedAt: new Date("2023-05-25T20:20:45.368Z"),
        id: "<value>",
        description: "whenever ick wherever hm thorn vague",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          paidArticles: false,
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/Applications",
        mimeType: "<value>",
        size: 154539,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-01-21T02:57:30.792Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-04-02T10:43:53.018Z"),
        sizeReadable: "<value>",
        publicUrl: "https://interesting-promise.name",
      },
    ],
    organization: {
      createdAt: new Date("2022-05-12T09:56:36.366Z"),
      modifiedAt: new Date("2024-02-26T20:59:18.749Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://clean-meander.info",
      bio: "<value>",
      company: "Jones Group",
      blog: "<value>",
      location: "<value>",
      email: "Asha43@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 100258,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 227713,
      profileSettings: {},
      featureSettings: {},
    },
  },
  productPrice: {
    createdAt: new Date("2023-09-10T01:46:44.404Z"),
    modifiedAt: new Date("2022-07-08T02:50:24.146Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    minimumAmount: 794531,
    maximumAmount: 141414,
    presetAmount: 134798,
  },
  subscription: {
    createdAt: new Date("2024-05-21T08:36:06.500Z"),
    modifiedAt: new Date("2023-02-09T16:03:01.500Z"),
    id: "<value>",
    amount: 312617,
    currency: "Fiji Dollar",
    recurringInterval: "month",
    status: "trialing",
    currentPeriodStart: new Date("2024-02-03T05:15:20.926Z"),
    currentPeriodEnd: new Date("2022-09-21T07:51:24.980Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-12-23T13:23:13.316Z"),
    endedAt: new Date("2024-04-30T17:28:03.068Z"),
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