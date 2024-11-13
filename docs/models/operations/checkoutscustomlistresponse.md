# CheckoutsCustomListResponse

## Example Usage

```typescript
import { CheckoutsCustomListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutsCustomListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-05-18T04:15:08.103Z"),
        modifiedAt: new Date("2024-11-22T18:34:24.377Z"),
        id: "<value>",
        status: "succeeded",
        clientSecret: "<value>",
        url: "https://next-haversack.com/",
        expiresAt: new Date("2022-06-27T15:10:04.073Z"),
        successUrl: "https://frugal-tuxedo.com",
        embedOrigin: "<value>",
        amount: 460803,
        taxAmount: 129619,
        currency: "UAE Dirham",
        totalAmount: 553766,
        productId: "<value>",
        productPriceId: "<value>",
        isPaymentRequired: false,
        customerId: "<value>",
        customerName: "<value>",
        customerEmail: "Mireya_Dare72@gmail.com",
        customerIpAddress: "<value>",
        customerBillingAddress: {
          country: "Pitcairn Islands",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {},
        metadata: {
          "key": false,
        },
        product: {
          createdAt: new Date("2023-01-11T01:55:17.102Z"),
          modifiedAt: new Date("2023-02-16T15:28:53.569Z"),
          id: "<value>",
          name: "<value>",
          description: "likewise live even dredger hourly",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-01-19T19:42:43.719Z"),
              modifiedAt: new Date("2022-10-21T17:10:27.496Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-06-19T03:34:00.039Z"),
              modifiedAt: new Date("2023-02-21T02:44:46.039Z"),
              id: "<value>",
              type: "github_repository",
              description:
                "within versus upon amid jubilantly dark machine entice ah excepting",
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
              size: 545629,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-12-04T07:07:12.134Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-01-16T16:27:33.018Z"),
              sizeReadable: "<value>",
              publicUrl: "https://wide-hawk.info",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2022-09-17T23:02:09.893Z"),
          modifiedAt: new Date("2022-07-21T02:54:05.406Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 754784,
          recurringInterval: "year",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-06-18T05:26:12.044Z"),
              modifiedAt: new Date("2022-09-10T22:16:39.905Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
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
            order: 708360,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 392759,
      maxPage: 29270,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |