# CustomerOrder

## Example Usage

```typescript
import { CustomerOrder } from "@polar-sh/sdk/models/components";

let value: CustomerOrder = {
  createdAt: new Date("2024-10-14T18:51:40.332Z"),
  modifiedAt: new Date("2023-09-11T03:54:13.692Z"),
  id: "<value>",
  amount: 601880,
  taxAmount: 962248,
  currency: "New Israeli Sheqel",
  customerId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2023-11-23T09:32:09.666Z"),
    modifiedAt: new Date("2023-04-27T22:20:58.886Z"),
    id: "<value>",
    name: "<value>",
    description: "yarmulke why hunt silently aha",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-10-07T07:59:00.374Z"),
        modifiedAt: new Date("2024-11-11T15:10:16.010Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 984385,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-09-26T22:20:08.593Z"),
        modifiedAt: new Date("2022-01-16T16:38:44.010Z"),
        id: "<value>",
        type: "license_keys",
        description:
          "unlike unwritten once incidentally livid phew poetry tank",
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
        path: "/usr/local/bin",
        mimeType: "<value>",
        size: 38122,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-06-20T09:39:58.377Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-07-30T13:26:38.433Z"),
        sizeReadable: "<value>",
        publicUrl: "https://partial-baseboard.info",
      },
    ],
    organization: {
      createdAt: new Date("2023-12-25T13:54:38.176Z"),
      modifiedAt: new Date("2024-12-18T21:15:28.785Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://worthwhile-mantua.info/",
      bio: "<value>",
      company: "McClure Inc",
      blog: "<value>",
      location: "<value>",
      email: "Wiley23@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 881307,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 141933,
      profileSettings: {},
      featureSettings: {},
    },
  },
  productPrice: {
    createdAt: new Date("2023-09-16T04:48:18.076Z"),
    modifiedAt: new Date("2024-10-17T09:25:29.798Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 564493,
  },
  subscription: {
    createdAt: new Date("2022-08-20T22:40:34.497Z"),
    modifiedAt: new Date("2022-10-18T09:20:55.521Z"),
    id: "<value>",
    amount: 678571,
    currency: "Sudanese Pound",
    recurringInterval: "year",
    status: "incomplete_expired",
    currentPeriodStart: new Date("2022-07-24T16:49:09.098Z"),
    currentPeriodEnd: new Date("2023-12-19T11:49:29.196Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-09-09T08:19:45.481Z"),
    endedAt: new Date("2022-06-28T09:44:16.203Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Creation timestamp of the object.                                                                                       |
| `modifiedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Last modification timestamp of the object.                                                                              |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `amount`                                                                                                                | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `taxAmount`                                                                                                             | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `currency`                                                                                                              | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customerId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productPriceId`                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `subscriptionId`                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`userId`~~                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `product`                                                                                                               | [components.CustomerOrderProduct](../../models/components/customerorderproduct.md)                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productPrice`                                                                                                          | *components.ProductPrice*                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `subscription`                                                                                                          | [components.CustomerOrderSubscription](../../models/components/customerordersubscription.md)                            | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |