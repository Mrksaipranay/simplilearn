'use client';

import { useState } from 'react';
import { useFormState } from 'react-dom';
import { submitRsvp } from '@/app/actions';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const CAPABILITIES = [
  "Skills Data",
  "Manage Style Shift",
  "Leaders -> AI Portfolio",
  "Frontier Capability",
  "User-Centric Capabilities",
  "Winning Organizations"
];

const initialState = {
  message: '',
  error: false
}

export function RsvpForm() {
  // @ts-ignore
  const [state, formAction] = useFormState(submitRsvp, initialState);
  const [selected, setSelected] = useState<string[]>([]);
  const [pending, setPending] = useState(false);

  const toggle = (cap: string) => {
    setSelected(prev => prev.includes(cap) ? prev.filter(c => c !== cap) : [...prev, cap]);
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto -mt-24 relative z-10 border border-gray-100">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#001D4A] mb-4">
          Which capabilities will matter most,<br />
          and how do we build them at scale?
        </h3>
        <p className="text-gray-600 text-sm max-w-lg mx-auto">
          This invite-only roundtable gathers CHROs, CLOs, and enterprise workforce leaders for a candid, senior-level discussion on what's coming next.
        </p>
      </div>

      <form action={(formData) => {
        setPending(true);
        formData.set('capabilities', selected.join(', '));
        formAction(formData);
        setTimeout(() => setPending(false), 1000);
      }} className="space-y-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {CAPABILITIES.map((cap) => (
            <div key={cap} className="flex items-center space-x-3 group">
              <Checkbox
                id={cap}
                checked={selected.includes(cap)}
                onCheckedChange={() => toggle(cap)}
                className="data-[state=checked]:bg-[#0050D8] data-[state=checked]:border-[#0050D8] border-gray-300"
              />
              <label
                htmlFor={cap}
                className="text-sm text-gray-700 font-medium leading-tight select-none cursor-pointer"
              >
                {cap}
              </label>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            name="email"
            type="email"
            placeholder="Enter your professional email"
            required
            className="flex-1 bg-gray-50 border-gray-200 focus:border-[#0050D8]"
          />
          <Button type="submit" variant="rsvp" disabled={pending} className="w-full sm:w-auto px-8 py-2">
            {pending ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
            RSVP NOW
          </Button>
        </div>

        {state.message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center text-sm font-medium p-3 rounded ${state.error ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-700'}`}
          >
            {state.message}
          </motion.div>
        )}
      </form>
    </div>
  )
}
