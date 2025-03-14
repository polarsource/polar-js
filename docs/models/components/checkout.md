# Checkout

Checkout session data retrieved using an access token.

## Example Usage

```typescript
import { Checkout } from "@polar-sh/sdk/models/components/checkout.js";

let value: Checkout = {
  createdAt: new Date("2025-01-06T13:32:43.889Z"),
  modifiedAt: new Date("2023-09-26T22:08:20.716Z"),
  id: "<value>",
  paymentProcessor: "stripe",
  status: "confirmed",
  clientSecret: "<value>",
  url: "https://torn-railway.biz",
  expiresAt: new Date("2023-05-25T02:31:24.789Z"),
  successUrl: "https://frizzy-diversity.info/",
  embedOrigin: "<value>",
  amount: 683282,
  taxAmount: 695626,
  currency: "Falkland Islands Pound",
  subtotalAmount: 379927,
  totalAmount: 181151,
  productId: "<value>",
  productPriceId: "<value>",
  discountId: "<value>",
  allowDiscountCodes: false,
  isDiscountApplicable: false,
  isFreeProductPrice: false,
  isPaymentRequired: false,
  isPaymentSetupRequired: false,
  isPaymentFormRequired: false,
  customerId: "<value>",
  customerName: "<value>",
  customerEmail: "<value>",
  customerIpAddress: "<value>",
  customerBillingAddress: {
    country: "FR",
  },
  customerTaxId: "<id>",
  paymentProcessorMetadata: {
    "key": "<value>",
  },
  metadata: {
    "key": "<value>",
  },
  customerExternalId: "<id>",
  products: [
    {
      createdAt: new Date("2025-02-02T21:48:55.607Z"),
      modifiedAt: new Date("2025-05-03T10:48:13.302Z"),
      id: "<value>",
      name: "<value>",
      description: "in-joke oof behind gah runny vanish sugary woot after",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-04-20T04:16:16.048Z"),
          modifiedAt: new Date("2025-11-02T01:12:41.532Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-05-12T18:17:15.678Z"),
          modifiedAt: new Date("2023-12-25T01:32:23.978Z"),
          id: "<value>",
          type: "discord",
          description: "fondly handful electronics mid athletic frequent and",
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
          size: 881721,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-10-26T14:10:48.354Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-02-20T10:42:45.340Z"),
          sizeReadable: "<value>",
          publicUrl: "https://simplistic-descendant.biz/",
        },
      ],
    },
  ],
  product: {
    createdAt: new Date("2024-05-07T10:10:03.097Z"),
    modifiedAt: new Date("2023-11-30T16:44:13.155Z"),
    id: "<value>",
    name: "<value>",
    description:
      "sizzling huzzah like nor sizzling cheerfully hungrily accessorise fly",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-05-07T19:27:28.258Z"),
        modifiedAt: new Date("2024-09-24T13:05:49.123Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 671957,
        maximumAmount: 948861,
        presetAmount: 2703,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-12-10T07:51:38.823Z"),
        modifiedAt: new Date("2024-10-20T00:43:02.657Z"),
        id: "<value>",
        type: "github_repository",
        description:
          "bus questioningly topsail diligently thigh arraign into defenseless geez burgeon",
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
        path: "/Network",
        mimeType: "<value>",
        size: 591027,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-12-23T10:58:40.496Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-03-11T09:26:29.319Z"),
        sizeReadable: "<value>",
        publicUrl: "https://hairy-pupil.name",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2025-09-02T05:07:56.421Z"),
    modifiedAt: new Date("2025-04-17T23:02:17.425Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    type: "recurring",
    recurringInterval: "month",
  },
  discount: {
    duration: "once",
    type: "fixed",
    amount: 432281,
    currency: "Moroccan Dirham",
    id: "<value>",
    name: "<value>",
    code: "<value>",
  },
  subscriptionId: "<value>",
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2025-11-16T18:43:16.465Z"),
        modifiedAt: new Date("2023-05-09T13:59:52.497Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        properties: {
          options: [
            {
              value: "<value>",
              label: "<value>",
            },
          ],
        },
      },
      order: 589695,
      required: false,
    },
  ],
  customerMetadata: {
    "key": false,
  },
};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                        | :heavy_check_mark:                                                                                                                                                                                   | Creation timestamp of the object.                                                                                                                                                                    |
| `modifiedAt`                                                                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                        | :heavy_check_mark:                                                                                                                                                                                   | Last modification timestamp of the object.                                                                                                                                                           |
| `id`                                                                                                                                                                                                 | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | The ID of the object.                                                                                                                                                                                |
| `customFieldData`                                                                                                                                                                                    | Record<string, *components.CheckoutCustomFieldData*>                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                   | Key-value object storing custom field values.                                                                                                                                                        |
| `paymentProcessor`                                                                                                                                                                                   | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `status`                                                                                                                                                                                             | [components.CheckoutStatus](../../models/components/checkoutstatus.md)                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `clientSecret`                                                                                                                                                                                       | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Client secret used to update and complete the checkout session from the client.                                                                                                                      |
| `url`                                                                                                                                                                                                | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | URL where the customer can access the checkout session.                                                                                                                                              |
| `expiresAt`                                                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                        | :heavy_check_mark:                                                                                                                                                                                   | Expiration date and time of the checkout session.                                                                                                                                                    |
| `successUrl`                                                                                                                                                                                         | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | URL where the customer will be redirected after a successful payment.                                                                                                                                |
| `embedOrigin`                                                                                                                                                                                        | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | When checkout is embedded, represents the Origin of the page embedding the checkout. Used as a security measure to send messages only to the embedding page.                                         |
| `amount`                                                                                                                                                                                             | *number*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `taxAmount`                                                                                                                                                                                          | *number*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Computed tax amount to pay in cents.                                                                                                                                                                 |
| `currency`                                                                                                                                                                                           | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Currency code of the checkout session.                                                                                                                                                               |
| `subtotalAmount`                                                                                                                                                                                     | *number*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Subtotal amount in cents, including discounts and before tax.                                                                                                                                        |
| `totalAmount`                                                                                                                                                                                        | *number*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Total amount to pay in cents, including discounts and after tax.                                                                                                                                     |
| `productId`                                                                                                                                                                                          | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | ID of the product to checkout.                                                                                                                                                                       |
| `productPriceId`                                                                                                                                                                                     | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | ID of the product price to checkout.                                                                                                                                                                 |
| `discountId`                                                                                                                                                                                         | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | ID of the discount applied to the checkout.                                                                                                                                                          |
| `allowDiscountCodes`                                                                                                                                                                                 | *boolean*                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                   | Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it.                           |
| `isDiscountApplicable`                                                                                                                                                                               | *boolean*                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                   | Whether the discount is applicable to the checkout. Typically, free and custom prices are not discountable.                                                                                          |
| `isFreeProductPrice`                                                                                                                                                                                 | *boolean*                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                   | Whether the product price is free, regardless of discounts.                                                                                                                                          |
| `isPaymentRequired`                                                                                                                                                                                  | *boolean*                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                   | Whether the checkout requires payment, e.g. in case of free products or discounts that cover the total amount.                                                                                       |
| `isPaymentSetupRequired`                                                                                                                                                                             | *boolean*                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                   | Whether the checkout requires setting up a payment method, regardless of the amount, e.g. subscriptions that have first free cycles.                                                                 |
| `isPaymentFormRequired`                                                                                                                                                                              | *boolean*                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                   | Whether the checkout requires a payment form, whether because of a payment or payment method setup.                                                                                                  |
| `customerId`                                                                                                                                                                                         | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `customerName`                                                                                                                                                                                       | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Name of the customer.                                                                                                                                                                                |
| `customerEmail`                                                                                                                                                                                      | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Email address of the customer.                                                                                                                                                                       |
| `customerIpAddress`                                                                                                                                                                                  | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `customerBillingAddress`                                                                                                                                                                             | [components.Address](../../models/components/address.md)                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `customerTaxId`                                                                                                                                                                                      | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `paymentProcessorMetadata`                                                                                                                                                                           | Record<string, *string*>                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `metadata`                                                                                                                                                                                           | Record<string, *components.CheckoutMetadata*>                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `customerExternalId`                                                                                                                                                                                 | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | ID of the customer in your system. If a matching customer exists on Polar, the resulting order will be linked to this customer. Otherwise, a new customer will be created with this external ID set. |
| `products`                                                                                                                                                                                           | [components.CheckoutProduct](../../models/components/checkoutproduct.md)[]                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                   | List of products available to select.                                                                                                                                                                |
| `product`                                                                                                                                                                                            | [components.CheckoutProduct](../../models/components/checkoutproduct.md)                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Product data for a checkout session.                                                                                                                                                                 |
| `productPrice`                                                                                                                                                                                       | *components.CheckoutProductPrice*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                   | Price of the selected product.                                                                                                                                                                       |
| `discount`                                                                                                                                                                                           | *components.CheckoutDiscount*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `subscriptionId`                                                                                                                                                                                     | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `attachedCustomFields`                                                                                                                                                                               | [components.AttachedCustomField](../../models/components/attachedcustomfield.md)[]                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `customerMetadata`                                                                                                                                                                                   | Record<string, *components.CustomerMetadata*>                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |