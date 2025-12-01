"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { useState } from "react";
import InformationTab from "@/components/showcase/InformationTab";
import GalleryTab from "@/components/showcase/GalleryTab";
import CalendarTab from "@/components/showcase/CallendarTab";

export default function VitrinePage() {
  const [clubName, setClubName] = useState("AS Talange");

  return (
    <div className="px-6 pb-6 grid-layout grid-gap h-full">
      <div className="el-container col-span-7 h-full">
        <div className="flex flex-row h-full">
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
              <InformationTab />
            </TabsContent>

            <TabsContent value="Gallery">
              <GalleryTab />
            </TabsContent>

            <TabsContent value="Calendar">
              <CalendarTab />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}