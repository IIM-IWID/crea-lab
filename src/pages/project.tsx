import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import json from "../json/project.json";
import { CardProjectComponent } from "../components/card-project.tsx";

const Project = () => {
  return (
    <main className="p-6">
      <p className="text-center mb-12 text-2xl">Top projets</p>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-md mx-auto"
      >
        <CarouselContent>
          {json.project.map((element: any) => (
            <CarouselItem className="bg-white flex flex-col items-center justify-center gap-4 p-5">
              <p className="text-black">{element.title}</p>
              <img src="https://placehold.co/200" />
              <p className="text-black">crée par : {element.author}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p className="text-center mb-12 text-xl my-12">All projects</p>
      <div className="grid grid-cols-4 gap-4">
        {json.project.map((element: any) => (
          <CardProjectComponent title={element.title} author={element.author} />
        ))}
      </div>
    </main>
  );
};

export default Project;
