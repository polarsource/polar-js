# CheckoutsCustomListResponse

## Example Usage

```typescript
import { CheckoutsCustomListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutsCustomListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-07-16T06:45:03.338Z"),
        modifiedAt: new Date("2022-11-21T05:47:05.975Z"),
        id: "<value>",
        status: "succeeded",
        clientSecret: "<value>",
        url: "https://shadowy-season.net/",
        expiresAt: new Date("2023-08-28T04:32:02.162Z"),
        successUrl: "https://polished-conversation.biz/",
        embedOrigin: "<value>",
        amount: 818705,
        taxAmount: 817278,
        currency: "Iceland Krona",
        subtotalAmount: 467406,
        totalAmount: 429753,
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
        customerEmail: "Dannie_Sipes97@yahoo.com",
        customerIpAddress: "<value>",
        customerBillingAddress: {
          country: "Turks and Caicos Islands",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {},
        metadata: {
          "key": false,
        },
        product: {
          createdAt: new Date("2023-08-02T05:19:33.987Z"),
          modifiedAt: new Date("2023-12-17T23:08:04.134Z"),
          id: "<value>",
          name: "<value>",
          description:
            "within giant correctly hm concrete er regulate spellcheck oof",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-11-29T11:57:24.137Z"),
              modifiedAt: new Date("2023-01-01T21:33:09.750Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              minimumAmount: 243014,
              maximumAmount: 796397,
              presetAmount: 171014,
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-12-31T18:35:11.034Z"),
              modifiedAt: new Date("2024-07-07T05:32:26.628Z"),
              id: "<value>",
              type: "discord",
              description:
                "heighten wear catch untried painfully knit baggy across",
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
              path: "/proc",
              mimeType: "<value>",
              size: 269806,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2022-04-21T18:58:19.815Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-08-17T02:13:31.093Z"),
              sizeReadable: "<value>",
              publicUrl: "https://dutiful-icebreaker.info/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2022-12-20T01:23:54.511Z"),
          modifiedAt: new Date("2024-09-25T04:15:37.769Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 171465,
        },
        discount: {
          duration: "forever",
          type: "fixed",
          basisPoints: 796914,
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2023-04-09T00:17:00.771Z"),
              modifiedAt: new Date("2023-10-18T17:39:42.400Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 785739,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 505052,
      maxPage: 284190,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |