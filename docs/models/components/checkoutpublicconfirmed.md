# CheckoutPublicConfirmed

Checkout session data retrieved using the client secret after confirmation.

It contains a customer session token to retrieve order information
right after the checkout.

## Example Usage

```typescript
import { CheckoutPublicConfirmed } from "@polar-sh/sdk/models/components/checkoutpublicconfirmed.js";

let value: CheckoutPublicConfirmed = {
  createdAt: new Date("2025-04-21T01:22:42.197Z"),
  modifiedAt: new Date("2025-06-08T02:20:37.651Z"),
  id: "<value>",
  paymentProcessor: "stripe",
  clientSecret: "<value>",
  url: "https://burly-swing.info",
  expiresAt: new Date("2023-08-29T18:03:19.269Z"),
  successUrl: "https://grubby-produce.net",
  embedOrigin: "<value>",
  amount: 850108,
  taxAmount: 993559,
  currency: "Dobra",
  subtotalAmount: 141549,
  totalAmount: 762643,
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
    country: "Mauritius",
  },
  customerTaxId: "<id>",
  paymentProcessorMetadata: {
    "key": "<value>",
  },
  products: [
    {
      createdAt: new Date("2024-09-09T05:55:09.703Z"),
      modifiedAt: new Date("2024-01-05T14:54:34.065Z"),
      id: "<value>",
      name: "<value>",
      description: "anti help capsize save",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-01-08T22:03:29.095Z"),
          modifiedAt: new Date("2023-02-13T11:54:50.627Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-03-30T13:47:48.742Z"),
          modifiedAt: new Date("2023-09-07T20:58:48.974Z"),
          id: "<value>",
          type: "github_repository",
          description: "quarrelsomely mesh cuckoo when competent huzzah",
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
          path: "/home",
          mimeType: "<value>",
          size: 985677,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-03-28T23:38:36.152Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-03-09T23:31:28.664Z"),
          sizeReadable: "<value>",
          publicUrl: "https://beneficial-comestible.net",
        },
      ],
    },
  ],
  product: {
    createdAt: new Date("2023-12-17T08:06:24.932Z"),
    modifiedAt: new Date("2025-02-08T00:56:46.614Z"),
    id: "<value>",
    name: "<value>",
    description: "absent superior blindly",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-01-22T16:32:28.279Z"),
        modifiedAt: new Date("2024-04-14T12:39:51.701Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 7866,
        maximumAmount: 533036,
        presetAmount: 43716,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2025-02-22T10:53:17.564Z"),
        modifiedAt: new Date("2025-11-10T12:13:29.060Z"),
        id: "<value>",
        type: "custom",
        description: "definite whether into",
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
        path: "/mnt",
        mimeType: "<value>",
        size: 445413,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-04-28T14:16:56.411Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-01-02T07:06:59.391Z"),
        sizeReadable: "<value>",
        publicUrl: "https://multicolored-council.org/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2023-09-30T01:25:20.761Z"),
    modifiedAt: new Date("2023-03-27T15:01:03.976Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    type: "one_time",
    recurringInterval: "year",
    priceCurrency: "<value>",
    priceAmount: 66755,
  },
  discount: {
    duration: "once",
    type: "percentage",
    amount: 974684,
    currency: "Baht",
    id: "<value>",
    name: "<value>",
    code: "<value>",
  },
  organization: {
    createdAt: new Date("2023-08-09T05:10:15.962Z"),
    modifiedAt: new Date("2025-02-17T05:29:31.441Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://mad-thongs.name",
    bio: "<value>",
    company: "Cummerata - Walker",
    blog: "<value>",
    location: "<value>",
    email: "Brisa_Fahey@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 128638,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 28163,
    profileSettings: {},
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
  },
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2024-12-02T14:44:34.345Z"),
        modifiedAt: new Date("2024-08-12T03:13:38.266Z"),
        id: "<value>",
        metadata: {
          "key": 299685,
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "<value>",
        properties: {},
      },
      order: 756029,
      required: false,
    },
  ],
  customerSessionToken: "<value>",
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Creation timestamp of the object.                                                                                                                                          |
| `modifiedAt`                                                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Last modification timestamp of the object.                                                                                                                                 |
| `id`                                                                                                                                                                       | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | The ID of the object.                                                                                                                                                      |
| `customFieldData`                                                                                                                                                          | Record<string, *components.CheckoutPublicConfirmedCustomFieldData*>                                                                                                        | :heavy_minus_sign:                                                                                                                                                         | Key-value object storing custom field values.                                                                                                                              |
| `paymentProcessor`                                                                                                                                                         | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `status`                                                                                                                                                                   | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `clientSecret`                                                                                                                                                             | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Client secret used to update and complete the checkout session from the client.                                                                                            |
| `url`                                                                                                                                                                      | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | URL where the customer can access the checkout session.                                                                                                                    |
| `expiresAt`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Expiration date and time of the checkout session.                                                                                                                          |
| `successUrl`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | URL where the customer will be redirected after a successful payment.                                                                                                      |
| `embedOrigin`                                                                                                                                                              | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | When checkout is embedded, represents the Origin of the page embedding the checkout. Used as a security measure to send messages only to the embedding page.               |
| `amount`                                                                                                                                                                   | *number*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `taxAmount`                                                                                                                                                                | *number*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Computed tax amount to pay in cents.                                                                                                                                       |
| `currency`                                                                                                                                                                 | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Currency code of the checkout session.                                                                                                                                     |
| `subtotalAmount`                                                                                                                                                           | *number*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Subtotal amount in cents, including discounts and before tax.                                                                                                              |
| `totalAmount`                                                                                                                                                              | *number*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Total amount to pay in cents, including discounts and after tax.                                                                                                           |
| `productId`                                                                                                                                                                | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the product to checkout.                                                                                                                                             |
| `productPriceId`                                                                                                                                                           | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the product price to checkout.                                                                                                                                       |
| `discountId`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the discount applied to the checkout.                                                                                                                                |
| `allowDiscountCodes`                                                                                                                                                       | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it. |
| `isDiscountApplicable`                                                                                                                                                     | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether the discount is applicable to the checkout. Typically, free and custom prices are not discountable.                                                                |
| `isFreeProductPrice`                                                                                                                                                       | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether the product price is free, regardless of discounts.                                                                                                                |
| `isPaymentRequired`                                                                                                                                                        | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether the checkout requires payment, e.g. in case of free products or discounts that cover the total amount.                                                             |
| `isPaymentSetupRequired`                                                                                                                                                   | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether the checkout requires setting up a payment method, regardless of the amount, e.g. subscriptions that have first free cycles.                                       |
| `isPaymentFormRequired`                                                                                                                                                    | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether the checkout requires a payment form, whether because of a payment or payment method setup.                                                                        |
| `customerId`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `customerName`                                                                                                                                                             | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Name of the customer.                                                                                                                                                      |
| `customerEmail`                                                                                                                                                            | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Email address of the customer.                                                                                                                                             |
| `customerIpAddress`                                                                                                                                                        | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `customerBillingAddress`                                                                                                                                                   | [components.Address](../../models/components/address.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `customerTaxId`                                                                                                                                                            | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `paymentProcessorMetadata`                                                                                                                                                 | Record<string, *string*>                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `products`                                                                                                                                                                 | [components.CheckoutProduct](../../models/components/checkoutproduct.md)[]                                                                                                 | :heavy_check_mark:                                                                                                                                                         | List of products available to select.                                                                                                                                      |
| `product`                                                                                                                                                                  | [components.CheckoutProduct](../../models/components/checkoutproduct.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Product data for a checkout session.                                                                                                                                       |
| `productPrice`                                                                                                                                                             | *components.CheckoutPublicConfirmedProductPrice*                                                                                                                           | :heavy_check_mark:                                                                                                                                                         | Price of the selected product.                                                                                                                                             |
| `discount`                                                                                                                                                                 | *components.CheckoutPublicConfirmedDiscount*                                                                                                                               | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `organization`                                                                                                                                                             | [components.Organization](../../models/components/organization.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `attachedCustomFields`                                                                                                                                                     | [components.AttachedCustomField](../../models/components/attachedcustomfield.md)[]                                                                                         | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `customerSessionToken`                                                                                                                                                     | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |