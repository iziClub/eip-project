"use client";

import { FieldModifier } from "@/components/ui/FieldModifier";
import { useState } from "react";

export default function InformationTab() {
  const [clubName, setClubName] = useState("AS Talange");
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [slogan, setSlogan] = useState("Le club le plus cool de la ville!");
  const [description, setDescription] = useState(
    "Bienvenue à l'AS Talange, le club où la passion du sport rencontre l'esprit d'équipe et la convivialité. Rejoignez-nous pour vivre des moments inoubliables sur et en dehors du terrain!"
  );
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
      <FieldModifier
        label="Slogan"
        value={slogan}
        type="text"
        onSave={setSlogan}
      />
      <FieldModifier
        label="Description"
        value={description}
        type="textarea"
        onSave={setDescription}
      />
    </div>
  );
}