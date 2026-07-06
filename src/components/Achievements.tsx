import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Trophy, Heart, Award, X } from "lucide-react";
import ProjectViewer from "@/components/ProjectViewer";

// Change this filename to your exact file name in src/assets
import sih24 from "@/assets/sih24.jpeg";

type ActivityItem = {
icon: typeof Trophy;
category: string;
title: string;
description: string;
color: string;
images?: string[];
};

const achievements: ActivityItem[] = [
{
icon: Trophy,
category: "Hackathon",
title: "SIH 2024 Finalist",
description:
"Developed an intelligent platform for alumni-student interaction for the Technical Education Department, Government of Rajasthan.",
images: [sih24],
color: "text-accent-teal",
},
];

const extracurricular: ActivityItem[] = [
{
icon: Award,
category: "Sports",
title: "Athletics Runner-up",
description:
"Runner-up in athletics match at Bannari Amman Institute of Technology.",
color: "text-accent-purple",
},
{
icon: Heart,
category: "Social Activities",
title: "Swachhata Hi Seva 2023",
description:
"Certificate of Appreciation for contributing to the Swachhata Hi Seva 2023 campaign.",
color: "text-accent-coral",
},
{
icon: Heart,
category: "LEO Club",
title: "Community Service",
description:
"Active member of Lion's Club, contributing to community service and leadership events.",
color: "text-accent-teal",
},
];

export const Achievements = () => {
const [selectedItem, setSelectedItem] = useState<ActivityItem | null>(null);
const [imgIndex, setImgIndex] = useState(0);
const [fullView, setFullView] = useState(false);

const openModal = (item: ActivityItem) => {
setSelectedItem(item);
setImgIndex(0);
setFullView(false);
};

const closeModal = () => {
setSelectedItem(null);
setImgIndex(0);
setFullView(false);
};

const nextImg = () => {
if (
selectedItem?.images &&
imgIndex < selectedItem.images.length - 1
) {
setImgIndex((prev) => prev + 1);
}
};

const prevImg = () => {
if (selectedItem?.images && imgIndex > 0) {
setImgIndex((prev) => prev - 1);
}
};

return ( <section id="achievements" className="bg-muted/30 px-4 py-12"> <div className="mx-auto max-w-7xl"> <div className="mb-8 space-y-2 text-center"> <h2 className="text-4xl font-bold md:text-5xl">
Achievements & Extracurricular </h2>
      <div className="mx-auto h-1 w-20 rounded-full bg-gradient-accent" />
    </div>

    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-center text-2xl font-bold">
          Key Achievements
        </h3>

        <div className="mx-auto max-w-3xl">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;

            return (
              <Card
                key={achievement.title}
                onClick={() => openModal(achievement)}
                className="cursor-pointer border-border/50 p-6 shadow-soft transition-smooth hover:scale-105 hover:shadow-medium"
              >
                <div className="flex gap-4">
                  <div
                    className={`${achievement.color} h-fit shrink-0 rounded-lg bg-muted p-4`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      {achievement.category}
                    </p>

                    <h4 className="text-xl font-bold">
                      {achievement.title}
                    </h4>

                    <p className="leading-relaxed text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-center text-2xl font-bold">
          Extracurricular Activities
        </h3>

        <div className="grid gap-4 md:grid-cols-3">
          {extracurricular.map((activity) => {
            const Icon = activity.icon;

            return (
              <Card
                key={activity.title}
                onClick={() => openModal(activity)}
                className="cursor-pointer border-border/50 p-6 shadow-soft transition-smooth hover:scale-105 hover:shadow-medium"
              >
                <div className="space-y-4">
                  <div
                    className={`${activity.color} w-fit rounded-lg bg-muted p-3`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      {activity.category}
                    </p>

                    <h4 className="text-lg font-bold">
                      {activity.title}
                    </h4>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  </div>

  {selectedItem && !fullView && (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={closeModal}
    >
      <div
        className="relative w-[93%] max-w-3xl rounded-xl bg-white p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <h2 className="min-w-0 flex-1 text-sm font-bold leading-5 sm:text-lg">
            {selectedItem.title}
          </h2>

          <div className="flex shrink-0 items-center gap-2">
            {selectedItem.images && selectedItem.images.length > 0 && (
              <button
                onClick={() => setFullView(true)}
                className="rounded bg-black px-3 py-1 text-xs text-white hover:bg-gray-800"
              >
                View Full
              </button>
            )}

            <button
              onClick={closeModal}
              className="rounded p-1 text-black hover:bg-gray-100"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {selectedItem.images && selectedItem.images.length > 0 ? (
          <>
            <div className="flex items-center justify-center gap-2 md:gap-7">
              {selectedItem.images.length > 1 && (
                <button
                  onClick={prevImg}
                  disabled={imgIndex === 0}
                  className="shrink-0 text-3xl text-black disabled:opacity-20"
                >
                  ‹
                </button>
              )}

              <div className="flex h-[330px] w-[850px] max-w-[72vw] items-center justify-center overflow-hidden rounded-xl border bg-white p-3 max-md:h-[180px] max-md:w-[calc(100vw-70px)] max-md:max-w-none">
                <img
                  src={selectedItem.images[imgIndex]}
                  alt={selectedItem.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {selectedItem.images.length > 1 && (
                <button
                  onClick={nextImg}
                  disabled={
                    imgIndex === selectedItem.images.length - 1
                  }
                  className="shrink-0 text-3xl text-black disabled:opacity-20"
                >
                  ›
                </button>
              )}
            </div>

            <div className="mt-3 text-center text-sm text-gray-500">
              {imgIndex + 1} / {selectedItem.images.length}
            </div>
          </>
        ) : (
          <div className="rounded-xl border bg-muted/30 p-6">
            <p className="leading-relaxed text-muted-foreground">
              {selectedItem.description}
            </p>
          </div>
        )}
      </div>
    </div>
  )}

  {selectedItem?.images && fullView && (
    <ProjectViewer
      images={selectedItem.images}
      initialIndex={imgIndex}
      onImageChange={setImgIndex}
      onClose={() => setFullView(false)}
    />
  )}
</section>

);
};

export default Achievements;
