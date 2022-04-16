import React, { useCallback, useState } from "react";
import {
  TextStyle,
  Button,
  Stack,
  Caption,
  DropZone,
  Thumbnail,
} from "@shopify/polaris";



import { NoteMinor,CameraMajor } from "@shopify/polaris-icons";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider, Icon } from "@shopify/polaris";

export default function DropZoneExample() {
  const [files, setFiles] = useState([]);

  const handleDropZoneDrop = useCallback(
    (_dropFiles, acceptedFiles, _rejectedFiles) =>
      setFiles((files) => [...files, ...acceptedFiles]),
    []
  );

  const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

  const fileUpload = !files.length && (
    <div style={{ padding: "1rem" }}>
      <Stack distribution="Right">
        <Stack vertical>
          <Button>
            <Icon source={CameraMajor} color="base" />{" "}
          </Button>
        </Stack>
      </Stack>
    </div>
  );
  const uploadedFiles = files.length > 0 && (
    <Stack vertical>
      {files.map((file, index) => (
        <Stack alignment="center" key={index}>
          <Thumbnail
            size="Large"
            alt={file.name}
            source={
              validImageTypes.includes(file.type)
                ? window.URL.createObjectURL(file)
                : NoteMinor
            }
          />
        </Stack>
      ))}
    </Stack>
  );

  return (
    <AppProvider i18n={enTranslations}>
        <div style={{width: 50, height: 50}}>
      <DropZone onDrop={handleDropZoneDrop} variableHeight>
        {uploadedFiles}
        {fileUpload}
      </DropZone>
      </div>
    </AppProvider>
  );
}
