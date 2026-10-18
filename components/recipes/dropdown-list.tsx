"use client"

import { X } from "react-feather"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const DropdownList = ({ options, selected, onSelect, onClear }) => {
  return (
    <div className="flex gap-2 items-center text-sm">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="outline" className="justify-between gap-2">
              {selected || "Select option"}
            </Button>
          }
        />
        <DropdownMenuContent className="w-fit">
          <DropdownMenuRadioGroup value={selected} onValueChange={onSelect}>
            {options.map((opt, index) => (
              <DropdownMenuRadioItem key={index} value={opt}>
                {opt}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {selected && (
        <button onClick={onClear} className="cursor-pointer">
          <X size={18} />
        </button>
      )}
    </div>
  )
}

export default DropdownList