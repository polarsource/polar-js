# PolarCheckoutSchemasCheckout

Checkout session data retrieved using an access token.

## Example Usage

```typescript
import { PolarCheckoutSchemasCheckout } from "@polar-sh/sdk/models/components";

let value: PolarCheckoutSchemasCheckout = {
  createdAt: new Date("2023-03-10T23:31:28.664Z"),
  modifiedAt: new Date("2024-04-09T16:36:06.881Z"),
  id: "<value>",
  status: "open",
  clientSecret: "<value>",
  url: "https://self-assured-fat.net/",
  expiresAt: new Date("2022-01-26T01:19:06.557Z"),
  successUrl: "https://necessary-chasuble.com",
  embedOrigin: "<value>",
  amount: 928155,
  taxAmount: 505017,
  currency: "Australian Dollar",
  totalAmount: 148557,
  productId: "<value>",
  productPriceId: "<value>",
  isPaymentRequired: false,
  customerId: "<value>",
  customerName: "<value>",
  customerEmail: "Jasen82@hotmail.com",
  customerIpAddress: "<value>",
  customerBillingAddress: {
    country: "United Arab Emirates",
  },
  customerTaxId: "<id>",
  paymentProcessorMetadata: {},
  metadata: {
    "key": "<value>",
  },
  product: {
    createdAt: new Date("2024-03-09T15:40:10.296Z"),
    modifiedAt: new Date("2022-02-27T13:45:36.700Z"),
    id: "<value>",
    name: "<value>",
    description:
      "implode ick sans in aha cheerful after weary oval furthermore",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-06-13T17:02:40.832Z"),
        modifiedAt: new Date("2022-05-21T23:41:53.158Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 28163,
        maximumAmount: 759236,
        presetAmount: 73989,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-08-13T03:13:38.266Z"),
        modifiedAt: new Date("2023-07-23T06:22:31.196Z"),
        id: "<value>",
        description: "geez abnormally cleaner order mmm",
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
        path: "/var/mail",
        mimeType: "<value>",
        size: 16232,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-10-05T21:58:09.997Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-08-28T00:21:29.394Z"),
        sizeReadable: "<value>",
        publicUrl: "https://incomparable-cash.net/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2023-04-29T19:57:08.545Z"),
    modifiedAt: new Date("2023-11-22T13:08:14.775Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
  },
  subscriptionId: "<value>",
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2022-04-13T08:13:23.724Z"),
        modifiedAt: new Date("2022-05-11T14:20:11.184Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "<value>",
        properties: {},
      },
      order: 817785,
      required: false,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                | :heavy_check_mark:                                                                                                                                           | Creation timestamp of the object.                                                                                                                            |
| `modifiedAt`                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                | :heavy_check_mark:                                                                                                                                           | Last modification timestamp of the object.                                                                                                                   |
| `id`                                                                                                                                                         | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | The ID of the object.                                                                                                                                        |
| `customFieldData`                                                                                                                                            | [components.PolarCheckoutSchemasCheckoutCustomFieldData](../../models/components/polarcheckoutschemascheckoutcustomfielddata.md)                             | :heavy_minus_sign:                                                                                                                                           | Key-value object storing custom field values.                                                                                                                |
| `paymentProcessor`                                                                                                                                           | [components.PolarEnumsPaymentProcessor](../../models/components/polarenumspaymentprocessor.md)                                                               | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `status`                                                                                                                                                     | [components.CheckoutStatus](../../models/components/checkoutstatus.md)                                                                                       | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `clientSecret`                                                                                                                                               | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | Client secret used to update and complete the checkout session from the client.                                                                              |
| `url`                                                                                                                                                        | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | URL where the customer can access the checkout session.                                                                                                      |
| `expiresAt`                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                | :heavy_check_mark:                                                                                                                                           | Expiration date and time of the checkout session.                                                                                                            |
| `successUrl`                                                                                                                                                 | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | URL where the customer will be redirected after a successful payment.                                                                                        |
| `embedOrigin`                                                                                                                                                | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | When checkout is embedded, represents the Origin of the page embedding the checkout. Used as a security measure to send messages only to the embedding page. |
| `amount`                                                                                                                                                     | *number*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `taxAmount`                                                                                                                                                  | *number*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | Computed tax amount to pay in cents.                                                                                                                         |
| `currency`                                                                                                                                                   | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | Currency code of the checkout session.                                                                                                                       |
| `totalAmount`                                                                                                                                                | *number*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | Total amount to pay in cents.                                                                                                                                |
| `productId`                                                                                                                                                  | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | ID of the product to checkout.                                                                                                                               |
| `productPriceId`                                                                                                                                             | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | ID of the product price to checkout.                                                                                                                         |
| `isPaymentRequired`                                                                                                                                          | *boolean*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                           | Whether the checkout requires payment. Useful to detect free products.                                                                                       |
| `customerId`                                                                                                                                                 | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `customerName`                                                                                                                                               | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `customerEmail`                                                                                                                                              | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `customerIpAddress`                                                                                                                                          | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `customerBillingAddress`                                                                                                                                     | [components.Address](../../models/components/address.md)                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `customerTaxId`                                                                                                                                              | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `paymentProcessorMetadata`                                                                                                                                   | [components.PaymentProcessorMetadata](../../models/components/paymentprocessormetadata.md)                                                                   | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `metadata`                                                                                                                                                   | Record<string, *string*>                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `product`                                                                                                                                                    | [components.CheckoutProduct](../../models/components/checkoutproduct.md)                                                                                     | :heavy_check_mark:                                                                                                                                           | Product data for a checkout session.                                                                                                                         |
| `productPrice`                                                                                                                                               | *components.ProductPrice*                                                                                                                                    | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `subscriptionId`                                                                                                                                             | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `attachedCustomFields`                                                                                                                                       | [components.AttachedCustomField](../../models/components/attachedcustomfield.md)[]                                                                           | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |