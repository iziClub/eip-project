// components/modals/EditTeamsModal.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface Team {
  id: string;
  name: string;
  categrory: string;
  color: string;
}

export default function EditTeamsModal() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [teamName, setTeamName] = useState("");
  const [teamCategory, setTeamCategory] = useState("");
  const [teamColor, setTeamColor] = useState("#3b82f6");

  const handleCreateTeam = () => {
    if (teamName.trim()) {
      const newTeam: Team = {
        id: Date.now().toString(),
        name: teamName,
        categrory: teamCategory,
        color: teamColor,
      };
      setTeams([...teams, newTeam]);
      setTeamName("");
      setTeamCategory("");
      setTeamColor("#3b82f6");
    }
  };

  const handleDeleteTeam = (id: string) => {
    setTeams(teams.filter((team) => team.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Formulaire de création */}
      <div className="space-y-4">
        <div className="flex gap-8 items-end">
            <div className="flex w-full gap-3">
                <div className="flex-1">
                    <label className="text-xs font-semibold mb-1 block">
                    *Nom de l'équipe
                    </label>
                    <Input
                    value={teamName}
                    className="h-[60px]"
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="Entrez le nom"
                    onKeyPress={(e) => e.key === "Enter" && handleCreateTeam()}
                    />
                </div>
                <div className="flex-1">
                    <label className="text-xs font-semibold mb-1 block">
                    *Catégorie de l'équipe
                    </label>
                    <Input
                    value={teamCategory}
                    className="h-[60px]"
                    onChange={(e) => setTeamCategory(e.target.value)}
                    placeholder="Entrez la catégorie"
                    />
                </div>
            </div>
            <Button onClick={handleCreateTeam} variant="blue" className="h-[60px]">
                Créer l'équipe
                <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M11 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zM5 5h4v4H5zm16 0a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zm-6 0h4v4h-4zm-6 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 2H5v4h4zm4 2a1 1 0 0 1 1-1h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 0 1-1-1"/></g></svg>
            </Button>
        </div>
      </div>

      {/* Liste des équipes créées */}
      {teams.length > 0 && (
        <div className="space-y-2">
          <label className="text-sm font-medium">Équipes créées</label>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {teams.map((team) => (
              <div
                key={team.id}
                className="flex items-center justify-between p-3 rounded-lg border bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: team.color }}
                  />
                  <span className="font-medium">{team.name}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDeleteTeam(team.id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}