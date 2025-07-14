# FilesUpdateRequest

## Example Usage

```typescript
import { FilesUpdateRequest } from "@polar-sh/sdk/models/operations/filesupdate.js";

let value: FilesUpdateRequest = {
  id: "<value>",
  filePatch: {},
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The file ID.                                                 |
| `filePatch`                                                  | [components.FilePatch](../../models/components/filepatch.md) | :heavy_check_mark:                                           | N/A                                                          |