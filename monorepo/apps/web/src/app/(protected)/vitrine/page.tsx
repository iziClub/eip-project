"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger, TabsFooter } from "@/components/ui/Tabs";
import InformationTab from "@/components/showcase/InformationTab";
import GalleryTab from "@/components/showcase/GalleryTab";
import CalendarTab from "@/components/showcase/CallendarTab";
import Button from "@/components/ui/Button";

export default function VitrinePage() {
  return (
    <div className="px-6 pb-6 grid-layout grid-gap h-full overflow-hidden">
      <div className="el-container col-span-7 h-max">
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

            <TabsFooter>
              <div className="flex gap-2">
                <Button variant="grey" size="lg">
                  Réinitialiser
                </Button>
                <Button variant="save" size="lg">
                  Enregistrer
                </Button>
              </div>
            </TabsFooter>
          </Tabs>
        </div>
      </div>
    </div>
  );
}