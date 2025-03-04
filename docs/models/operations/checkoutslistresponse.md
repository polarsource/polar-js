# CheckoutsListResponse

## Example Usage

```typescript
import { CheckoutsListResponse } from "@polar-sh/sdk/models/operations/checkoutslist.js";

let value: CheckoutsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-07-20T11:05:10.084Z"),
        modifiedAt: new Date("2025-11-05T00:56:31.848Z"),
        id: "<value>",
        paymentProcessor: "stripe",
        status: "confirmed",
        clientSecret: "<value>",
        url: "https://svelte-elevator.name",
        expiresAt: new Date("2024-10-28T02:42:52.450Z"),
        successUrl: "https://near-linseed.com/",
        embedOrigin: "<value>",
        amount: 179562,
        taxAmount: 545567,
        currency: "Argentine Peso",
        subtotalAmount: 810137,
        totalAmount: 392352,
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
          country: "Bangladesh",
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
            createdAt: new Date("2023-03-17T04:18:02.494Z"),
            modifiedAt: new Date("2023-07-04T17:00:41.448Z"),
            id: "<value>",
            name: "<value>",
            description:
              "hyena shoot powerfully hateful seagull analyse after meh bustling",
            recurringInterval: "year",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2023-11-10T14:28:39.278Z"),
                modifiedAt: new Date("2023-07-11T00:09:49.963Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                recurringInterval: "month",
                priceCurrency: "<value>",
                minimumAmount: 261556,
                maximumAmount: 444747,
                presetAmount: 713023,
              },
            ],
            benefits: [
              {
                createdAt: new Date("2025-11-10T08:18:12.202Z"),
                modifiedAt: new Date("2023-07-26T04:26:55.218Z"),
                id: "<value>",
                type: "custom",
                description: "yum really but before hoick cheerfully",
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
                path: "/usr/obj",
                mimeType: "<value>",
                size: 292560,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2024-03-18T10:16:47.345Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2023-03-05T21:56:17.705Z"),
                sizeReadable: "<value>",
                publicUrl: "https://prudent-kinase.net/",
              },
            ],
          },
        ],
        product: {
          createdAt: new Date("2024-03-11T16:47:20.165Z"),
          modifiedAt: new Date("2025-11-06T10:04:52.081Z"),
          id: "<value>",
          name: "<value>",
          description:
            "oh sunbathe after beyond next curiously gadzooks hungry pace",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-07-29T22:16:58.750Z"),
              modifiedAt: new Date("2025-04-12T03:18:11.966Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
              priceCurrency: "<value>",
              priceAmount: 420137,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-11-27T07:31:32.844Z"),
              modifiedAt: new Date("2025-04-27T19:00:30.853Z"),
              id: "<value>",
              type: "license_keys",
              description: "toady stormy likewise",
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
              size: 613900,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-06-04T14:53:03.016Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-09-25T17:16:21.427Z"),
              sizeReadable: "<value>",
              publicUrl: "https://cloudy-tomb.org",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2025-04-27T18:32:37.308Z"),
          modifiedAt: new Date("2025-01-25T18:09:12.422Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
        },
        discount: {
          duration: "once",
          durationInMonths: 768934,
          type: "percentage",
          amount: 694377,
          currency: "New Taiwan Dollar",
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-05-13T17:28:46.646Z"),
              modifiedAt: new Date("2025-02-25T23:20:21.317Z"),
              id: "<value>",
              metadata: {
                "key": 283966,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 962138,
            required: false,
          },
        ],
        customerMetadata: {
          "key": 858932,
        },
      },
    ],
    pagination: {
      totalCount: 602743,
      maxPage: 347525,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |