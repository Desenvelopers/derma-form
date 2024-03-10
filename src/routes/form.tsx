import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { createFileRoute } from '@tanstack/react-router'
import { PersonStanding, Meh, Hand } from 'lucide-react'

export const Route = createFileRoute('/form')({
  component: DemoPaymentMethod
})

function DemoPaymentMethod() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className='md:m-24 m-8 w-full'>
        <CardHeader>
          <CardTitle>Titulo do formulario de categoria</CardTitle>
          <CardDescription>
            Descrição do formulario de categoria
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <RadioGroup defaultValue="card" className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div>
              <RadioGroupItem value="card" id="card" className="peer sr-only" />
              <Label
                htmlFor="card"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <PersonStanding className="mb-3 h-6 w-6" />
                Corpo
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="paypal"
                id="paypal"
                className="peer sr-only"
              />
              <Label
                htmlFor="paypal"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Meh className="mb-3 h-6 w-6" />
                Rosto
              </Label>
            </div>
            <div>
              <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
              <Label
                htmlFor="apple"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Hand className="mb-3 h-6 w-6" />
                Mãos
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Continue</Button>
        </CardFooter>
      </Card>
    </div>
  )
                }