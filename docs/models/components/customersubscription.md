# CustomerSubscription

## Example Usage

```typescript
import { CustomerSubscription } from "@polar-sh/sdk/models/components";

let value: CustomerSubscription = {
  createdAt: new Date("2023-02-10T20:15:12.178Z"),
  modifiedAt: new Date("2023-02-16T00:41:41.824Z"),
  id: "<value>",
  amount: 529884,
  currency: "Belarusian Ruble",
  recurringInterval: "year",
  status: "past_due",
  currentPeriodStart: new Date("2023-02-15T09:10:13.932Z"),
  currentPeriodEnd: new Date("2024-12-12T12:06:31.554Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2024-08-14T06:57:51.565Z"),
  endedAt: new Date("2023-10-28T01:41:34.978Z"),
  customerId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2023-02-12T10:28:51.314Z"),
    modifiedAt: new Date("2023-02-09T12:38:41.237Z"),
    id: "<value>",
    name: "<value>",
    description: "scorn before fooey",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-08-04T05:37:09.894Z"),
        modifiedAt: new Date("2023-06-04T20:31:20.070Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-11-19T15:09:26.906Z"),
        modifiedAt: new Date("2024-07-14T02:36:39.601Z"),
        id: "<value>",
        type: "downloadables",
        description:
          "abnormally softly arrogantly er grass advancement frizz brr finally radiant",
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
        path: "/home",
        mimeType: "<value>",
        size: 38811,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-09-28T08:25:11.325Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-04-21T22:49:26.449Z"),
        sizeReadable: "<value>",
        publicUrl: "https://official-seagull.info",
      },
    ],
    organization: {
      createdAt: new Date("2022-10-13T11:59:09.307Z"),
      modifiedAt: new Date("2024-08-01T16:49:07.186Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://linear-tapioca.info",
      bio: "<value>",
      company: "Gerhold Group",
      blog: "<value>",
      location: "<value>",
      email: "Thelma_OReilly@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 803325,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 123997,
      profileSettings: {},
      featureSettings: {},
    },
  },
  price: {
    createdAt: new Date("2023-08-22T05:17:14.865Z"),
    modifiedAt: new Date("2024-10-08T06:03:32.565Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    minimumAmount: 682680,
    maximumAmount: 78168,
    presetAmount: 252906,
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