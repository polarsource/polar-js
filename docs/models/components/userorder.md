# UserOrder

## Example Usage

```typescript
import { UserOrder } from "@polar-sh/sdk/models/components";

let value: UserOrder = {
  createdAt: new Date("2022-09-05T19:16:17.163Z"),
  modifiedAt: new Date("2023-09-09T09:25:03.473Z"),
  id: "<value>",
  amount: 999932,
  taxAmount: 728466,
  currency: "Guyana Dollar",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  product: {
    createdAt: new Date("2024-04-18T22:37:57.921Z"),
    modifiedAt: new Date("2024-11-11T11:47:55.562Z"),
    id: "<value>",
    name: "<value>",
    description: "ew stunning perspire pfft behind",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-04-25T01:39:48.783Z"),
        modifiedAt: new Date("2023-04-04T23:48:44.294Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-07-31T23:30:59.516Z"),
        modifiedAt: new Date("2024-05-30T15:22:56.357Z"),
        id: "<value>",
        type: "downloadables",
        description: "midwife unless separate",
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
        path: "/opt/bin",
        mimeType: "<value>",
        size: 862198,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-07-20T12:59:24.049Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-12-13T05:33:20.610Z"),
        sizeReadable: "<value>",
        publicUrl: "https://great-pigsty.biz",
      },
    ],
    organization: {
      createdAt: new Date("2022-07-25T01:35:33.444Z"),
      modifiedAt: new Date("2022-11-26T14:28:09.704Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://lazy-decongestant.biz",
      bio: "<value>",
      company: "Roob - Fahey",
      blog: "<value>",
      location: "<value>",
      email: "Albina30@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 262614,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 503479,
      profileSettings: {},
      featureSettings: {},
    },
  },
  productPrice: {
    createdAt: new Date("2024-10-13T09:06:30.714Z"),
    modifiedAt: new Date("2024-05-14T17:43:19.421Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 761914,
    recurringInterval: "year",
  },
  subscription: {
    createdAt: new Date("2024-06-23T01:09:41.277Z"),
    modifiedAt: new Date("2023-05-18T10:30:26.732Z"),
    id: "<value>",
    amount: 465190,
    currency: "Lebanese Pound",
    recurringInterval: "month",
    status: "unpaid",
    currentPeriodStart: new Date("2022-10-11T14:10:39.907Z"),
    currentPeriodEnd: new Date("2022-08-06T04:23:14.951Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-09-25T03:38:49.818Z"),
    endedAt: new Date("2024-06-14T19:37:48.267Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPriceId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `product`                                                                                     | [components.UserOrderProduct](../../models/components/userorderproduct.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPrice`                                                                                | *components.ProductPrice*                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscription`                                                                                | [components.UserOrderSubscription](../../models/components/userordersubscription.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |