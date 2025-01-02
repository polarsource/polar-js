# CheckoutLink

Checkout link data.

## Example Usage

```typescript
import { CheckoutLink } from "@polar-sh/sdk/models/components";

let value: CheckoutLink = {
  createdAt: new Date("2025-03-04T13:39:39.013Z"),
  modifiedAt: new Date("2024-06-17T10:36:28.925Z"),
  id: "<value>",
  metadata: {
    "key": false,
  },
  paymentProcessor: "stripe",
  clientSecret: "<value>",
  successUrl: "https://handsome-nun.info",
  label: "<value>",
  allowDiscountCodes: false,
  productId: "<value>",
  productPriceId: "<value>",
  discountId: "<value>",
  product: {
    createdAt: new Date("2025-05-18T01:34:45.076Z"),
    modifiedAt: new Date("2023-01-09T03:57:13.283Z"),
    id: "<value>",
    name: "<value>",
    description: "bah zowie indeed besides haul oh absent",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-06-06T12:48:42.851Z"),
        modifiedAt: new Date("2024-10-17T00:55:18.953Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2025-10-11T08:44:45.015Z"),
        modifiedAt: new Date("2025-06-23T11:20:33.120Z"),
        id: "<value>",
        type: "license_keys",
        description:
          "so obediently yet preclude nauseate hydrolyse mmm huzzah since birdbath",
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
        path: "/etc/namedb",
        mimeType: "<value>",
        size: 653114,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-09-03T20:58:16.570Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-06-24T09:42:38.938Z"),
        sizeReadable: "<value>",
        publicUrl: "https://long-term-cellar.com/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2024-12-02T14:44:34.345Z"),
    modifiedAt: new Date("2024-08-12T03:13:38.266Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 518491,
  },
  discount: {
    duration: "repeating",
    durationInMonths: 400613,
    type: "fixed",
    amount: 56043,
    currency: "Hong Kong Dollar",
    createdAt: new Date("2024-10-28T10:16:41.446Z"),
    modifiedAt: new Date("2023-08-30T11:21:08.421Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2023-04-30T03:55:25.651Z"),
    endsAt: new Date("2024-06-01T06:33:39.509Z"),
    maxRedemptions: 536704,
    redemptionsCount: 821012,
    organizationId: "<value>",
  },
  url: "https://able-lounge.com/",
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