import { useState } from "react";

export default function CalendarTab() {
    const mockTeams = [
    {
      id: "team_1",
      name: "Senior M1 - Régional 3",
      category: "senior",
      level: "M1",
      division: "Régional 3",
      color: "#DC2626",
      slots: [
        { id: "slot_1", day: "Lundi", dayIndex: 1, startTime: "9h", endTime: "11h" },
        { id: "slot_2", day: "Mercredi", dayIndex: 3, startTime: "9h", endTime: "11h" },
        { id: "slot_3", day: "Dimanche", dayIndex: 0, startTime: "9h", endTime: "11h" }
      ]
    },
    {
      id: "team_2",
      name: "Senior M2 - Seniors D2",
      category: "senior",
      level: "M2",
      division: "Seniors D2",
      color: "#EA580C",
      slots: [
        { id: "slot_4", day: "Lundi", dayIndex: 1, startTime: "15h", endTime: "17h" },
        { id: "slot_5", day: "Mercredi", dayIndex: 3, startTime: "15h", endTime: "17h" },
        { id: "slot_6", day: "Samedi", dayIndex: 6, startTime: "15h", endTime: "17h" }
      ]
    },
    {
      id: "team_3",
      name: "U15 M1 - Moselle U15 - D1",
      category: "youth",
      level: "U15 M1",
      division: "Moselle U15 - D1",
      color: "#FBBF24",
      slots: [
        { id: "slot_7", day: "Mardi", dayIndex: 2, startTime: "9h", endTime: "11h" },
        { id: "slot_8", day: "Jeudi", dayIndex: 4, startTime: "9h", endTime: "11h" },
        { id: "slot_9", day: "Samedi", dayIndex: 6, startTime: "9h", endTime: "11h" }
      ]
    },
    {
      id: "team_4",
      name: "U14 M1 - Moselle U14 - D1",
      category: "youth",
      level: "U14 M1",
      division: "Moselle U14 - D1",
      color: "#C084FC",
      slots: [
        { id: "slot_10", day: "Mardi", dayIndex: 2, startTime: "18h", endTime: "19h" },
        { id: "slot_11", day: "Jeudi", dayIndex: 4, startTime: "18h", endTime: "19h" },
        { id: "slot_12", day: "Dimanche", dayIndex: 0, startTime: "10h", endTime: "12h" }
      ]
    },
    {
      id: "team_5",
      name: "U13 M1 - Moselle U13 - D3",
      category: "youth",
      level: "U13 M1",
      division: "Moselle U13 - D3",
      color: "#3B82F6",
      slots: [
        { id: "slot_13", day: "Mardi", dayIndex: 2, startTime: "13h", endTime: "21h" },
        { id: "slot_14", day: "Jeudi", dayIndex: 4, startTime: "13h", endTime: "21h" },
        { id: "slot_15", day: "Samedi", dayIndex: 6, startTime: "13h", endTime: "21h" }
      ]
    }
  ];

  const [teams] = useState(mockTeams);
  // const openModal = useModalStore((state) => state.openModal);
  
  return (
    <div className="space-y-5">
      {
        teams.length === 0 ? (
          <p>Aucune équipe disponible.</p>
        ) : 
        teams.map((team) => (
          <div key={team.id} className="flex flex-col gap-2">
            <p className="font-semibold text-base">{team.name}</p>
            <div className="flex w-full justify-between">
              <div className="flex w-full justify-start gap-3">
                {team.slots.map((slot) => (
                  <div key={slot.id} style={{backgroundColor: team.color}} className="flex items-center rounded-[10px] px-2.5 py-1 gap-10 h-[60px]">
                    <div className="flex flex-col text-white">
                      <span className="text-md font-medium">{slot.day}</span>
                      <span className="text-xs">{slot.startTime} - {slot.endTime}</span>
                    </div>
                    <button className="cursor-pointer text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071l-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07L4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2zm3.717 5H6.003l.862 12.071a1 1 0 0 0 .997.929h8.276a1 1 0 0 0 .997-.929zM10 10a1 1 0 0 1 .993.883L11 11v5a1 1 0 0 1-1.993.117L9 16v-5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m.28-6H9.72l-.333 1h5.226z"/></g></svg>
                    </button>
                  </div>
                ))}
              </div>
              <button className="border border-blue-primary text-blue-primary hover:text-white hover:bg-blue-primary cursor-pointer transition-all rounded-[10px] aspect-square h-[60px] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M16.035 3.015a3 3 0 0 1 4.099-.135l.144.135l.707.707a3 3 0 0 1 .135 4.098l-.135.144L9.773 19.177a1.5 1.5 0 0 1-.562.354l-.162.047l-4.454 1.028a1 1 0 0 1-1.22-1.088l.02-.113l1.027-4.455a1.5 1.5 0 0 1 .29-.598l.111-.125zm-.707 3.535l-8.99 8.99l-.636 2.758l2.758-.637l8.99-8.99l-2.122-2.12Zm3.536-2.121a1 1 0 0 0-1.32-.083l-.094.083l-.708.707l2.122 2.121l.707-.707a1 1 0 0 0 .083-1.32l-.083-.094z"/></g></svg>
              </button>
            </div>
          </div>
        ))
      }
    </div>
  );
}
