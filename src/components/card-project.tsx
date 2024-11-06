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
};

export const CardProjectComponent = ({
  title,
  author,
}: CardProjectComponentProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{author}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-4">
        <img src="https://placehold.co/100" />
        <div>
          <Button>Contacter</Button>
        </div>
      </CardContent>
    </Card>
  );
};
