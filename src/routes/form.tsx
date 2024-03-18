import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { createFileRoute } from "@tanstack/react-router";
import { SquarePen, Camera, ArrowRightIcon } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/form")({
  component: DemoPaymentMethod,
});

function DemoPaymentMethod() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="md:w-4/5 m-8 w-full">
        <CardHeader className="flex flex-col items-center">
          <CardTitle className="text-4xl">Formulário de pele</CardTitle>
          <CardDescription className="text-center">
            Preencha um formulário e descubra os produtos mais indicados para
            cuidar da sua pele
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <RadioGroup
            defaultValue="card"
            className="grid md:grid-cols-2 grid-cols-1 gap-4"
            onValueChange={setSelectedOption}
          >
            <div>
              <RadioGroupItem
                value="feature-extraction"
                id="feature-extraction"
                className="peer sr-only"
              />
              <Label
                htmlFor="feature-extraction"
                className="flex flex-col items-center text-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Camera className="mb-3 h-6 w-6" />
                Pré preencher com extração de características faciais
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="manual"
                id="manual"
                className="peer sr-only"
              />
              <Label
                htmlFor="manual"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <SquarePen className="mb-3 h-6 w-6 text-center" />
                Preencher formulário manualmente
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            variant="expandIcon"
            iconPlacement="right"
            Icon={() => <ArrowRightIcon size={16} />}
            disabled={!selectedOption}
          >
            Continuar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
