import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";
import { useToast } from "../ui/use-toast";
import { getWeather } from "@/api";
import { ToastAction } from "@radix-ui/react-toast";
const Navbar = () => {
  const { toast } = useToast();
  const [inputValue, setInputValue] =
    React.useState<string>();

  //Search Function
  const handleSearch = async () => {
    // ** Validate input so user can't search without value

    if (inputValue === undefined || inputValue === "") {
      toast({
        duration: 2000,
        variant: "destructive",
        title: "Please enter city Name",
        description:
          "There was a problem with your request.",
      });
      return;
    }

    try {
      const data = await getWeather(inputValue!);
      console.log(data);
    } catch (error) {
      toast({
        duration: 2000,
        variant: "destructive",
        title: "Internal Error",
        description:
          "There was a problem with server , we are working on it. Please try again later",
        action: (
          <ToastAction altText="Try again">
            Try again
          </ToastAction>
        ),
      });
    }
  };

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
              value={inputValue}
              onChange={(e) =>
                setInputValue(e.target.value)
              }
              placeholder="Enter city"
              className="w-[70vw]"
            />

            <Button
              className="ml-3"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
