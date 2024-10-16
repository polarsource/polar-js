# CheckoutPublic

Checkout session data retrieved using the client secret.

## Example Usage

```typescript
import { CheckoutPublic } from "@polar-sh/sdk/models/components";

let value: CheckoutPublic = {
  createdAt: new Date("2023-12-26T18:28:53.746Z"),
  modifiedAt: new Date("2022-04-08T07:55:03.665Z"),
  id: "<value>",
  status: "expired",
  clientSecret: "<value>",
  expiresAt: new Date("2023-06-09T15:08:25.512Z"),
  successUrl: "https://golden-seafood.net",
  amount: 19463,
  taxAmount: 190413,
  currency: "Balboa",
  totalAmount: 496042,
  productId: "<value>",
  productPriceId: "<value>",
  isPaymentRequired: false,
  customerId: "<value>",
  customerName: "<value>",
  customerEmail: "Floy.Zemlak@gmail.com",
  customerIpAddress: "<value>",
  customerBillingAddress: {
    country: "Malta",
  },
  customerTaxId: "<id>",
  paymentProcessorMetadata: {},
  product: {
    createdAt: new Date("2023-12-30T06:59:24.222Z"),
    modifiedAt: new Date("2023-01-31T10:52:16.926Z"),
    id: "<value>",
    name: "<value>",
    description: "during godfather phew per",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-07-01T04:04:20.139Z"),
        modifiedAt: new Date("2024-03-23T22:47:32.575Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        minimumAmount: 313064,
        maximumAmount: 104097,
        presetAmount: 825257,
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-04-27T17:18:40.571Z"),
        modifiedAt: new Date("2022-05-18T18:26:16.470Z"),
        id: "<value>",
        description: "unless boldly cash suspiciously",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          paidArticles: false,
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/etc",
        mimeType: "<value>",
        size: 577549,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-08-09T10:13:51.600Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-04-18T14:04:46.675Z"),
        sizeReadable: "<value>",
        publicUrl: "https://intent-starboard.net/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2024-05-10T16:19:06.783Z"),
    modifiedAt: new Date("2022-02-18T12:13:52.647Z"),
    id: "<value>",
    isArchived: false,
    recurringInterval: "year",
  },
  url: "https://authorized-transom.info",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Creation timestamp of the object.                                                                                      |
| `modifiedAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Last modification timestamp of the object.                                                                             |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the object.                                                                                                  |
| `paymentProcessor`                                                                                                     | [components.PolarEnumsPaymentProcessor](../../models/components/polarenumspaymentprocessor.md)                         | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `status`                                                                                                               | [components.CheckoutStatus](../../models/components/checkoutstatus.md)                                                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `clientSecret`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Client secret used to update and complete the checkout session from the client.                                        |
| `expiresAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Expiration date and time of the checkout session.                                                                      |
| `successUrl`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | URL where the customer will be redirected after a successful payment.                                                  |
| `amount`                                                                                                               | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `taxAmount`                                                                                                            | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | Computed tax amount to pay in cents.                                                                                   |
| `currency`                                                                                                             | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Currency code of the checkout session.                                                                                 |
| `totalAmount`                                                                                                          | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | Total amount to pay in cents.                                                                                          |
| `productId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | ID of the product to checkout.                                                                                         |
| `productPriceId`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | ID of the product price to checkout.                                                                                   |
| `isPaymentRequired`                                                                                                    | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the checkout requires payment. Useful to detect free products.                                                 |
| `customerId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `customerName`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `customerEmail`                                                                                                        | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `customerIpAddress`                                                                                                    | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `customerBillingAddress`                                                                                               | [components.Address](../../models/components/address.md)                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `customerTaxId`                                                                                                        | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `paymentProcessorMetadata`                                                                                             | [components.CheckoutPublicPaymentProcessorMetadata](../../models/components/checkoutpublicpaymentprocessormetadata.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `product`                                                                                                              | [components.Product](../../models/components/product.md)                                                               | :heavy_check_mark:                                                                                                     | A product.                                                                                                             |
| `productPrice`                                                                                                         | *components.ProductPrice*                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `url`                                                                                                                  | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |