# WebhookCheckoutUpdatedPayload

Sent when a checkout is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutUpdatedPayload } from "@polar-sh/sdk/models/components/webhookcheckoutupdatedpayload.js";

let value: WebhookCheckoutUpdatedPayload = {
  data: {
    createdAt: new Date("2025-08-24T23:35:22.943Z"),
    modifiedAt: new Date("2025-03-14T16:26:14.601Z"),
    id: "<value>",
    paymentProcessor: "stripe",
    status: "confirmed",
    clientSecret: "<value>",
    url: "https://milky-tackle.net/",
    expiresAt: new Date("2023-01-06T15:32:36.859Z"),
    successUrl: "https://usable-programme.biz",
    embedOrigin: "<value>",
    amount: 483518,
    discountAmount: 140316,
    netAmount: 358995,
    taxAmount: 937117,
    totalAmount: 923306,
    currency: "Falkland Islands Pound",
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
    subtotalAmount: 600213,
    metadata: {
      "key": false,
    },
    customerExternalId: "<id>",
    products: [
      {
        createdAt: new Date("2023-06-11T23:45:58.648Z"),
        modifiedAt: new Date("2023-10-09T13:56:07.424Z"),
        id: "<value>",
        name: "<value>",
        description:
          "lively perfectly starch state belabor zowie incidentally nifty and",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-06-17T17:52:12.552Z"),
            modifiedAt: new Date("2023-11-23T19:31:13.111Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            priceAmount: 330267,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-06-11T00:18:11.711Z"),
            modifiedAt: new Date("2023-06-03T20:39:34.653Z"),
            id: "<value>",
            type: "discord",
            description: "submissive meh nor",
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
            size: 316501,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-06-12T21:53:45.218Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-03-10T21:23:10.050Z"),
            sizeReadable: "<value>",
            publicUrl: "https://uncomfortable-reboot.biz/",
          },
        ],
      },
    ],
    product: {
      createdAt: new Date("2025-10-26T07:41:18.790Z"),
      modifiedAt: new Date("2024-07-08T22:02:12.267Z"),
      id: "<value>",
      name: "<value>",
      description:
        "strange earnest boo legitimize well meh unibody majestically ew airmail",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-06-04T22:56:35.057Z"),
          modifiedAt: new Date("2025-11-28T05:59:28.499Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
          priceCurrency: "<value>",
          unitAmount: 483753,
          capAmount: 256114,
          meterId: "<value>",
          meter: {
            id: "<value>",
            name: "<value>",
          },
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-06-21T19:04:10.722Z"),
          modifiedAt: new Date("2023-09-13T02:51:08.528Z"),
          id: "<value>",
          type: "discord",
          description:
            "lashes warmly that ocelot ouch marketplace minty coin neglect",
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
          path: "/usr/sbin",
          mimeType: "<value>",
          size: 962396,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-05-02T03:10:42.322Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-11-22T09:23:59.598Z"),
          sizeReadable: "<value>",
          publicUrl: "https://wretched-newsprint.com",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2023-08-07T00:09:49.489Z"),
      modifiedAt: new Date("2025-11-13T21:51:48.921Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 280859,
    },
    discount: {
      duration: "repeating",
      durationInMonths: 329651,
      type: "percentage",
      basisPoints: 108165,
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-08-31T10:55:17.874Z"),
          modifiedAt: new Date("2025-01-19T08:44:25.689Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 397026,
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