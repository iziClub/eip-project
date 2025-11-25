"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import TextModifier from "@/components/ui/TextModifier";
import { useState } from "react";

export default function VitrinePage() {
  const [clubName, setClubName] = useState("AS Talange");

  return (
    <div className="p-6 grid-layout grid-gap">
      <div className="el-container col-span-7">
        <div className="flex flex-row">
          <Tabs defaultValue="Information" className="w-full">
            <TabsList>
              <TabsTrigger value="Information" className="justify-center">
                Informations
              </TabsTrigger>
              <TabsTrigger value="Gallery" className="justify-center">
                Gallerie
              </TabsTrigger>
              <TabsTrigger value="Calendar" className="justify-center">
                Calendrier
              </TabsTrigger>
            </TabsList>

            <TabsContent value="Information">
              <TextModifier
                label="Nom du club"
                value={clubName}
                onSave={(newValue) => {
                  setClubName(newValue);

                  // 👉 ici : appel API PUT vers ton back
                  // await api.updateClub({ clubName: newValue })
                }}
                />
            </TabsContent>

            <TabsContent value="Gallery">
              Galerie
            </TabsContent>

            <TabsContent value="Calendar  ">
              Calendrier
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}