# UserSubscription

## Example Usage

```typescript
import { UserSubscription } from "@polar-sh/sdk/models/components";

let value: UserSubscription = {
  createdAt: new Date("2022-08-31T20:30:44.252Z"),
  modifiedAt: new Date("2023-03-26T16:52:53.236Z"),
  id: "<value>",
  amount: 814227,
  currency: "South Sudanese pound",
  recurringInterval: "month",
  status: "trialing",
  currentPeriodStart: new Date("2022-06-21T07:39:39.908Z"),
  currentPeriodEnd: new Date("2022-04-09T17:59:24.322Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2023-08-31T09:29:51.256Z"),
  endedAt: new Date("2022-12-17T03:55:26.194Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  product: {
    createdAt: new Date("2023-07-18T00:04:52.145Z"),
    modifiedAt: new Date("2023-10-07T08:22:55.100Z"),
    id: "<value>",
    name: "<value>",
    description: "onto fortunately per cricket boo over whether",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-08-04T12:04:26.255Z"),
        modifiedAt: new Date("2024-07-31T23:34:05.499Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-11-11T23:08:52.002Z"),
        modifiedAt: new Date("2024-03-31T19:51:02.375Z"),
        id: "<value>",
        type: "discord",
        description:
          "jealously liberalize monthly large democratize wisely overwork outfit an rebuff",
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
        path: "/usr/X11R6",
        mimeType: "<value>",
        size: 1684,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-06-10T01:19:46.711Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-10-02T16:46:38.458Z"),
        sizeReadable: "<value>",
        publicUrl: "https://pastel-plain.biz/",
      },
    ],
    organization: {
      createdAt: new Date("2024-07-07T16:18:32.623Z"),
      modifiedAt: new Date("2023-11-17T21:52:10.277Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://wide-eyed-cutover.net/",
      bio: "<value>",
      company: "Reilly Group",
      blog: "<value>",
      location: "<value>",
      email: "Connor.Luettgen44@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 234884,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 773533,
      profileSettings: {},
      featureSettings: {},
    },
  },
  price: {
    createdAt: new Date("2024-04-27T14:10:19.519Z"),
    modifiedAt: new Date("2022-02-01T17:24:49.733Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 44724,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Creation timestamp of the object.                                                                    |
| `modifiedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Last modification timestamp of the object.                                                           |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the object.                                                                                |
| `amount`                                                                                             | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `currency`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `recurringInterval`                                                                                  | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | [components.SubscriptionStatus](../../models/components/subscriptionstatus.md)                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `currentPeriodStart`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `currentPeriodEnd`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `cancelAtPeriodEnd`                                                                                  | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `startedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `endedAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `userId`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `productId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `priceId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `discountId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `checkoutId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `product`                                                                                            | [components.UserSubscriptionProduct](../../models/components/usersubscriptionproduct.md)             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `price`                                                                                              | *components.ProductPrice*                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |