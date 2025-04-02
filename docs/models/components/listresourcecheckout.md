# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components/listresourcecheckout.js";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2025-09-19T16:31:50.914Z"),
      modifiedAt: new Date("2024-05-16T17:53:58.910Z"),
      id: "<value>",
      paymentProcessor: "stripe",
      status: "confirmed",
      clientSecret: "<value>",
      url: "https://lost-lift.biz",
      expiresAt: new Date("2023-12-29T03:26:01.526Z"),
      successUrl: "https://astonishing-monasticism.org/",
      embedOrigin: "<value>",
      amount: 770313,
      discountAmount: 246585,
      netAmount: 586310,
      taxAmount: 490431,
      totalAmount: 816554,
      currency: "Gourde",
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
        country: "US",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {
        "key": "<value>",
      },
      subtotalAmount: 887276,
      metadata: {
        "key": false,
      },
      customerExternalId: "<id>",
      products: [
        {
          createdAt: new Date("2023-07-19T07:36:17.782Z"),
          modifiedAt: new Date("2023-08-14T10:50:31.804Z"),
          id: "<value>",
          name: "<value>",
          description: "strategy neaten modulo gad yet drat",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-05-05T09:56:39.116Z"),
              modifiedAt: new Date("2024-03-07T01:04:20.692Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-12-23T15:51:09.728Z"),
              modifiedAt: new Date("2024-05-25T06:35:27.544Z"),
              id: "<value>",
              type: "discord",
              description: "arrogantly fail upon private whoa",
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
              path: "/sys",
              mimeType: "<value>",
              size: 782608,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-04-08T00:32:24.908Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-09-30T13:32:34.699Z"),
              sizeReadable: "<value>",
              publicUrl: "https://lucky-pantyhose.name/",
            },
          ],
        },
      ],
      product: {
        createdAt: new Date("2025-09-01T21:15:30.000Z"),
        modifiedAt: new Date("2025-01-19T16:48:57.666Z"),
        id: "<value>",
        name: "<value>",
        description:
          "scary jubilantly courteous excluding before bashfully able whenever since",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-07-20T17:13:35.220Z"),
            modifiedAt: new Date("2025-12-24T22:33:51.471Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-04-15T20:33:21.883Z"),
            modifiedAt: new Date("2024-09-13T07:43:31.648Z"),
            id: "<value>",
            type: "downloadables",
            description: "presume gee from translation onset",
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
            path: "/var/mail",
            mimeType: "<value>",
            size: 747788,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-09-07T20:58:48.974Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-09-01T04:02:03.009Z"),
            sizeReadable: "<value>",
            publicUrl: "https://negative-quart.info/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2024-01-22T03:23:41.299Z"),
        modifiedAt: new Date("2024-11-02T02:49:44.228Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
      },
      discount: {
        duration: "forever",
        type: "fixed",
        amount: 979335,
        currency: "Liberian Dollar",
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-05-02T07:50:24.071Z"),
            modifiedAt: new Date("2024-01-10T11:57:03.157Z"),
            id: "<value>",
            metadata: {
              "key": 972889,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 94400,
          required: false,
        },
      ],
      customerMetadata: {
        "key": "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 276943,
    maxPage: 766004,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |