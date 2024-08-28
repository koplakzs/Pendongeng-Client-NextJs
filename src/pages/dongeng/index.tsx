import CardDongeng from "@/components/CardDongeng";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

export interface dongengInterface {
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
    <main className="relative min-h-screen flex flex-col items-center gap-y-5 pt-24 md:pt-32 lg:pe-5 ">
      {data.map((item, index) => (
        <CardDongeng
          key={index}
          title={item.title}
          user={item.user}
          dongeng={item.dongeng}
          createdAt={item.createdAt}
        />
      ))}
      <section className="fixed right-6 bottom-28 border-2 border-gray-950 p-2 rounded-lg cursor-pointer hover:bg-gray-950 hover:text-gray-100  duration-500 transition-all ease-out md:bottom-auto md:top-32 ">
        <Link href={"/dongeng/create"}>
          <FaPlus className="text-3xl lg:text-4xl" />
        </Link>
      </section>
    </main>
  );
}
