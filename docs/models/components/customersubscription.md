# CustomerSubscription

## Example Usage

```typescript
import { CustomerSubscription } from "@polar-sh/sdk/models/components";

let value: CustomerSubscription = {
  createdAt: new Date("2024-05-30T04:40:15.018Z"),
  modifiedAt: new Date("2023-08-18T07:42:11.698Z"),
  id: "<value>",
  amount: 738954,
  currency: "Afghani",
  recurringInterval: "month",
  status: "active",
  currentPeriodStart: new Date("2023-10-21T06:32:36.312Z"),
  currentPeriodEnd: new Date("2023-07-04T16:50:18.446Z"),
  cancelAtPeriodEnd: false,
  canceledAt: new Date("2024-01-17T08:46:21.478Z"),
  startedAt: new Date("2023-04-27T00:45:10.001Z"),
  endsAt: new Date("2025-03-01T09:59:49.344Z"),
  endedAt: new Date("2024-09-28T22:07:33.788Z"),
  customerId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  customerCancellationReason: "customer_service",
  customerCancellationComment: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2025-11-11T09:32:20.823Z"),
    modifiedAt: new Date("2025-04-25T20:25:55.548Z"),
    id: "<value>",
    name: "<value>",
    description:
      "psst whirlwind yet always political unlike um gastropod community seemingly",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-05-03T22:07:33.571Z"),
        modifiedAt: new Date("2024-10-02T00:29:09.828Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 441445,
        maximumAmount: 671066,
        presetAmount: 300422,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-03-17T03:37:28.338Z"),
        modifiedAt: new Date("2023-12-04T14:03:50.051Z"),
        id: "<value>",
        type: "ads",
        description: "beep woot outside behind eek besides descriptive",
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
        path: "/home/user",
        mimeType: "<value>",
        size: 818705,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-06-14T17:40:30.188Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-03-21T22:06:52.162Z"),
        sizeReadable: "<value>",
        publicUrl: "https://internal-igloo.biz/",
      },
    ],
    organization: {
      createdAt: new Date("2023-08-28T05:51:37.779Z"),
      modifiedAt: new Date("2025-07-01T17:25:22.386Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://witty-coast.org",
      bio: "<value>",
      company: "Legros, O'Hara and Smitham",
      blog: "<value>",
      location: "<value>",
      email: "Luz_Reichel-Block@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 43428,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 727326,
      profileSettings: {},
      featureSettings: {},
    },
  },
  price: {
    createdAt: new Date("2023-07-20T01:30:01.199Z"),
    modifiedAt: new Date("2024-02-17T19:53:32.318Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
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
| `canceledAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `startedAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `endsAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `endedAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customerId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `priceId`                                                                                                               | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `discountId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `checkoutId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customerCancellationReason`                                                                                            | [components.CustomerCancellationReason](../../models/components/customercancellationreason.md)                          | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customerCancellationComment`                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`userId`~~                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `product`                                                                                                               | [components.CustomerSubscriptionProduct](../../models/components/customersubscriptionproduct.md)                        | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `price`                                                                                                                 | *components.ProductPrice*                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |