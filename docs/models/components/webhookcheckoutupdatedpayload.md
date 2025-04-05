# WebhookCheckoutUpdatedPayload

Sent when a checkout is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutUpdatedPayload } from "@polar-sh/sdk/models/components/webhookcheckoutupdatedpayload.js";

let value: WebhookCheckoutUpdatedPayload = {
  data: {
    createdAt: new Date("2024-10-28T04:36:13.190Z"),
    modifiedAt: new Date("2024-11-28T22:37:10.254Z"),
    id: "<value>",
    paymentProcessor: "stripe",
    status: "expired",
    clientSecret: "<value>",
    url: "https://posh-community.info/",
    expiresAt: new Date("2025-11-15T13:36:19.686Z"),
    successUrl: "https://incomplete-skyscraper.net",
    embedOrigin: "<value>",
    amount: 695971,
    discountAmount: 338469,
    netAmount: 166510,
    taxAmount: 556902,
    totalAmount: 656558,
    currency: "Serbian Dinar",
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
      country: "SE",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {
      "key": "<value>",
    },
    subtotalAmount: 577515,
    metadata: {
      "key": "<value>",
    },
    customerExternalId: "<id>",
    products: [
      {
        createdAt: new Date("2024-08-19T23:36:13.978Z"),
        modifiedAt: new Date("2024-12-21T10:55:54.892Z"),
        id: "<value>",
        name: "<value>",
        description:
          "below however faint but talkative swim stunt tenant or plump",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-05-05T15:08:17.778Z"),
            modifiedAt: new Date("2025-08-09T12:34:03.537Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-09-26T20:54:23.897Z"),
            modifiedAt: new Date("2025-06-08T15:30:07.568Z"),
            id: "<value>",
            type: "discord",
            description:
              "aha obtrude scramble convection front baseboard ah outlaw reflate angrily",
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
            path: "/opt/sbin",
            mimeType: "<value>",
            size: 542127,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-10-09T04:51:58.960Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-09-01T19:35:25.198Z"),
            sizeReadable: "<value>",
            publicUrl: "https://fantastic-bog.info",
          },
        ],
      },
    ],
    product: {
      createdAt: new Date("2024-06-07T10:22:36.589Z"),
      modifiedAt: new Date("2023-06-15T04:46:10.315Z"),
      id: "<value>",
      name: "<value>",
      description: "outside definitive aha shallow shell blah after yum anti",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-01-29T01:43:38.112Z"),
          modifiedAt: new Date("2025-11-11T20:38:28.438Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 677515,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-12-18T18:57:38.159Z"),
          modifiedAt: new Date("2025-02-14T06:16:41.220Z"),
          id: "<value>",
          type: "downloadables",
          description: "freely than brr contractor meaningfully preregister",
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
          path: "/dev",
          mimeType: "<value>",
          size: 862949,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-06-15T07:38:48.356Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-02-01T18:42:55.805Z"),
          sizeReadable: "<value>",
          publicUrl: "https://rectangular-zen.name",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2025-12-30T08:11:26.825Z"),
      modifiedAt: new Date("2024-04-05T15:48:42.330Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 890860,
    },
    discount: {
      duration: "repeating",
      durationInMonths: 525927,
      type: "fixed",
      amount: 430589,
      currency: "Convertible Marks",
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-08-02T00:31:31.876Z"),
          modifiedAt: new Date("2023-07-28T08:41:18.051Z"),
          id: "<value>",
          metadata: {
            "key": 53139,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 710506,
        required: false,
      },
    ],
    customerMetadata: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | checkout.updated                                           |
| `data`                                                     | [components.Checkout](../../models/components/checkout.md) | :heavy_check_mark:                                         | Checkout session data retrieved using an access token.     |                                                            |