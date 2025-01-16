# CustomerOrder

## Example Usage

```typescript
import { CustomerOrder } from "@polar-sh/sdk/models/components";

let value: CustomerOrder = {
  createdAt: new Date("2024-12-12T02:05:45.362Z"),
  modifiedAt: new Date("2024-12-28T14:11:04.489Z"),
  id: "<value>",
  amount: 858424,
  taxAmount: 700121,
  currency: "New Israeli Sheqel",
  customerId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2025-05-30T10:39:49.151Z"),
    modifiedAt: new Date("2023-05-16T21:37:36.664Z"),
    id: "<value>",
    name: "<value>",
    description:
      "seemingly hoof dwell hygienic geez fatally disbar repeatedly lest",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-06-24T17:19:29.498Z"),
        modifiedAt: new Date("2024-02-28T15:59:22.619Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 996702,
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-09-30T19:19:11.121Z"),
        modifiedAt: new Date("2024-08-23T10:15:12.130Z"),
        id: "<value>",
        type: "custom",
        description:
          "regularly skyscraper alongside idealistic colorfully below accompany coaxingly",
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
        path: "/usr/X11R6",
        mimeType: "<value>",
        size: 993263,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-03-05T12:55:25.684Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-04-17T01:22:49.265Z"),
        sizeReadable: "<value>",
        publicUrl: "https://innocent-armoire.info",
      },
    ],
    organization: {
      createdAt: new Date("2023-02-02T01:48:16.382Z"),
      modifiedAt: new Date("2025-11-09T15:45:51.130Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://ornate-tusk.name/",
      bio: "<value>",
      company: "Wilderman - Dibbert",
      blog: "<value>",
      location: "<value>",
      email: "Francis80@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 402226,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 74649,
      profileSettings: {},
      featureSettings: {},
    },
  },
  productPrice: {
    createdAt: new Date("2025-07-31T12:00:00.723Z"),
    modifiedAt: new Date("2024-01-14T21:46:23.229Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "year",
  },
  subscription: {
    createdAt: new Date("2025-09-13T06:06:42.185Z"),
    modifiedAt: new Date("2025-10-09T00:59:04.462Z"),
    id: "<value>",
    amount: 875206,
    currency: "Yuan Renminbi",
    recurringInterval: "year",
    status: "incomplete",
    currentPeriodStart: new Date("2025-06-02T22:53:14.726Z"),
    currentPeriodEnd: new Date("2024-09-24T07:00:23.028Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-03-16T11:45:47.711Z"),
    startedAt: new Date("2024-08-25T11:27:18.339Z"),
    endsAt: new Date("2024-10-16T21:08:22.533Z"),
    endedAt: new Date("2023-02-10T13:48:36.795Z"),
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