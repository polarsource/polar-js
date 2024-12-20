# CheckoutsCustomListResponse

## Example Usage

```typescript
import { CheckoutsCustomListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutsCustomListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-06-11T09:05:14.093Z"),
        modifiedAt: new Date("2023-05-27T23:48:56.996Z"),
        id: "<value>",
        status: "open",
        clientSecret: "<value>",
        url: "https://hollow-blowgun.info/",
        expiresAt: new Date("2024-11-17T07:20:20.409Z"),
        successUrl: "https://willing-midwife.com",
        embedOrigin: "<value>",
        amount: 226988,
        taxAmount: 186365,
        currency: "Colombian Peso",
        subtotalAmount: 888343,
        totalAmount: 204017,
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
        customerEmail: "Augusta_White43@yahoo.com",
        customerIpAddress: "<value>",
        customerBillingAddress: {
          country: "Wallis and Futuna",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {},
        metadata: {
          "key": 544554,
        },
        product: {
          createdAt: new Date("2022-03-24T15:56:51.260Z"),
          modifiedAt: new Date("2022-11-03T09:06:30.437Z"),
          id: "<value>",
          name: "<value>",
          description: "mmm unless respray connect whenever",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2022-02-05T01:40:30.252Z"),
              modifiedAt: new Date("2022-01-25T04:32:31.394Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-11-24T08:52:06.134Z"),
              modifiedAt: new Date("2022-05-21T01:42:30.363Z"),
              id: "<value>",
              type: "github_repository",
              description: "broken since nab",
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
              path: "/lib",
              mimeType: "<value>",
              size: 498711,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-10-11T05:12:55.893Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2022-08-10T01:37:49.523Z"),
              sizeReadable: "<value>",
              publicUrl: "https://winged-invite.org",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2022-01-04T03:36:40.213Z"),
          modifiedAt: new Date("2022-10-25T00:03:32.852Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 916633,
          maximumAmount: 415447,
          presetAmount: 463038,
          recurringInterval: "month",
        },
        discount: {
          duration: "forever",
          type: "percentage",
          basisPoints: 63427,
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2023-08-09T14:47:20.206Z"),
              modifiedAt: new Date("2024-12-03T00:44:17.794Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {
                options: [
                  {
                    value: "<value>",
                    label: "<value>",
                  },
                ],
              },
            },
            order: 345445,
            required: false,
          },
        ],
        customerMetadata: {
          "key": 660278,
        },
      },
    ],
    pagination: {
      totalCount: 458447,
      maxPage: 554611,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |