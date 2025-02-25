# CustomerSubscription

## Example Usage

```typescript
import { CustomerSubscription } from "@polar-sh/sdk/models/components/customersubscription.js";

let value: CustomerSubscription = {
  createdAt: new Date("2023-05-22T16:27:14.359Z"),
  modifiedAt: new Date("2023-10-26T07:36:40.770Z"),
  id: "<value>",
  amount: 457456,
  currency: "Yen",
  recurringInterval: "month",
  status: "trialing",
  currentPeriodStart: new Date("2025-02-22T12:29:56.521Z"),
  currentPeriodEnd: new Date("2023-03-01T04:24:34.334Z"),
  cancelAtPeriodEnd: false,
  canceledAt: new Date("2024-11-24T18:35:24.830Z"),
  startedAt: new Date("2024-02-05T15:08:59.609Z"),
  endsAt: new Date("2025-10-22T06:04:25.496Z"),
  endedAt: new Date("2023-11-14T14:51:03.070Z"),
  customerId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  customerCancellationReason: "other",
  customerCancellationComment: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2025-07-23T14:11:18.603Z"),
    modifiedAt: new Date("2023-08-20T01:03:14.805Z"),
    id: "<value>",
    name: "<value>",
    description:
      "violin gorgeous if weep left scent intensely angrily above untried",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2025-05-06T19:40:45.220Z"),
        modifiedAt: new Date("2024-03-02T09:50:18.418Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 528173,
        maximumAmount: 950007,
        presetAmount: 442506,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-01-19T17:57:19.906Z"),
        modifiedAt: new Date("2025-03-18T04:49:50.317Z"),
        id: "<value>",
        type: "ads",
        description:
          "slowly triumphantly cheerfully hasty behind developmental meanwhile entwine",
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
        path: "/etc/defaults",
        mimeType: "<value>",
        size: 554974,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-02-07T13:42:59.030Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-11-11T17:17:08.680Z"),
        sizeReadable: "<value>",
        publicUrl: "https://unimportant-hubris.com/",
      },
    ],
    organization: {
      createdAt: new Date("2025-02-18T11:59:52.074Z"),
      modifiedAt: new Date("2024-06-01T16:50:18.771Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://next-ferret.biz/",
      bio: "<value>",
      company: "Schneider, Hartmann and Greenfelder",
      blog: "<value>",
      location: "<value>",
      email: "Olin.Stark@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 320785,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 929086,
      profileSettings: {},
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "prorate",
      },
    },
  },
  price: {
    createdAt: new Date("2023-10-05T13:48:13.909Z"),
    modifiedAt: new Date("2023-11-12T05:07:17.320Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "year",
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