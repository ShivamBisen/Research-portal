'use client'
import { Card } from "./components/card";
import { HeadingMajor } from "./components/heading";
import { Searchbox } from "./components/searchbox";

export default function Home() {
  return (
    <div className="p-4   ">
        <div className="flex justify-between items-center ">
          <HeadingMajor>Explore</HeadingMajor>
          <div className="">
          <Searchbox onclick={()=>{}}></Searchbox></div>
        </div>
        <div className="flex items-center text-center mt-4 justify-evenly gap-4 flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </div>
    </div>
  );
}
