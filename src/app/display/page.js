"use client"
import { useState } from 'react';
import { usebearStore } from "../stores/store"

const Page = () => {
  const { bears } = usebearStore();
  const increasePopulation = usebearStore((state) => state.increasePopulation);
  const removeAllBears = usebearStore((state) => state.removeAllBears);
  const updateBears = usebearStore((state) => state.updateBears);

  const [showInput, setShowInput] = useState(false);
  const [newBears, setNewBears] = useState('');

  const handleUpdateBears = () => {
    const parsedBears = parseInt(newBears, 10);
    if (!isNaN(parsedBears)) {
      updateBears(parsedBears);
    }
    setShowInput(false);
    setNewBears('');
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-zinc-800 min-h-screen w-full p-4 gap-4 ">
        <p className="text-purple-500 text-3xl ">bears are {bears}</p>
        <button onClick={increasePopulation} className="text-purple-500 text-lg p-4 rounded-xl bg-green-300 ">increase population of the bears</button>
        <button onClick={removeAllBears} className="text-purple-500 text-lg p-4 rounded-xl bg-green-300 ">remove all bears</button>
        <button onClick={() => setShowInput(true)} className="text-purple-500 text-lg p-4 rounded-xl bg-green-300 ">update bears</button>

        {showInput && (
          <div className="flex flex-col items-center gap-2">
            <input
              type="number"
              value={newBears}
              onChange={(e) => setNewBears(e.target.value)}
              className="p-4 text-black rounded"
              placeholder="Enter new number"
            />
            <button onClick={handleUpdateBears} className="text-purple-500 text-lg p-2 rounded-xl bg-blue-300 ">Confirm Update</button>
          </div>
        )}
      </div>
    </>
  )
}

export default Page;