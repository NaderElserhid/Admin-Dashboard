import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import Land from "./imge/Land.jpg"

const Information = () => {
    return ( 
        <div className="w-[450px] p-11">
        <AspectRatio ratio={16 / 9}>
          <Image src={Land} alt="Image" className="rounded-md object-cover " />
        </AspectRatio>
      </div>
    );
}
 
export default Information;