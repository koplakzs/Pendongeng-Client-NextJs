import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { dongengInterface } from "@/pages/dongeng";

const CardDongeng = ({ title, user, dongeng, createdAt }: dongengInterface) => {
  return (
    <Card className="rounded-xl hover:scale-105 duration-500 transition-all ease-out cursor-pointer">
      <CardHeader>
        <CardTitle> {title} </CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="line-clamp-2"> {dongeng} </p>
      </CardContent>

      <CardFooter className="text-gray-500 text-xs  md:text-sm">
        <p className="text-end w-full">
          Post By {user} At {createdAt}{" "}
        </p>
      </CardFooter>
    </Card>
  );
};

export default CardDongeng;
