"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger, TabsFooter } from "@/components/ui-p/Tabs";
import InformationTab from "@/components/showcase/InformationTab";
import GalleryTab from "@/components/showcase/GalleryTab";
import CalendarTab from "@/components/showcase/CallendarTab";
import { Button } from "@/components/ui/button";

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
                <Button size={'md'} variant="grey">
                  Réinitialiser
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none">
                      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path fill="currentColor" d="M6.046 11.677A7.5 7.5 0 0 1 20 15.5a1 1 0 1 0 2 0A9.5 9.5 0 0 0 4.78 9.963l-.537-3.045a1 1 0 1 0-1.97.347l1.042 5.909a1 1 0 0 0 .412.645a1.1 1.1 0 0 0 .975.125l5.68-1.001a1 1 0 1 0-.347-1.97z" />
                    </g>
                  </svg>
                </Button>
                <Button variant="blue" size="md">
                  Enregistrer
                  <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none" fill-rule="evenodd">
                      <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6.414A2 2 0 0 0 19.414 5L17 2.586A2 2 0 0 0 15.586 2zm0 2h9.586L18 6.414V20H6zm10.238 6.793a1 1 0 1 0-1.414-1.414l-4.242 4.243l-1.415-1.415a1 1 0 0 0-1.414 1.414l2.05 2.051a1.1 1.1 0 0 0 1.556 0l4.88-4.879Z" />
                    </g>
                  </svg>
                </Button>
              </div>
            </TabsFooter>
          </Tabs>
        </div>
      </div>
    </div>
  );
}