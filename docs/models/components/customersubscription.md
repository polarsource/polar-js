# CustomerSubscription

## Example Usage

```typescript
import { CustomerSubscription } from "@polar-sh/sdk/models/components";

let value: CustomerSubscription = {
  createdAt: new Date("2023-08-22T13:51:49.769Z"),
  modifiedAt: new Date("2024-05-12T15:20:34.562Z"),
  id: "<value>",
  amount: 641904,
  currency: "Seychelles Rupee",
  recurringInterval: "month",
  status: "past_due",
  currentPeriodStart: new Date("2022-10-28T01:37:21.257Z"),
  currentPeriodEnd: new Date("2022-09-10T21:39:48.507Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2022-10-24T22:44:03.087Z"),
  endedAt: new Date("2023-02-06T17:05:13.398Z"),
  customerId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2023-06-01T03:37:00.180Z"),
    modifiedAt: new Date("2022-09-09T06:29:34.747Z"),
    id: "<value>",
    name: "<value>",
    description: "gah clone mythology gadzooks phew",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-11-06T00:23:38.763Z"),
        modifiedAt: new Date("2022-06-21T16:09:43.950Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 914823,
        maximumAmount: 58501,
        presetAmount: 919235,
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-09-14T08:29:02.551Z"),
        modifiedAt: new Date("2023-02-08T05:00:10.593Z"),
        id: "<value>",
        type: "downloadables",
        description: "advancement frizz brr finally radiant ack",
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
        size: 260492,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-08-01T16:49:07.186Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-09-12T19:42:53.732Z"),
        sizeReadable: "<value>",
        publicUrl: "https://unique-folklore.info/",
      },
    ],
    organization: {
      createdAt: new Date("2022-10-10T03:49:19.883Z"),
      modifiedAt: new Date("2022-05-26T10:44:18.933Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://utilized-pasta.name",
      bio: "<value>",
      company: "Prohaska, Hirthe and Schmitt",
      blog: "<value>",
      location: "<value>",
      email: "Saul_Lockman68@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 252906,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 710767,
      profileSettings: {},
      featureSettings: {},
    },
  },
  price: {
    createdAt: new Date("2022-10-17T00:01:30.572Z"),
    modifiedAt: new Date("2024-02-15T15:33:57.970Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 51623,
    recurringInterval: "month",
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Creation timestamp of the object.                                                                                       |
| `modifiedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Last modification timestamp of the object.                                                                              |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the object.                                                                                                   |
| `amount`                                                                                                                | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `currency`                                                                                                              | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `recurringInterval`                                                                                                     | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                    | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `status`                                                                                                                | [components.SubscriptionStatus](../../models/components/subscriptionstatus.md)                                          | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `currentPeriodStart`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `currentPeriodEnd`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `cancelAtPeriodEnd`                                                                                                     | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `startedAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `endedAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customerId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `priceId`                                                                                                               | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `discountId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `checkoutId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`userId`~~                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `product`                                                                                                               | [components.CustomerSubscriptionProduct](../../models/components/customersubscriptionproduct.md)                        | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `price`                                                                                                                 | *components.ProductPrice*                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |