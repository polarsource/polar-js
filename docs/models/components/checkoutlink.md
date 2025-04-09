# CheckoutLink

Checkout link data.

## Example Usage

```typescript
import { CheckoutLink } from "@polar-sh/sdk/models/components/checkoutlink.js";

let value: CheckoutLink = {
  createdAt: new Date("2025-09-22T20:17:02.127Z"),
  modifiedAt: new Date("2025-06-15T14:45:41.089Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  paymentProcessor: "stripe",
  clientSecret: "<value>",
  successUrl: "https://tight-flint.com",
  label: "<value>",
  allowDiscountCodes: false,
  discountId: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  products: [
    {
      createdAt: new Date("2025-10-07T01:07:29.347Z"),
      modifiedAt: new Date("2025-07-28T12:33:37.944Z"),
      id: "<value>",
      name: "<value>",
      description: "alb flawed tidy",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-03-09T11:07:39.349Z"),
          modifiedAt: new Date("2024-02-22T15:23:18.774Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 847946,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-12-01T00:58:10.242Z"),
          modifiedAt: new Date("2024-12-04T22:55:14.640Z"),
          id: "<value>",
          type: "discord",
          description: "versus toe coarse within sans till",
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
          path: "/net",
          mimeType: "<value>",
          size: 555357,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-11-26T00:53:50.040Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-01-06T00:06:56.743Z"),
          sizeReadable: "<value>",
          publicUrl: "https://shadowy-angle.name/",
        },
      ],
    },
  ],
  discount: {
    duration: "repeating",
    durationInMonths: 310542,
    type: "fixed",
    basisPoints: 186745,
    createdAt: new Date("2024-10-02T17:34:08.947Z"),
    modifiedAt: new Date("2023-03-11T00:33:21.612Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2023-04-28T15:38:20.157Z"),
    endsAt: new Date("2024-10-19T12:21:16.000Z"),
    maxRedemptions: 100559,
    redemptionsCount: 441884,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  productId: "<value>",
  productPriceId: "<value>",
  product: {
    createdAt: new Date("2025-05-05T15:11:32.357Z"),
    modifiedAt: new Date("2024-08-24T16:52:46.145Z"),
    id: "<value>",
    name: "<value>",
    description: "abseil old-fashioned ready um trial unsung democratize",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-04-24T16:01:03.511Z"),
        modifiedAt: new Date("2024-04-15T15:33:43.496Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 43510,
        maximumAmount: 337290,
        presetAmount: 752063,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-05-26T20:15:08.037Z"),
        modifiedAt: new Date("2025-12-10T18:32:59.161Z"),
        id: "<value>",
        type: "meter_credit",
        description:
          "prudent tightly doodle lest quirkily object jogging convince deploy",
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
        path: "/private",
        mimeType: "<value>",
        size: 952738,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-12-19T11:07:24.686Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-10-15T01:54:33.109Z"),
        sizeReadable: "<value>",
        publicUrl: "https://helpless-wombat.name/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2025-08-07T04:56:59.574Z"),
    modifiedAt: new Date("2023-07-11T03:59:35.318Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "month",
    priceCurrency: "<value>",
    minimumAmount: 788638,
    maximumAmount: 972752,
    presetAmount: 10210,
  },
  url: "https://infamous-affiliate.org",
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                | Example                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Creation timestamp of the object.                                                                                                                                          |                                                                                                                                                                            |
| `modifiedAt`                                                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Last modification timestamp of the object.                                                                                                                                 |                                                                                                                                                                            |
| `id`                                                                                                                                                                       | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | The ID of the object.                                                                                                                                                      |                                                                                                                                                                            |
| `metadata`                                                                                                                                                                 | Record<string, *components.CheckoutLinkMetadata*>                                                                                                                          | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |                                                                                                                                                                            |
| `paymentProcessor`                                                                                                                                                         | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |                                                                                                                                                                            |
| `clientSecret`                                                                                                                                                             | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Client secret used to access the checkout link.                                                                                                                            |                                                                                                                                                                            |
| `successUrl`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | URL where the customer will be redirected after a successful payment.                                                                                                      |                                                                                                                                                                            |
| `label`                                                                                                                                                                    | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Optional label to distinguish links internally                                                                                                                             |                                                                                                                                                                            |
| `allowDiscountCodes`                                                                                                                                                       | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it. |                                                                                                                                                                            |
| `discountId`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the discount to apply to the checkout. If the discount is not applicable anymore when opening the checkout link, it'll be ignored.                                   |                                                                                                                                                                            |
| `organizationId`                                                                                                                                                           | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | The organization ID.                                                                                                                                                       | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                                                                                       |
| `products`                                                                                                                                                                 | [components.CheckoutLinkProduct](../../models/components/checkoutlinkproduct.md)[]                                                                                         | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |                                                                                                                                                                            |
| `discount`                                                                                                                                                                 | *components.CheckoutLinkDiscount*                                                                                                                                          | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |                                                                                                                                                                            |
| ~~`productId`~~                                                                                                                                                            | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                    |                                                                                                                                                                            |
| ~~`productPriceId`~~                                                                                                                                                       | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                    |                                                                                                                                                                            |
| `product`                                                                                                                                                                  | [components.CheckoutLinkProduct](../../models/components/checkoutlinkproduct.md)                                                                                           | :heavy_check_mark:                                                                                                                                                         | Product data for a checkout link.                                                                                                                                          |                                                                                                                                                                            |
| ~~`productPrice`~~                                                                                                                                                         | *components.CheckoutLinkProductPrice*                                                                                                                                      | :heavy_check_mark:                                                                                                                                                         | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                    |                                                                                                                                                                            |
| `url`                                                                                                                                                                      | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |                                                                                                                                                                            |