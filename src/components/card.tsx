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

type CardComponentProps = {
  title: string;
  description: string;
  stock: number;
};

export const CardComponent = ({
  title,
  description,
  stock,
}: CardComponentProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-4">
        <img src="https://placehold.co/100" />
        <div>
          <p className="text-black">stock : {stock}</p>
          {stock == 0 ? <Button variant="outline">Signaler</Button> : null}
        </div>
      </CardContent>
    </Card>
  );
};
