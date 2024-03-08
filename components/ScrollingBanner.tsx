import { stacks } from "@/utils";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import Image from "next/image";


export default function ScrollingBanner() {
    return (
        <ScrollShadow
            hideScrollBar
            orientation="horizontal"
            isEnabled
            size={300}
            visibility="both"
            offset={-20}
            className="w-full h-[80px] flex justify-start items-center"
            style={{
                // @ts-ignore
                "--gap": "100px",
                "--duration": `${10}s`,
              }}
        >
            <div className="flex animate-scrolling-banner w-max items-stretch gap-[--gap]">
            {stacks.map((stack) => (
              <div
                className="flex justify-start items-center gap-2"
                key={stack.id}>
                    <Image
                        objectFit="contain"
                        objectPosition="center"
                  width={60}
                  height={60}
                  src={stack.image}
                  alt={stack.label}
                />
                <span>{stack.label}</span>
              </div>
            ))}
          </div>
    </ScrollShadow>
        )

}