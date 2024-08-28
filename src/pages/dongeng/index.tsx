import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaPlus } from "react-icons/fa6";

interface dongengInterface {
  title: string;
  dongeng: string;
  user: string;
  createdAt: number;
}

export default function Dongeng() {
  const data: dongengInterface[] = [
    {
      user: "Ridho Ganteng",
      title: "Mahakrya Ridho",
      dongeng:
        "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima atque excepturi quidem voluptatum asperiores vitae praesentium sequi dicta cumque perferendis. Cum incidunt ipsam harum, sed, repellat quos, placeat necessitatibus numquam maxime at saepe! Praesentium architecto cum error nam minima excepturi",
      createdAt: 1724775312,
    },
    {
      user: "Ridho Ganteng 2",
      title: "Mahakrya",
      dongeng:
        "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima atque excepturi quidem voluptatum asperiores vitae praesentium sequi dicta cumque perferendis. Cum incidunt ipsam harum, sed, repellat quos, placeat necessitatibus numquam maxime at saepe! Praesentium architecto cum error nam minima excepturi",
      createdAt: 1724775312,
    },
    {
      user: "Ridho Ganteng",
      title: "Maha sasas",
      dongeng:
        "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima atque excepturi quidem voluptatum asperiores vitae praesentium sequi dicta cumque perferendis. Cum incidunt ipsam harum, sed, repellat quos, placeat necessitatibus numquam maxime at saepe! Praesentium architecto cum error nam minima excepturi",
      createdAt: 1724775312,
    },
    {
      user: "Ridho Ganteng",
      title: "Maha sasas",
      dongeng:
        "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima atque excepturi quidem voluptatum asperiores vitae praesentium sequi dicta cumque perferendis. Cum incidunt ipsam harum, sed, repellat quos, placeat necessitatibus numquam maxime at saepe! Praesentium architecto cum error nam minima excepturi",
      createdAt: 1724775312,
    },
    {
      user: "Ridho Ganteng",
      title: "Maha sasas",
      dongeng:
        "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima atque excepturi quidem voluptatum asperiores vitae praesentium sequi dicta cumque perferendis. Cum incidunt ipsam harum, sed, repellat quos, placeat necessitatibus numquam maxime at saepe! Praesentium architecto cum error nam minima excepturi",
      createdAt: 1724775312,
    },
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center gap-y-5 pt-24 md:pt-32 ">
      {data.map((item, index) => (
        <Card
          key={index}
          className="rounded-xl hover:scale-105 duration-500 transition-all ease-out cursor-pointer"
        >
          <CardHeader>
            <CardTitle> {item.title} </CardTitle>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="line-clamp-2"> {item.dongeng} </p>
          </CardContent>

          <CardFooter className="text-gray-500 text-xs  md:text-sm">
            <p className="text-end w-full">
              Post By {item.user} At {item.createdAt}{" "}
            </p>
          </CardFooter>
        </Card>
      ))}
      <section className="fixed right-6 bottom-28 border-2 border-gray-950 p-2 rounded-lg cursor-pointer hover:bg-gray-950 hover:text-gray-100  duration-500 transition-all ease-out md:bottom-auto md:top-32 ">
        <FaPlus className="text-3xl lg:text-4xl" />
      </section>
    </main>
  );
}
