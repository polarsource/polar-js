# CustomerOrder

## Example Usage

```typescript
import { CustomerOrder } from "@polar-sh/sdk/models/components/customerorder.js";

let value: CustomerOrder = {
  createdAt: new Date("2025-11-30T18:08:12.857Z"),
  modifiedAt: new Date("2025-10-20T08:31:50.564Z"),
  id: "<value>",
  amount: 696077,
  taxAmount: 292010,
  currency: "UAE Dirham",
  customerId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2024-06-16T12:06:28.738Z"),
    modifiedAt: new Date("2024-10-13T21:42:37.950Z"),
    id: "<value>",
    name: "<value>",
    description:
      "underneath completion before monthly daintily synergy yearn too fervently toward",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2025-09-03T21:54:21.511Z"),
        modifiedAt: new Date("2024-01-17T04:51:42.001Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 408902,
        maximumAmount: 257444,
        presetAmount: 132707,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-09-17T16:51:01.606Z"),
        modifiedAt: new Date("2025-10-06T18:59:00.388Z"),
        id: "<value>",
        type: "github_repository",
        description: "once because as daily on unlike ew aw",
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
        path: "/usr/include",
        mimeType: "<value>",
        size: 116592,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-03-07T13:13:15.838Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-09-03T16:15:30.511Z"),
        sizeReadable: "<value>",
        publicUrl: "https://raw-ad.name/",
      },
    ],
    organization: {
      createdAt: new Date("2023-11-15T19:10:02.805Z"),
      modifiedAt: new Date("2024-01-03T04:14:52.159Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://lazy-guide.com/",
      bio: "<value>",
      company: "Kunde - Howe",
      blog: "<value>",
      location: "<value>",
      email: "Ofelia.Lowe@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 515900,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 766445,
      profileSettings: {},
      featureSettings: {},
    },
  },
  productPrice: {
    createdAt: new Date("2023-07-22T09:00:46.743Z"),
    modifiedAt: new Date("2024-12-23T23:52:06.888Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 330802,
  },
  subscription: {
    createdAt: new Date("2024-05-13T10:30:39.040Z"),
    modifiedAt: new Date("2023-02-18T15:18:04.325Z"),
    id: "<value>",
    amount: 422939,
    currency: "East Caribbean Dollar",
    recurringInterval: "year",
    status: "canceled",
    currentPeriodStart: new Date("2024-11-18T18:24:36.305Z"),
    currentPeriodEnd: new Date("2024-10-03T06:41:29.849Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-11-30T01:22:07.416Z"),
    startedAt: new Date("2024-06-20T17:26:01.877Z"),
    endsAt: new Date("2025-05-16T04:06:10.206Z"),
    endedAt: new Date("2023-09-11T15:02:02.117Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "customer_service",
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
| `productPrice`                                                                                                          | *components.ProductPrice*                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `subscription`                                                                                                          | [components.CustomerOrderSubscription](../../models/components/customerordersubscription.md)                            | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |