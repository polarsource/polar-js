# WebhookCheckoutCreatedPayload

Sent when a new checkout is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutCreatedPayload } from "@polar-sh/sdk/models/components/webhookcheckoutcreatedpayload.js";

let value: WebhookCheckoutCreatedPayload = {
  data: {
    createdAt: new Date("2024-08-20T04:36:26.084Z"),
    modifiedAt: new Date("2024-04-09T07:48:57.030Z"),
    id: "<value>",
    paymentProcessor: "stripe",
    status: "succeeded",
    clientSecret: "<value>",
    url: "https://unique-veto.info/",
    expiresAt: new Date("2025-05-17T17:32:07.447Z"),
    successUrl: "https://oddball-translation.com",
    embedOrigin: "<value>",
    amount: 87129,
    taxAmount: 20218,
    currency: "Manat",
    subtotalAmount: 778157,
    totalAmount: 870013,
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
      country: "Virgin Islands, U.S.",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {
      "key": "<value>",
    },
    metadata: {
      "key": false,
    },
    products: [
      {
        createdAt: new Date("2024-05-20T18:45:11.321Z"),
        modifiedAt: new Date("2025-05-05T11:02:22.031Z"),
        id: "<value>",
        name: "<value>",
        description: "phew typewriter gadzooks",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-02-03T15:02:53.228Z"),
            modifiedAt: new Date("2024-09-16T22:27:21.057Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            minimumAmount: 988374,
            maximumAmount: 102044,
            presetAmount: 208876,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-06-26T19:05:08.010Z"),
            modifiedAt: new Date("2024-12-16T19:21:41.015Z"),
            id: "<value>",
            type: "ads",
            description: "gestate worriedly whoa aw plus outside",
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
            path: "/lost+found",
            mimeType: "<value>",
            size: 735194,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-11-20T13:24:26.967Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-09-30T15:12:09.673Z"),
            sizeReadable: "<value>",
            publicUrl: "https://pale-milestone.biz",
          },
        ],
      },
    ],
    product: {
      createdAt: new Date("2025-11-10T05:06:35.997Z"),
      modifiedAt: new Date("2024-05-05T01:11:09.453Z"),
      id: "<value>",
      name: "<value>",
      description:
        "unconscious notwithstanding but intrepid calculating queasily ha intensely settle",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2025-02-11T00:54:59.142Z"),
          modifiedAt: new Date("2023-02-04T21:29:28.328Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-11-12T03:22:04.343Z"),
          modifiedAt: new Date("2024-09-24T15:25:14.861Z"),
          id: "<value>",
          type: "ads",
          description:
            "evenly backburn bathhouse reluctantly till unless although towards contractor unsteady",
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
          path: "/etc",
          mimeType: "<value>",
          size: 552193,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-10-02T14:03:30.664Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-11-20T06:46:28.205Z"),
          sizeReadable: "<value>",
          publicUrl: "https://exalted-breastplate.com/",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2025-05-10T12:39:43.913Z"),
      modifiedAt: new Date("2023-11-05T18:37:43.326Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "month",
    },
    discount: {
      duration: "repeating",
      durationInMonths: 876506,
      type: "fixed",
      amount: 961571,
      currency: "Danish Krone",
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2025-10-28T17:59:56.921Z"),
          modifiedAt: new Date("2025-05-25T22:13:29.488Z"),
          id: "<value>",
          metadata: {
            "key": 874288,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 293020,
        required: false,
      },
    ],
    customerMetadata: {
      "key": false,
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `data`                                                     | [components.Checkout](../../models/components/checkout.md) | :heavy_check_mark:                                         | Checkout session data retrieved using an access token.     |