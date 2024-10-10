# CheckoutPublic

Checkout session data retrieved using the client secret.

## Example Usage

```typescript
import { CheckoutPublic } from "@polar-sh/sdk/models/components";

let value: CheckoutPublic = {
  createdAt: new Date("2023-11-06T16:01:51.588Z"),
  modifiedAt: new Date("2024-04-14T18:31:45.123Z"),
  id: "<value>",
  status: "failed",
  clientSecret: "<value>",
  expiresAt: new Date("2022-07-14T00:14:45.565Z"),
  successUrl: "https://powerful-shark.biz",
  amount: 500101,
  taxAmount: 208959,
  currency: "Turkish Lira",
  totalAmount: 204579,
  productId: "<value>",
  productPriceId: "<value>",
  isPaymentRequired: false,
  customerId: "<value>",
  customerName: "<value>",
  customerEmail: "Hazel_Jenkins52@yahoo.com",
  customerIpAddress: "<value>",
  customerBillingAddress: {
    country: "Italy",
  },
  customerTaxId: "<id>",
  paymentProcessorMetadata: {},
  product: {
    createdAt: new Date("2024-04-28T14:16:56.411Z"),
    modifiedAt: new Date("2024-01-03T07:06:59.391Z"),
    id: "<value>",
    name: "<value>",
    description: "after weary oval",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-10-07T11:35:19.244Z"),
        modifiedAt: new Date("2022-03-29T21:43:02.894Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        priceAmount: 137914,
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-06-24T09:42:38.938Z"),
        modifiedAt: new Date("2023-04-01T22:38:03.818Z"),
        id: "<value>",
        type: "discord",
        description: "beneath geez abnormally cleaner",
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
        path: "/private/tmp",
        mimeType: "<value>",
        size: 477169,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-03-16T09:33:11.695Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-01-12T21:22:57.299Z"),
        sizeReadable: "<value>",
        publicUrl: "https://pleased-order.net",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2023-06-24T23:34:58.651Z"),
    modifiedAt: new Date("2024-11-01T17:29:09.841Z"),
    id: "<value>",
    isArchived: false,
  },
  url: "https://shabby-tuba.com/",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Creation timestamp of the object.                                                                                      |
| `modifiedAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Last modification timestamp of the object.                                                                             |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the object.                                                                                                  |
| `paymentProcessor`                                                                                                     | [components.PolarEnumsPaymentProcessor](../../models/components/polarenumspaymentprocessor.md)                         | :heavy_check_mark:                                                                                                     | Payment processor used.                                                                                                |
| `status`                                                                                                               | [components.CheckoutStatus](../../models/components/checkoutstatus.md)                                                 | :heavy_check_mark:                                                                                                     | Status of the checkout session.                                                                                        |
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