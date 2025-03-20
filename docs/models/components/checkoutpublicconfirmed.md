# CheckoutPublicConfirmed

Checkout session data retrieved using the client secret after confirmation.

It contains a customer session token to retrieve order information
right after the checkout.

## Example Usage

```typescript
import { CheckoutPublicConfirmed } from "@polar-sh/sdk/models/components/checkoutpublicconfirmed.js";

let value: CheckoutPublicConfirmed = {
  createdAt: new Date("2025-10-07T11:35:19.244Z"),
  modifiedAt: new Date("2023-03-29T21:43:02.894Z"),
  id: "<value>",
  paymentProcessor: "stripe",
  clientSecret: "<value>",
  url: "https://quarrelsome-declaration.net/",
  expiresAt: new Date("2024-03-31T22:38:03.818Z"),
  successUrl: "https://comfortable-alert.net/",
  embedOrigin: "<value>",
  amount: 73989,
  taxAmount: 640159,
  currency: "Malagasy Ariary",
  subtotalAmount: 518491,
  totalAmount: 299685,
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
  products: [
    {
      createdAt: new Date("2024-03-15T01:44:19.880Z"),
      modifiedAt: new Date("2023-06-15T18:36:00.924Z"),
      id: "<value>",
      name: "<value>",
      description: "loyalty oh outside",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2025-03-31T05:59:38.284Z"),
          modifiedAt: new Date("2025-10-22T22:24:04.640Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 945008,
          maximumAmount: 359242,
          presetAmount: 727645,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-10-23T17:28:25.330Z"),
          modifiedAt: new Date("2023-01-18T18:59:13.114Z"),
          id: "<value>",
          type: "license_keys",
          description:
            "husband tenderly up across knowingly traditionalism ghost round stock brightly",
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
          path: "/bin",
          mimeType: "<value>",
          size: 450561,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-05-18T15:37:41.330Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-02-28T06:12:59.898Z"),
          sizeReadable: "<value>",
          publicUrl: "https://dismal-challenge.com/",
        },
      ],
    },
  ],
  product: {
    createdAt: new Date("2024-11-09T13:41:21.375Z"),
    modifiedAt: new Date("2023-04-19T10:40:28.754Z"),
    id: "<value>",
    name: "<value>",
    description: "ew commemorate commonly absentmindedly",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-11-30T17:03:39.942Z"),
        modifiedAt: new Date("2023-01-03T02:30:15.871Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-09-05T04:07:53.610Z"),
        modifiedAt: new Date("2025-05-03T15:00:56.296Z"),
        id: "<value>",
        type: "discord",
        description: "worriedly nor a inasmuch oh request merry",
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
        path: "/etc/periodic",
        mimeType: "<value>",
        size: 725310,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-12-17T08:26:41.063Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-03-01T11:36:06.648Z"),
        sizeReadable: "<value>",
        publicUrl: "https://responsible-birth.name",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2024-03-08T12:56:03.909Z"),
    modifiedAt: new Date("2025-06-10T01:07:28.448Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "year",
    priceCurrency: "<value>",
    priceAmount: 999709,
  },
  discount: {
    duration: "once",
    durationInMonths: 185318,
    type: "percentage",
    amount: 334544,
    currency: "Uzbekistan Sum",
    id: "<value>",
    name: "<value>",
    code: "<value>",
  },
  organization: {
    createdAt: new Date("2023-03-28T23:23:12.546Z"),
    modifiedAt: new Date("2025-04-18T05:44:29.115Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://private-morning.name/",
    email: "Karlie80@hotmail.com",
    website: "<value>",
    socials: [
      {
        platform: "other",
        url: "https://grounded-tenant.com/",
      },
    ],
    detailsSubmittedAt: new Date("2024-06-21T04:46:16.477Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "invoice",
    },
    bio: "<value>",
    company: "McKenzie - Hyatt",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 423692,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 508131,
    profileSettings: {},
  },
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2024-07-01T06:21:44.983Z"),
        modifiedAt: new Date("2024-01-10T13:58:51.311Z"),
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
      order: 464473,
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