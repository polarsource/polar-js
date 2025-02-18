# CustomerOrder

## Example Usage

```typescript
import { CustomerOrder } from "@polar-sh/sdk/models/components/customerorder.js";

let value: CustomerOrder = {
  createdAt: new Date("2024-10-04T08:38:09.184Z"),
  modifiedAt: new Date("2025-04-29T08:16:33.102Z"),
  id: "<value>",
  amount: 285508,
  taxAmount: 977011,
  currency: "Bahamian Dollar",
  customerId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2024-06-03T10:10:43.292Z"),
    modifiedAt: new Date("2025-03-09T20:13:31.276Z"),
    id: "<value>",
    name: "<value>",
    description: "from apud bolster kiddingly however dearly",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2025-06-25T10:13:45.773Z"),
        modifiedAt: new Date("2025-05-28T00:02:44.533Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        minimumAmount: 325000,
        maximumAmount: 626494,
        presetAmount: 153222,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-07-08T03:11:19.331Z"),
        modifiedAt: new Date("2023-03-15T19:09:10.567Z"),
        id: "<value>",
        type: "custom",
        description:
          "remarkable psst wherever excluding reproachfully slump mmm indeed",
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
        path: "/opt/share",
        mimeType: "<value>",
        size: 855174,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-03-15T18:32:23.984Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-01-03T21:20:38.344Z"),
        sizeReadable: "<value>",
        publicUrl: "https://gigantic-requirement.net",
      },
    ],
    organization: {
      createdAt: new Date("2024-01-31T09:00:48.397Z"),
      modifiedAt: new Date("2024-07-28T20:15:39.685Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://possible-rationale.org/",
      bio: "<value>",
      company: "Turcotte and Sons",
      blog: "<value>",
      location: "<value>",
      email: "Demond_Rempel5@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 238583,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 245022,
      profileSettings: {},
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "prorate",
      },
    },
  },
  productPrice: {
    createdAt: new Date("2023-07-01T10:58:17.419Z"),
    modifiedAt: new Date("2023-02-22T23:07:25.713Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    type: "one_time",
    recurringInterval: "month",
    priceCurrency: "<value>",
    priceAmount: 280695,
  },
  subscription: {
    createdAt: new Date("2025-02-27T22:07:34.332Z"),
    modifiedAt: new Date("2024-09-13T10:04:23.587Z"),
    id: "<value>",
    amount: 103302,
    currency: "Balboa",
    recurringInterval: "month",
    status: "canceled",
    currentPeriodStart: new Date("2024-06-19T21:50:51.021Z"),
    currentPeriodEnd: new Date("2023-06-04T10:07:51.925Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-07-20T12:08:42.008Z"),
    startedAt: new Date("2024-08-27T10:00:00.988Z"),
    endsAt: new Date("2023-11-08T19:03:18.551Z"),
    endedAt: new Date("2024-02-23T17:59:07.811Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "unused",
    customerCancellationComment: "<value>",
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
| `productPrice`                                                                                                          | *components.CustomerOrderProductPrice*                                                                                  | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `subscription`                                                                                                          | [components.CustomerOrderSubscription](../../models/components/customerordersubscription.md)                            | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |