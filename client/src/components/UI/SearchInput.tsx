"use client"

import { Input } from '@nextui-org/react'
import { Search } from 'lucide-react'


export default function SearchInput() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-full sm:max-w-[30rem] w-[300px]">
        <Input
          classNames={{
            base: "w-full h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full ",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<Search size={25} />}
          type="search"
        />
      </div>
    </div>
  );
}