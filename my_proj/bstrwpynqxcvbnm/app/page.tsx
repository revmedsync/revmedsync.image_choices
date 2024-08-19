import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const images = [
  { id: 0, val: "poster1.jpg" },
  { id: 1, val: "poster2.jpg" },
  { id: 2, val: "poster3.jpg" },
  { id: 3, val: "poster4.jpg" },
  { id: 4, val: "poster5.jpg" },
  { id: 5, val: "poster6.jpg" },
  { id: 6, val: "poster7.jpg" },
  { id: 7, val: "poster8.jpg" },
  { id: 8, val: "poster9.jpg" },
  { id: 9, val: "poster10.jpg" },
  { id: 10, val: "poster11.jpg" },
  { id: 11, val: "poster12.jpg" },
  { id: 12, val: "poster13.jpg" },
];

export default function Component() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Carousel className="rounded-lg overflow-hidden">
        <CarouselContent>
          {images.map((items) => (
            <CarouselItem key={items.id}>
              <img
                src={items.val}
                width={800}
                height={450}
                alt={`Carousel Image ${items.id + 1}`}
                className="object-contain w-full h-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <ChevronLeftIcon className="w-6 h-6" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <ChevronRightIcon className="w-6 h-6" />
        </CarouselNext>
      </Carousel>
    </div>
  );
}
