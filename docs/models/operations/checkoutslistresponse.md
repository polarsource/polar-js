# CheckoutsListResponse

## Example Usage

```typescript
import { CheckoutsListResponse } from "@polar-sh/sdk/models/operations/checkoutslist.js";

let value: CheckoutsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-06-06T13:42:10.812Z"),
        modifiedAt: new Date("2023-11-17T11:14:47.693Z"),
        id: "<value>",
        paymentProcessor: "stripe",
        status: "failed",
        clientSecret: "<value>",
        url: "https://second-hand-adrenalin.com",
        expiresAt: new Date("2024-09-25T04:26:26.242Z"),
        successUrl: "https://coordinated-tentacle.org",
        embedOrigin: "<value>",
        amount: 792198,
        discountAmount: 648504,
        netAmount: 367326,
        taxAmount: 92645,
        totalAmount: 938959,
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
          country: "US",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {
          "key": "<value>",
        },
        subtotalAmount: 948029,
        metadata: {
          "key": 954903,
        },
        customerExternalId: "<id>",
        products: [
          {
            createdAt: new Date("2025-06-28T04:28:28.330Z"),
            modifiedAt: new Date("2023-11-15T21:57:50.882Z"),
            id: "<value>",
            name: "<value>",
            description: "officially anti why minus drat warlike uh-huh purse",
            recurringInterval: "month",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2024-07-01T02:17:09.628Z"),
                modifiedAt: new Date("2024-01-26T15:42:40.610Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                recurringInterval: "month",
                priceCurrency: "<value>",
                minimumAmount: 573342,
                maximumAmount: 76050,
                presetAmount: 262790,
              },
            ],
            benefits: [
              {
                createdAt: new Date("2023-09-10T02:20:42.324Z"),
                modifiedAt: new Date("2025-08-29T09:58:59.868Z"),
                id: "<value>",
                type: "downloadables",
                description: "peaceful boohoo against inwardly",
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
                size: 555297,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2025-02-08T04:51:02.525Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2024-05-06T07:42:37.823Z"),
                sizeReadable: "<value>",
                publicUrl: "https://short-courtroom.name/",
              },
            ],
          },
        ],
        product: {
          createdAt: new Date("2025-09-03T05:51:57.092Z"),
          modifiedAt: new Date("2024-03-24T09:25:58.925Z"),
          id: "<value>",
          name: "<value>",
          description: "frank but preheat",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-04-27T09:03:53.602Z"),
              modifiedAt: new Date("2025-06-30T12:04:58.293Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
              priceCurrency: "<value>",
              priceAmount: 403675,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-03-05T21:56:17.705Z"),
              modifiedAt: new Date("2024-04-07T16:46:53.179Z"),
              id: "<value>",
              type: "downloadables",
              description:
                "fatally convalesce ultimately fit unwieldy willfully",
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
              path: "/Applications",
              mimeType: "<value>",
              size: 153220,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-07-24T16:32:08.913Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-06-11T17:24:07.582Z"),
              sizeReadable: "<value>",
              publicUrl: "https://agitated-brief.com",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2024-12-25T08:25:58.170Z"),
          modifiedAt: new Date("2024-03-06T01:05:25.783Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          unitAmount: 372034,
          includedUnits: 674166,
          capAmount: 693648,
          meterId: "<value>",
          meter: {
            id: "<value>",
            name: "<value>",
          },
        },
        discount: {
          duration: "once",
          durationInMonths: 482581,
          type: "fixed",
          amount: 910594,
          currency: "Barbados Dollar",
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-01-26T04:20:35.290Z"),
              modifiedAt: new Date("2025-09-27T11:43:47.405Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 659927,
            required: false,
          },
        ],
        customerMetadata: {
          "key": "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 759250,
      maxPage: 28975,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |