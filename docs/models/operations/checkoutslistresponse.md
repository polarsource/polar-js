# CheckoutsListResponse

## Example Usage

```typescript
import { CheckoutsListResponse } from "@polar-sh/sdk/models/operations/checkoutslist.js";

let value: CheckoutsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-09-14T07:08:11.699Z"),
        modifiedAt: new Date("2024-03-20T05:37:30.541Z"),
        id: "<value>",
        paymentProcessor: "stripe",
        status: "open",
        clientSecret: "<value>",
        url: "https://all-density.com",
        expiresAt: new Date("2024-07-01T02:17:09.628Z"),
        successUrl: "https://intent-millet.com/",
        embedOrigin: "<value>",
        amount: 262790,
        taxAmount: 230016,
        currency: "Uganda Shilling",
        subtotalAmount: 741240,
        totalAmount: 185893,
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
          "key": 812458,
        },
        customerExternalId: "<id>",
        products: [
          {
            createdAt: new Date("2025-03-12T19:36:07.618Z"),
            modifiedAt: new Date("2024-02-01T09:09:01.633Z"),
            id: "<value>",
            name: "<value>",
            description: "however apud busily mmm however defiantly enormously",
            recurringInterval: "month",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2025-04-10T18:39:22.504Z"),
                modifiedAt: new Date("2024-11-18T08:57:46.055Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                recurringInterval: "year",
              },
            ],
            benefits: [
              {
                createdAt: new Date("2023-03-12T17:46:32.273Z"),
                modifiedAt: new Date("2024-05-14T06:49:56.913Z"),
                id: "<value>",
                type: "custom",
                description:
                  "throughout innocently er wilt punctually sudden affectionate among honored",
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
                path: "/usr",
                mimeType: "<value>",
                size: 693648,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2024-02-21T07:03:01.898Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2023-02-09T00:12:03.007Z"),
                sizeReadable: "<value>",
                publicUrl: "https://icy-thread.com/",
              },
            ],
          },
        ],
        product: {
          createdAt: new Date("2025-12-15T17:53:37.407Z"),
          modifiedAt: new Date("2025-01-26T04:20:35.290Z"),
          id: "<value>",
          name: "<value>",
          description:
            "etch though mammoth spectate thunderbolt scram while ah gosh ha",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-10-24T06:06:50.596Z"),
              modifiedAt: new Date("2023-06-27T18:37:31.683Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
              priceCurrency: "<value>",
              priceAmount: 946912,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-11-12T22:46:32.535Z"),
              modifiedAt: new Date("2025-04-14T18:10:17.419Z"),
              id: "<value>",
              type: "github_repository",
              description: "once at ugh because ouch huzzah as athwart",
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
              path: "/usr/libdata",
              mimeType: "<value>",
              size: 927298,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-01-08T05:45:15.386Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-04-07T21:35:58.266Z"),
              sizeReadable: "<value>",
              publicUrl: "https://present-integer.name",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2025-07-11T16:21:17.806Z"),
          modifiedAt: new Date("2024-01-27T07:23:10.742Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
        },
        discount: {
          duration: "repeating",
          type: "fixed",
          amount: 613998,
          currency: "Rufiyaa",
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2023-05-30T06:49:04.651Z"),
              modifiedAt: new Date("2024-10-08T22:16:04.141Z"),
              id: "<value>",
              metadata: {
                "key": 30374,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 516044,
            required: false,
          },
        ],
        customerMetadata: {
          "key": "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 291064,
      maxPage: 245215,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |