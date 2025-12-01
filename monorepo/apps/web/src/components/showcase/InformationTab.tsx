"use client";

import { FieldModifier } from "@/components/ui/FieldModifier";
import { useState } from "react";

export default function InformationTab() {
  const [clubName, setClubName] = useState("AS Talange");
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  return (
    <div className="flex flex-col gap-4">
      <FieldModifier
        label="Nom du club"
        value={clubName}
        type="text"
        onSave={setClubName}
      />
      <FieldModifier
        label="Bannière"
        value={bannerFile || new File([], "")}
        type="file"
        onSave={setBannerFile}
      />
    </div>
  );
}