import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";
const Navbar = () => {
  return (
    <div>
      <nav>
        {/* left side */}
        <div className="flex justify-between my-2">
          <div className="flex bg-gray-100 items-center px-2 py-3 rounded-md">
            {" "}
            <Cloud color="black" />{" "}
            <span className="ml-2 font-bold">Weather</span>
          </div>

          <div className="flex items-center">
            <Input
              placeholder="Enter city"
              className="w-[70vw]"
            />

            <Button className="ml-3">Search</Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
