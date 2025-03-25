# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components/listresourcecheckout.js";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2024-02-19T03:41:15.084Z"),
      modifiedAt: new Date("2024-12-02T01:24:28.573Z"),
      id: "<value>",
      paymentProcessor: "stripe",
      status: "succeeded",
      clientSecret: "<value>",
      url: "https://icy-warming.com/",
      expiresAt: new Date("2024-05-17T23:11:42.440Z"),
      successUrl: "https://superb-elevator.net/",
      embedOrigin: "<value>",
      amount: 2200,
      taxAmount: 490750,
      currency: "Guinea Franc",
      subtotalAmount: 808156,
      totalAmount: 402947,
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
      metadata: {
        "key": false,
      },
      customerExternalId: "<id>",
      products: [
        {
          createdAt: new Date("2023-01-15T11:49:02.871Z"),
          modifiedAt: new Date("2024-01-02T12:29:33.565Z"),
          id: "<value>",
          name: "<value>",
          description: "before cleverly ha psst under fooey",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-04-27T21:37:38.772Z"),
              modifiedAt: new Date("2025-11-26T11:27:09.590Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-04-02T19:22:24.658Z"),
              modifiedAt: new Date("2025-02-26T12:25:03.923Z"),
              id: "<value>",
              type: "custom",
              description:
                "barracks searchingly well-made apricot yum phooey following magnetize fantastic roasted",
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
              path: "/opt/share",
              mimeType: "<value>",
              size: 396806,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-11-19T02:39:06.531Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-03-18T18:15:52.333Z"),
              sizeReadable: "<value>",
              publicUrl: "https://tasty-version.com",
            },
          ],
        },
      ],
      product: {
        createdAt: new Date("2025-12-20T11:06:36.165Z"),
        modifiedAt: new Date("2023-08-08T12:44:17.507Z"),
        id: "<value>",
        name: "<value>",
        description: "pink behest yet",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-12-04T22:01:21.527Z"),
            modifiedAt: new Date("2023-08-06T21:19:05.670Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
            priceCurrency: "<value>",
            minimumAmount: 165860,
            maximumAmount: 672706,
            presetAmount: 531236,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-11-28T11:56:44.649Z"),
            modifiedAt: new Date("2023-05-27T15:49:28.029Z"),
            id: "<value>",
            type: "github_repository",
            description: "untried amid if drat times",
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
            size: 203992,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-10-08T04:45:48.967Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-09-28T12:48:41.806Z"),
            sizeReadable: "<value>",
            publicUrl: "https://damaged-information.name",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2023-01-07T21:31:00.035Z"),
        modifiedAt: new Date("2023-11-05T01:06:59.977Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "year",
        unitAmount: 104080,
        includedUnits: 175216,
        capAmount: 752959,
        meterId: "<value>",
        meter: {
          id: "<value>",
          name: "<value>",
        },
      },
      discount: {
        duration: "forever",
        type: "percentage",
        basisPoints: 583827,
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-07-27T11:34:32.606Z"),
            modifiedAt: new Date("2023-05-23T21:49:23.366Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 655131,
          required: false,
        },
      ],
      customerMetadata: {
        "key": "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 850,
    maxPage: 887073,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |