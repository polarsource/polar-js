# CheckoutPublic

Checkout session data retrieved using the client secret.

## Example Usage

```typescript
import { CheckoutPublic } from "@polar-sh/sdk/models/components";

let value: CheckoutPublic = {
  createdAt: new Date("2023-02-16T02:40:03.243Z"),
  modifiedAt: new Date("2022-04-08T19:32:02.022Z"),
  id: "<value>",
  status: "confirmed",
  clientSecret: "<value>",
  url: "https://blind-lobster.info",
  expiresAt: new Date("2024-04-12T08:56:14.488Z"),
  successUrl: "https://decent-provision.net/",
  embedOrigin: "<value>",
  amount: 517683,
  taxAmount: 4558,
  currency: "Turkish Lira",
  totalAmount: 987398,
  productId: "<value>",
  productPriceId: "<value>",
  isPaymentRequired: false,
  customerId: "<value>",
  customerName: "<value>",
  customerEmail: "Torrey.Paucek7@hotmail.com",
  customerIpAddress: "<value>",
  customerBillingAddress: {
    country: "Japan",
  },
  customerTaxId: "<id>",
  paymentProcessorMetadata: {},
  product: {
    createdAt: new Date("2023-05-19T15:37:41.330Z"),
    modifiedAt: new Date("2023-02-28T06:12:59.898Z"),
    id: "<value>",
    name: "<value>",
    description: "buzzing eek swiftly",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-01-23T22:36:36.484Z"),
        modifiedAt: new Date("2022-06-11T07:02:23.326Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-02-21T02:35:30.835Z"),
        modifiedAt: new Date("2022-01-12T13:17:30.759Z"),
        id: "<value>",
        type: "discord",
        description: "procrastinate under on ick lovingly paintwork versus",
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
        path: "/private/var",
        mimeType: "<value>",
        size: 485972,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-01-15T17:02:16.943Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-11-28T02:55:43.193Z"),
        sizeReadable: "<value>",
        publicUrl: "https://sinful-sustenance.info/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2023-11-17T10:35:42.718Z"),
    modifiedAt: new Date("2023-11-28T05:20:13.228Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 511975,
  },
  organization: {
    createdAt: new Date("2022-06-25T04:35:26.551Z"),
    modifiedAt: new Date("2024-03-05T22:33:02.662Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://ill-fated-step-mother.net/",
    bio: "<value>",
    company: "Mann - Bogisich",
    blog: "<value>",
    location: "<value>",
    email: "Godfrey_Sauer29@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 185318,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 598919,
    profileSettings: {},
    featureSettings: {},
  },
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2024-09-20T21:54:34.005Z"),
        modifiedAt: new Date("2022-03-28T23:23:12.546Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "<value>",
        properties: {},
      },
      order: 489711,
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
| `customFieldData`                                                                                                                                            | [components.CheckoutPublicCustomFieldData](../../models/components/checkoutpubliccustomfielddata.md)                                                         | :heavy_minus_sign:                                                                                                                                           | Key-value object storing custom field values.                                                                                                                |
| `paymentProcessor`                                                                                                                                           | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                                                                                   | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
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
| `paymentProcessorMetadata`                                                                                                                                   | [components.CheckoutPublicPaymentProcessorMetadata](../../models/components/checkoutpublicpaymentprocessormetadata.md)                                       | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `product`                                                                                                                                                    | [components.CheckoutProduct](../../models/components/checkoutproduct.md)                                                                                     | :heavy_check_mark:                                                                                                                                           | Product data for a checkout session.                                                                                                                         |
| `productPrice`                                                                                                                                               | *components.ProductPrice*                                                                                                                                    | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `organization`                                                                                                                                               | [components.Organization](../../models/components/organization.md)                                                                                           | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `attachedCustomFields`                                                                                                                                       | [components.AttachedCustomField](../../models/components/attachedcustomfield.md)[]                                                                           | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |