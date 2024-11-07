import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "./ui/button";

type CardProjectComponentProps = {
  title: string;
  author: string;
  className: string;
  request: boolean;
};

export const CardProjectComponent = ({
  title,
  author,
  className,
  request,
}: CardProjectComponentProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{author}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-4">
        <img src="https://placehold.co/100" />
        <div>
          <p className="text-black">Status : en cours</p>
          {request ? (
            <p className="text-red-800">Recherche collaborateur</p>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
};
