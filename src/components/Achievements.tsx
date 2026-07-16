import { Card } from "@/components/ui/card";
import { Trophy, Heart, Award } from "lucide-react";
import { useState } from "react";
import ProjectViewer from "@/components/ProjectViewer";

import sih241 from "@/assets/sih241.jpg";
import sih242 from "@/assets/sih242.jpg";
import sih243 from "@/assets/sih243.jpg";
import socialactivity from "@/assets/socialactivity.jpg";

const achievements = [
  {
    icon: Trophy,
    category: "National Level Competition",
    title: "SIH 2024 Finalist",
    description:
      "Developed an intelligent platform for alumni-student interaction for the Technical Education Department, Government of Rajasthan.",
    color: "text-accent-teal",
    images: [sih241, sih242, sih243],
  },
];

const extracurricular = [
  {
    icon: Award,
    category: "Sports",
    title: "Athletics Runner-up",
    description:
      "Runner-up in athletics match at Bannari Amman Institute of Technology.",
    color: "text-accent-purple",
    images: [],
  },
  {
    icon: Heart,
    category: "Social Activities",
    title: "Swachhata Hi Seva 2023",
    description:
      "Certificate of Appreciation for contributing to the Swachhata Hi Seva 2023 campaign.",
    color: "text-accent-coral",
    images: [socialactivity],
  },
  {
    icon: Heart,
    category: "LEO Club",
    title: "Community Service",
    description:
      "Active member of Lions Club, contributing to community service and leadership events.",
    color: "text-accent-teal",
    images: [],
  },
];

type Activity = (typeof achievements)[0] | (typeof extracurricular)[0];

export const Achievements = () => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  );
  const [imgIndex, setImgIndex] = useState(0);
  const [fullView, setFullView] = useState(false);

  const openActivity = (activity: Activity) => {
    setSelectedActivity(activity);
    setImgIndex(0);
    setFullView(false);
  };

  const closeModal = () => {
    setSelectedActivity(null);
    setImgIndex(0);
    setFullView(false);
  };

  const nextImg = () => {
    if (
      selectedActivity &&
      imgIndex < selectedActivity.images.length - 1
    ) {
      setImgIndex((prev) => prev + 1);
    }
  };

  const prevImg = () => {
    if (selectedActivity && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  const renderActivityCard = (activity: Activity, index: number) => {
    const Icon = activity.icon;

    return (
      <Card
        key={activity.title}
        onClick={() => openActivity(activity)}
        className="cursor-pointer border-border/50 p-6 shadow-soft transition-smooth hover:scale-105 hover:shadow-medium"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div
              className={`${activity.color} shrink-0 rounded-lg bg-muted p-3`}
            >
              <Icon className="h-6 w-6" />
            </div>

            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {activity.category}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-bold">{activity.title}</h4>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {activity.description}
            </p>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <section id="achievements" className="bg-muted/30 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-3 space-y-2 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Achievements & Extracurricular
          </h2>

          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-accent" />
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="mb-4 text-center text-2xl font-bold">
              Key Achievements
            </h3>

            <div className="mx-auto max-w-md">
              {achievements.map(renderActivityCard)}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-center text-2xl font-bold">
              Extracurricular Activities
            </h3>

            <div className="grid gap-4 md:grid-cols-3">
              {extracurricular.map(renderActivityCard)}
            </div>
          </div>
        </div>
      </div>

      {selectedActivity && !fullView && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={closeModal}
        >
          <div
            className="relative max-h-[90vh] w-[93%] max-w-3xl overflow-y-auto rounded-xl bg-white p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-2">
              <h2 className="min-w-0 flex-1 text-sm font-bold leading-5 sm:text-lg sm:leading-6">
                {selectedActivity.title}
              </h2>

              {selectedActivity.images.length > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullView(true);
                  }}
                  className="shrink-0 rounded bg-black px-3 py-1 text-xs text-white hover:bg-gray-800"
                >
                  View Full
                </button>
              )}
            </div>

            <div className="flex items-center justify-center gap-2 md:gap-7">
              {selectedActivity.images.length > 1 && (
                <button
                  onClick={prevImg}
                  disabled={imgIndex === 0}
                  aria-label="Previous image"
                  className="shrink-0 text-3xl text-black disabled:opacity-20"
                >
                  ‹
                </button>
              )}

              <div className="flex h-[330px] w-[850px] max-w-[72vw] items-center justify-center overflow-hidden rounded-xl border bg-white p-3 max-md:h-[180px] max-md:w-[calc(100vw-70px)] max-md:max-w-none">
                {selectedActivity.images.length > 0 ? (
                  <img
                    src={selectedActivity.images[imgIndex]}
                    alt={selectedActivity.title}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <p className="text-sm text-gray-500">
                    No image available for this activity.
                  </p>
                )}
              </div>

              {selectedActivity.images.length > 1 && (
                <button
                  onClick={nextImg}
                  disabled={
                    imgIndex === selectedActivity.images.length - 1
                  }
                  aria-label="Next image"
                  className="shrink-0 text-3xl text-black disabled:opacity-20"
                >
                  ›
                </button>
              )}
            </div>

            <div className="mt-3 text-center text-sm text-gray-500">
              {selectedActivity.images.length === 0
                ? "0 / 0"
                : `${imgIndex + 1} / ${selectedActivity.images.length}`}
            </div>
          </div>
        </div>
      )}

      {fullView && selectedActivity && (
        <ProjectViewer
          images={selectedActivity.images}
          initialIndex={imgIndex}
          onImageChange={setImgIndex}
          onClose={() => setFullView(false)}
        />
      )}
    </section>
  );
};

export default Achievements;