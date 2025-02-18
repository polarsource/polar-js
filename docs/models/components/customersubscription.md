# CustomerSubscription

## Example Usage

```typescript
import { CustomerSubscription } from "@polar-sh/sdk/models/components/customersubscription.js";

let value: CustomerSubscription = {
  createdAt: new Date("2024-04-02T12:09:25.430Z"),
  modifiedAt: new Date("2025-10-04T18:53:15.917Z"),
  id: "<value>",
  amount: 559050,
  currency: "Somoni",
  recurringInterval: "year",
  status: "unpaid",
  currentPeriodStart: new Date("2023-04-08T08:29:01.724Z"),
  currentPeriodEnd: new Date("2025-05-02T16:32:25.486Z"),
  cancelAtPeriodEnd: false,
  canceledAt: new Date("2023-02-15T10:18:46.962Z"),
  startedAt: new Date("2023-04-28T14:02:03.362Z"),
  endsAt: new Date("2025-06-04T17:00:12.684Z"),
  endedAt: new Date("2025-03-06T20:44:33.604Z"),
  customerId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  customerCancellationReason: "too_complex",
  customerCancellationComment: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2025-10-01T09:57:00.337Z"),
    modifiedAt: new Date("2024-03-09T08:42:18.565Z"),
    id: "<value>",
    name: "<value>",
    description: "ouch nor unless",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-12-04T07:36:09.332Z"),
        modifiedAt: new Date("2024-03-30T12:30:12.307Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        priceAmount: 389872,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2025-12-17T17:59:43.205Z"),
        modifiedAt: new Date("2024-06-09T22:32:28.707Z"),
        id: "<value>",
        type: "downloadables",
        description:
          "knowingly whoever likely triumphantly capitalize knitting famously plus overdue almighty",
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
        path: "/usr/share",
        mimeType: "<value>",
        size: 672564,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-09-17T21:55:45.449Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-04-23T06:54:28.604Z"),
        sizeReadable: "<value>",
        publicUrl: "https://blank-march.biz/",
      },
    ],
    organization: {
      createdAt: new Date("2023-07-16T03:20:51.058Z"),
      modifiedAt: new Date("2025-11-03T06:22:57.576Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://ashamed-entry.biz",
      bio: "<value>",
      company: "Haag, Mohr and Leannon",
      blog: "<value>",
      location: "<value>",
      email: "Abigayle38@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 528173,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 950007,
      profileSettings: {},
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "invoice",
      },
    },
  },
  price: {
    createdAt: new Date("2023-07-20T22:17:57.471Z"),
    modifiedAt: new Date("2024-12-03T04:34:28.027Z"),
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
| `price`                                                                                                                 | *components.CustomerSubscriptionPrice*                                                                                  | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |