"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InformationTab from "@/components/showcase/InformationTab";
import GalleryTab from "@/components/showcase/GalleryTab";
import CalendarTab from "@/components/showcase/CallendarTab";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useModalStore } from "@/stores/ModalStore";
import EditTeamsModal from "@/components/modals/content/tags";

export default function VitrinePage() {
  const [activeTab, setActiveTab] = useState("Information");
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div className="px-6 pb-6 grid-layout grid-gap h-full overflow-hidden">
      <div className="el-container col-span-7 h-max bg-white">
        <div className="flex flex-row h-full">
          <Tabs
            defaultValue="Information"
            className="w-full flex flex-col h-full"
            onValueChange={setActiveTab}>
            <TabsList className="w-full flex">
              <TabsTrigger value="Information" className="justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-.01 6c.558 0 1.01.452 1.01 1.01v5.124A1 1 0 0 1 12.5 18h-.49A1.01 1.01 0 0 1 11 16.99V12a1 1 0 1 1 0-2zM12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2"/></g></svg>
                <span>Informations</span>
              </TabsTrigger>
              <TabsTrigger value="Gallery" className="justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M20 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a1 1 0 1 1 2 0v2.1l4.995-4.994a1.25 1.25 0 0 1 1.768 0l4.065 4.066l1.238-1.238a1.25 1.25 0 0 1 1.768 0L20 15.101V5h-8a1 1 0 1 1 0-2zM9.879 12.05L4 17.93V19h16v-1.071l-3.05-3.05l-.707.707l.207.207a1 1 0 0 1-1.414 1.414zM5 2a1 1 0 0 1 .898.56l.048.117l.13.378a3 3 0 0 0 1.684 1.8l.185.07l.378.129a1 1 0 0 1 .117 1.844l-.117.048l-.378.13a3 3 0 0 0-1.8 1.684l-.07.185l-.129.378a1 1 0 0 1-1.844.117l-.048-.117l-.13-.378a3 3 0 0 0-1.684-1.8l-.185-.07l-.378-.129a1 1 0 0 1-.117-1.844l.117-.048l.378-.13a3 3 0 0 0 1.8-1.684l.07-.185l.129-.378A1 1 0 0 1 5 2m10.5 5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M5 5.196A5 5 0 0 1 4.196 6q.448.355.804.804q.355-.448.804-.804A5 5 0 0 1 5 5.196"/></g></svg>
                <span>Gallerie</span>
              </TabsTrigger>
              <TabsTrigger value="Calendar" className="justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M17 12a5 5 0 1 1 0 10a5 5 0 0 1 0-10m-1-9a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v3h-2V7H5v12h5v2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2V4a1 1 0 0 1 2 0v1h6V4a1 1 0 0 1 1-1m1 11a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 .5a1 1 0 0 1 1 1v.5a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1M8.5 14a1 1 0 0 1 .117 1.993L8.5 16H8a1 1 0 0 1-.117-1.993L8 14zm2.5-4a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z"/></g></svg>
                <span>Calendrier</span>
              </TabsTrigger>
            </TabsList>

            <div className="flex-1 overflow-auto">
              <TabsContent value="Information" className="mt-0">
                <InformationTab />
              </TabsContent>

              <TabsContent value="Gallery" className="mt-0">
                <GalleryTab />
              </TabsContent>

              <TabsContent value="Calendar" className="mt-0">
                <CalendarTab />
              </TabsContent>
            </div>

            <div className="border-t pt-4 mt-auto">
              <div className={`flex ${activeTab === "Calendar" ? "justify-between" : "justify-end"} gap-2`}>
                {activeTab === "Calendar" && (
                  <Button size={'md'} variant="grey" onClick={() => openModal({title: "Modifier les équipes", content: <EditTeamsModal />})}>
                    Modifier les équipes
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"/>
                    </svg>
                  </Button>
                )}
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
                  <Button size="md" variant="blue" className="bg-blue-600 hover:bg-blue-700">
                    Enregistrer
                    <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <g fill="none" fillRule="evenodd">
                        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6.414A2 2 0 0 0 19.414 5L17 2.586A2 2 0 0 0 15.586 2zm0 2h9.586L18 6.414V20H6zm10.238 6.793a1 1 0 1 0-1.414-1.414l-4.242 4.243l-1.415-1.415a1 1 0 0 0-1.414 1.414l2.05 2.051a1.1 1.1 0 0 0 1.556 0l4.88-4.879Z" />
                      </g>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}