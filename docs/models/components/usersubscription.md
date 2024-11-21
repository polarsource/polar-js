# UserSubscription

## Example Usage

```typescript
import { UserSubscription } from "@polar-sh/sdk/models/components";

let value: UserSubscription = {
  createdAt: new Date("2023-12-14T00:41:23.123Z"),
  modifiedAt: new Date("2023-06-05T10:54:53.002Z"),
  id: "<value>",
  amount: 405542,
  currency: "Uzbekistan Sum",
  recurringInterval: "year",
  status: "unpaid",
  currentPeriodStart: new Date("2024-07-05T23:17:22.567Z"),
  currentPeriodEnd: new Date("2022-02-15T19:47:09.789Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2023-10-27T18:08:56.770Z"),
  endedAt: new Date("2024-02-04T14:38:25.913Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  product: {
    createdAt: new Date("2023-12-30T16:24:39.749Z"),
    modifiedAt: new Date("2022-10-26T01:32:31.415Z"),
    id: "<value>",
    name: "<value>",
    description: "majestically whereas pantyhose nun apropos lumbering",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-03-05T11:12:53.549Z"),
        modifiedAt: new Date("2022-04-15T07:18:20.022Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-12-03T09:32:36.271Z"),
        modifiedAt: new Date("2022-02-26T16:22:53.004Z"),
        id: "<value>",
        type: "github_repository",
        description:
          "brr which reproach past finer square vice indolent stir-fry psst",
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
        size: 325754,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-10-01T11:00:56.426Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-12-23T01:26:30.649Z"),
        sizeReadable: "<value>",
        publicUrl: "https://shocked-custom.net/",
      },
    ],
    organization: {
      createdAt: new Date("2024-12-09T03:51:03.988Z"),
      modifiedAt: new Date("2023-04-29T14:20:35.511Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://deadly-secret.org",
      bio: "<value>",
      company: "Funk Group",
      blog: "<value>",
      location: "<value>",
      email: "Ephraim76@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 636775,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 957139,
      profileSettings: {},
      featureSettings: {},
    },
  },
  price: {
    createdAt: new Date("2024-01-22T07:34:32.676Z"),
    modifiedAt: new Date("2024-02-23T14:44:14.548Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    minimumAmount: 755848,
    maximumAmount: 333150,
    presetAmount: 882195,
    recurringInterval: "month",
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