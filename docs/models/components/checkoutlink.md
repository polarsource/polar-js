# CheckoutLink

Checkout link data.

## Example Usage

```typescript
import { CheckoutLink } from "@polar-sh/sdk/models/components";

let value: CheckoutLink = {
  createdAt: new Date("2023-03-13T08:26:51.024Z"),
  modifiedAt: new Date("2023-05-11T19:41:29.989Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  clientSecret: "<value>",
  successUrl: "https://silent-interviewer.net/",
  label: "<value>",
  allowDiscountCodes: false,
  productId: "<value>",
  productPriceId: "<value>",
  discountId: "<value>",
  product: {
    createdAt: new Date("2024-01-07T21:12:58.857Z"),
    modifiedAt: new Date("2024-10-28T12:14:30.511Z"),
    id: "<value>",
    name: "<value>",
    description: "cleverly catalyze tribe on quickly dual extract furiously",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-07-12T09:09:47.370Z"),
        modifiedAt: new Date("2024-05-06T21:17:14.746Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 725704,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-07-04T23:08:20.057Z"),
        modifiedAt: new Date("2024-09-06T06:00:45.080Z"),
        id: "<value>",
        type: "ads",
        description: "hateful poor naturally circa",
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
        path: "/var/log",
        mimeType: "<value>",
        size: 133849,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-06-11T10:18:55.444Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-04-14T12:09:29.462Z"),
        sizeReadable: "<value>",
        publicUrl: "https://vast-cantaloupe.name",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2024-08-06T16:40:59.881Z"),
    modifiedAt: new Date("2023-02-09T12:06:43.554Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 106063,
    recurringInterval: "month",
  },
  discount: {
    duration: "forever",
    durationInMonths: 624227,
    type: "percentage",
    amount: 315294,
    currency: "Iranian Rial",
    createdAt: new Date("2022-11-07T06:01:20.379Z"),
    modifiedAt: new Date("2022-05-08T18:58:25.406Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2022-04-16T06:22:30.370Z"),
    endsAt: new Date("2023-06-03T03:50:32.017Z"),
    maxRedemptions: 570010,
    redemptionsCount: 700207,
    organizationId: "<value>",
  },
  url: "https://mindless-government.com/",
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Creation timestamp of the object.                                                                                                                                          |
| `modifiedAt`                                                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Last modification timestamp of the object.                                                                                                                                 |
| `id`                                                                                                                                                                       | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | The ID of the object.                                                                                                                                                      |
| `metadata`                                                                                                                                                                 | Record<string, *components.CheckoutLinkMetadata*>                                                                                                                          | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `paymentProcessor`                                                                                                                                                         | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `clientSecret`                                                                                                                                                             | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Client secret used to access the checkout link.                                                                                                                            |
| `successUrl`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | URL where the customer will be redirected after a successful payment.                                                                                                      |
| `label`                                                                                                                                                                    | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Optional label to distinguish links internally                                                                                                                             |
| `allowDiscountCodes`                                                                                                                                                       | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it. |
| `productId`                                                                                                                                                                | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the product to checkout.                                                                                                                                             |
| `productPriceId`                                                                                                                                                           | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the product price to checkout. First available price will be selected unless an explicit price ID is set.                                                            |
| `discountId`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the discount to apply to the checkout. If the discount is not applicable anymore when opening the checkout link, it'll be ignored.                                   |
| `product`                                                                                                                                                                  | [components.CheckoutLinkProduct](../../models/components/checkoutlinkproduct.md)                                                                                           | :heavy_check_mark:                                                                                                                                                         | Product data for a checkout link.                                                                                                                                          |
| `productPrice`                                                                                                                                                             | *components.ProductPrice*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `discount`                                                                                                                                                                 | *components.CheckoutLinkDiscount*                                                                                                                                          | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `url`                                                                                                                                                                      | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |