# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations/checkoutlinkslist.js";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-02-18T03:19:55.698Z"),
        modifiedAt: new Date("2023-11-08T05:26:11.411Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        paymentProcessor: "stripe",
        clientSecret: "<value>",
        successUrl: "https://tiny-newsletter.info/",
        label: "<value>",
        allowDiscountCodes: false,
        discountId: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        products: [
          {
            createdAt: new Date("2024-02-19T11:10:22.710Z"),
            modifiedAt: new Date("2025-07-10T09:50:26.215Z"),
            id: "<value>",
            name: "<value>",
            description: "gnaw below role down",
            recurringInterval: "year",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2024-11-18T06:27:30.397Z"),
                modifiedAt: new Date("2023-04-14T06:52:09.405Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                recurringInterval: "month",
                priceCurrency: "<value>",
                minimumAmount: 400644,
                maximumAmount: 75638,
                presetAmount: 91759,
              },
            ],
            benefits: [
              {
                createdAt: new Date("2024-08-20T03:17:52.789Z"),
                modifiedAt: new Date("2025-02-19T15:52:54.576Z"),
                id: "<value>",
                type: "license_keys",
                description:
                  "certify hunt supposing pant pine wonderful asset about likewise yahoo",
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
                path: "/usr/src",
                mimeType: "<value>",
                size: 227189,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2023-06-30T23:30:09.797Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2025-09-10T12:46:58.994Z"),
                sizeReadable: "<value>",
                publicUrl: "https://acceptable-kiss.org/",
              },
            ],
          },
        ],
        discount: {
          duration: "repeating",
          type: "percentage",
          amount: 860203,
          currency: "Leone",
          createdAt: new Date("2023-11-15T22:51:34.275Z"),
          modifiedAt: new Date("2024-01-10T23:16:52.727Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-07-16T00:09:25.695Z"),
          endsAt: new Date("2025-06-26T02:00:56.651Z"),
          maxRedemptions: 496624,
          redemptionsCount: 823358,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        productId: "<value>",
        productPriceId: "<value>",
        product: {
          createdAt: new Date("2024-06-10T01:33:18.373Z"),
          modifiedAt: new Date("2024-01-17T22:17:44.919Z"),
          id: "<value>",
          name: "<value>",
          description: "insist forearm step-mother whoa",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-08-24T10:53:34.133Z"),
              modifiedAt: new Date("2023-02-13T18:46:24.638Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
              priceCurrency: "<value>",
              priceAmount: 531733,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-05-11T08:23:35.719Z"),
              modifiedAt: new Date("2025-09-06T11:40:02.903Z"),
              id: "<value>",
              type: "downloadables",
              description:
                "eek until round before milky loosely mortally whose casket",
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
              path: "/media",
              mimeType: "<value>",
              size: 555193,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-02-07T23:46:11.920Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-11-11T05:18:13.495Z"),
              sizeReadable: "<value>",
              publicUrl: "https://possible-majority.com/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2025-06-07T04:59:23.361Z"),
          modifiedAt: new Date("2024-01-24T16:01:46.286Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 941973,
          maximumAmount: 593238,
          presetAmount: 650820,
        },
        url: "https://concrete-instruction.net/",
      },
    ],
    pagination: {
      totalCount: 510151,
      maxPage: 604549,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |