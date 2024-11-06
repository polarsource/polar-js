# UserSubscription

## Example Usage

```typescript
import { UserSubscription } from "@polar-sh/sdk/models/components";

let value: UserSubscription = {
  createdAt: new Date("2024-07-05T23:17:22.567Z"),
  modifiedAt: new Date("2022-02-15T19:47:09.789Z"),
  id: "<value>",
  amount: 606529,
  currency: "Qatari Rial",
  recurringInterval: "year",
  status: "incomplete_expired",
  currentPeriodStart: new Date("2023-04-12T11:46:50.754Z"),
  currentPeriodEnd: new Date("2022-02-12T18:37:20.813Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2022-04-14T03:03:06.965Z"),
  endedAt: new Date("2023-09-07T07:42:18.122Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  checkoutId: "<value>",
  product: {
    createdAt: new Date("2023-10-01T07:45:32.589Z"),
    modifiedAt: new Date("2022-08-09T13:08:06.938Z"),
    id: "<value>",
    name: "<value>",
    description: "case healthily yuck sternly lest volleyball",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-10-31T06:35:56.125Z"),
        modifiedAt: new Date("2022-05-22T16:02:35.270Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-09-17T17:07:40.230Z"),
        modifiedAt: new Date("2024-07-23T11:23:06.312Z"),
        id: "<value>",
        type: "license_keys",
        description: "which reproach past finer square",
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
        path: "/opt/lib",
        mimeType: "<value>",
        size: 115870,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-02-16T00:29:37.108Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-11-03T20:22:59.538Z"),
        sizeReadable: "<value>",
        publicUrl: "https://posh-vestment.biz",
      },
    ],
    organization: {
      createdAt: new Date("2022-11-08T10:51:42.460Z"),
      modifiedAt: new Date("2024-10-18T17:06:37.667Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://knotty-reboot.info",
      bio: "<value>",
      company: "Crist LLC",
      blog: "<value>",
      location: "<value>",
      email: "Lorena_Stehr@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 713741,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 514441,
      donationsEnabled: false,
      profileSettings: {},
      featureSettings: {},
    },
  },
  price: {
    createdAt: new Date("2023-04-20T10:58:30.086Z"),
    modifiedAt: new Date("2022-12-24T00:38:40.863Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    minimumAmount: 582536,
    maximumAmount: 324872,
    presetAmount: 235556,
    recurringInterval: "year",
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
| `checkoutId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `product`                                                                                            | [components.UserSubscriptionProduct](../../models/components/usersubscriptionproduct.md)             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `price`                                                                                              | *components.ProductPrice*                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |